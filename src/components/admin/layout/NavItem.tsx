
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, AlertCircle } from "lucide-react";

type StatusType = "active" | "error" | "warning" | "inactive";

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  isSidebarOpen: boolean;
  hasSubItems?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  status?: StatusType;
}

const NavItem = ({ 
  to, 
  icon, 
  label, 
  isActive, 
  isSidebarOpen, 
  hasSubItems = false, 
  isOpen = false, 
  onClick,
  status = "active"
}: NavItemProps) => {
  // Determinar a cor do ícone com base no status
  const getStatusIndicator = () => {
    if (status === "error") {
      return <AlertCircle size={14} className="text-red-500" />;
    }
    return null;
  };

  return (
    <Link
      to={to}
      className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-md transition-all duration-200 ${
        isActive 
          ? "bg-primary text-white shadow-sm" 
          : status === "error" 
            ? "bg-red-50 hover:bg-red-100 hover:shadow-sm" 
            : "hover:bg-gray-100 hover:shadow-sm"
      }`}
      onClick={hasSubItems && onClick ? onClick : undefined}
    >
      <div className="flex items-center gap-3">
        <div className={`${isActive ? "text-white" : status === "error" ? "text-red-500" : "text-primary"}`}>
          {icon}
        </div>
        {isSidebarOpen && (
          <div className="flex items-center gap-2">
            <span className="font-medium">{label}</span>
            {getStatusIndicator()}
          </div>
        )}
      </div>
      {hasSubItems && isSidebarOpen && (
        isOpen ? <ChevronDown size={16} className={isActive ? "text-white" : ""} /> : <ChevronRight size={16} className={isActive ? "text-white" : ""} />
      )}
    </Link>
  );
};

export default NavItem;
