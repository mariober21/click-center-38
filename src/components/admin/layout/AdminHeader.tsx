
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";

interface AdminHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  userName: string;
}

const AdminHeader = ({ isSidebarOpen, setIsSidebarOpen, userName }: AdminHeaderProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <header className="bg-primary text-white py-4 shadow-md z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">ClickCenter</span>
            <span className="bg-white text-primary px-2 py-1 rounded text-xs font-bold">ADMIN</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm text-gray-200">Administrador</p>
              <p className="font-semibold">{userName}</p>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
              {userName.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="border-white text-white hover:bg-white/20">
            <ArrowLeft size={16} className="mr-2" /> Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
