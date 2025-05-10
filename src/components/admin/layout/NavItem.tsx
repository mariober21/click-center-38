
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  isSidebarOpen: boolean;
  hasSubItems?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

const NavItem = ({ 
  to, 
  icon, 
  label, 
  isActive, 
  isSidebarOpen, 
  hasSubItems = false, 
  isOpen = false, 
  onClick 
}: NavItemProps) => (
  <Link
    to={to}
    className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-md transition-all duration-200 ${
      isActive 
        ? "bg-primary text-white shadow-sm" 
        : "hover:bg-gray-100 hover:shadow-sm"
    }`}
    onClick={hasSubItems && onClick ? onClick : undefined}
  >
    <div className="flex items-center gap-3">
      <div className={`${isActive ? "text-white" : "text-primary"}`}>
        {icon}
      </div>
      {isSidebarOpen && <span className="font-medium">{label}</span>}
    </div>
    {hasSubItems && isSidebarOpen && (
      isOpen ? <ChevronDown size={16} className={isActive ? "text-white" : ""} /> : <ChevronRight size={16} className={isActive ? "text-white" : ""} />
    )}
  </Link>
);

export default NavItem;
