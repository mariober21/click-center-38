
import { useState, useEffect, ReactNode } from "react";
import AdminHeader from "./layout/AdminHeader";
import Sidebar from "./layout/Sidebar";
import MainContent from "./layout/MainContent";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [userName, setUserName] = useState<string>("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <AdminHeader 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        userName={userName}
      />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        
        {/* Main content */}
        <MainContent isSidebarOpen={isSidebarOpen}>
          {children}
        </MainContent>
      </div>
    </div>
  );
};

export default AdminLayout;
