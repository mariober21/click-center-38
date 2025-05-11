
import { Button } from "@/components/ui/button";
import { adminSystemService, AdminSectionKey } from "@/services/AdminSystemService";
import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";

interface ActionLoggerProps {
  section: AdminSectionKey;
  action: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  className?: string;
}

/**
 * A wrapper component for buttons that logs admin actions
 * and ensures the section is functioning properly before executing
 */
const ActionLogger = ({ 
  section, 
  action, 
  children, 
  variant = "default",
  className = ""
}: ActionLoggerProps) => {
  const [isLogging, setIsLogging] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAction = () => {
    setIsLogging(true);
    setSuccess(false);
    
    // Simulate an API call that takes time
    setTimeout(() => {
      const result = adminSystemService.logAction(section, action);
      setSuccess(result);
      setIsLogging(false);
      
      // Reset success indicator after a delay
      if (result) {
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
    }, 500);
  };

  return (
    <Button 
      variant={variant}
      className={`${className} relative`}
      onClick={handleAction}
      disabled={isLogging}
    >
      {children}
      
      {isLogging && (
        <span className="ml-2 animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      )}
      
      {success && (
        <span className="absolute inset-0 flex items-center justify-center bg-primary/90 rounded-md">
          <Check className="text-white" />
        </span>
      )}
    </Button>
  );
};

export default ActionLogger;
