
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if the user is an admin
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
    
    // If not admin, show toast notification
    if (!adminStatus) {
      toast({
        title: "Acesso negado",
        description: "Você precisa ter permissões de administrador para acessar esta página.",
        variant: "destructive",
      });
    }
  }, [toast]);
  
  // Show loading while checking admin status
  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center">Verificando permissões...</div>;
  }
  
  // Redirect to admin login if not an admin
  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }
  
  // Render children if admin
  return <>{children}</>;
};

export default AdminGuard;
