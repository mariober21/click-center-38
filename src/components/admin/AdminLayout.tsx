
import { useState, useEffect, ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ShoppingBag,
  Package,
  Users,
  Settings,
  BarChart,
  FileText,
  Home,
  Menu,
  X
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [userName, setUserName] = useState<string>("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();
  const location = useLocation();
  
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
  
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-4 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-primary-dark"
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
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                {userName.substring(0, 2).toUpperCase()}
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout} className="border-white text-white hover:bg-white/20">
              <ArrowLeft size={16} className="mr-2" /> Sair
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside 
          className={`bg-white border-r border-gray-200 ${
            isSidebarOpen 
              ? "fixed inset-y-0 left-0 z-50 w-64 pt-16 lg:static lg:pt-0 lg:w-64"
              : "hidden lg:block lg:w-20"
          } transition-all duration-300`}
        >
          <div className="p-4">
            <nav className="space-y-1">
              <Link
                to="/admin"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <Home size={20} />
                {isSidebarOpen && <span>Dashboard</span>}
              </Link>
              
              <Link
                to="/admin/products"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/products") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <Package size={20} />
                {isSidebarOpen && <span>Produtos</span>}
              </Link>
              
              <Link
                to="/admin/orders"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/orders") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <ShoppingBag size={20} />
                {isSidebarOpen && <span>Pedidos</span>}
              </Link>
              
              <Link
                to="/admin/users"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/users") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <Users size={20} />
                {isSidebarOpen && <span>Usuários</span>}
              </Link>
              
              <Link
                to="/admin/reports"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/reports") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <BarChart size={20} />
                {isSidebarOpen && <span>Relatórios</span>}
              </Link>
              
              <Link
                to="/admin/content"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/content") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <FileText size={20} />
                {isSidebarOpen && <span>Conteúdo</span>}
              </Link>
              
              <Link
                to="/admin/settings"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/admin/settings") 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <Settings size={20} />
                {isSidebarOpen && <span>Configurações</span>}
              </Link>
            </nav>
          </div>
        </aside>
        
        {/* Main content */}
        <main className={`flex-1 p-6 ${isSidebarOpen ? "lg:ml-0" : ""}`}>
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
