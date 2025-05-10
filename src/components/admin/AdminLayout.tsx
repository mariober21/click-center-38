
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
  X,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Wallet,
  Wrench,
  LayoutDashboard
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

interface AdminLayoutProps {
  children: ReactNode;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isSidebarOpen: boolean;
  hasSubItems?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

// NavItem component for sidebar links
const NavItem = ({ to, icon, label, isActive, isSidebarOpen, hasSubItems = false, isOpen = false, onClick }: NavItemProps) => (
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

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [userName, setUserName] = useState<string>("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    products: false,
    marketing: false,
    sales: false,
    partnership: false,
    tools: false,
    wallet: false
  });
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
  
  // Auto expand the section based on current route
  useEffect(() => {
    const path = location.pathname;
    
    if (path.includes("/admin/products")) {
      setExpandedItems(prev => ({ ...prev, products: true }));
    } else if (path.includes("/admin/marketing")) {
      setExpandedItems(prev => ({ ...prev, marketing: true }));
    } else if (path.includes("/admin/orders")) {
      setExpandedItems(prev => ({ ...prev, sales: true }));
    } else if (path.includes("/admin/partnership")) {
      setExpandedItems(prev => ({ ...prev, partnership: true }));
    } else if (path.includes("/admin/tools")) {
      setExpandedItems(prev => ({ ...prev, tools: true }));
    } else if (path.includes("/admin/wallet")) {
      setExpandedItems(prev => ({ ...prev, wallet: true }));
    }
  }, [location.pathname]);
  
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (section: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
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
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside 
          className={`bg-white border-r border-gray-200 ${
            isSidebarOpen 
              ? "fixed inset-y-0 left-0 z-50 w-64 pt-16 lg:static lg:pt-0 lg:w-64"
              : "hidden lg:block lg:w-20"
          } transition-all duration-300 shadow-sm`}
        >
          <div className="p-4">
            <nav className="space-y-2.5">
              <NavItem
                to="/admin"
                icon={<LayoutDashboard size={20} />}
                label="Dashboard"
                isActive={isActive("/admin")}
                isSidebarOpen={isSidebarOpen}
              />
              
              {/* Products Section */}
              <Collapsible 
                open={expandedItems.products}
                onOpenChange={() => toggleSection('products')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<Package size={20} />}
                    label="Produtos"
                    isActive={location.pathname.includes("/admin/products")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.products}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/products"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/products") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Todos os Produtos
                      </Link>
                      <Link
                        to="/admin/products/add"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/products/add") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Adicionar Novo
                      </Link>
                      <Link
                        to="/admin/products/categories"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/products/categories") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Categorias
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Marketing Section */}
              <Collapsible 
                open={expandedItems.marketing}
                onOpenChange={() => toggleSection('marketing')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<BarChart size={20} />}
                    label="Marketing"
                    isActive={location.pathname.includes("/admin/marketing")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.marketing}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/marketing/campaigns"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/marketing/campaigns") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Campanhas
                      </Link>
                      <Link
                        to="/admin/marketing/email"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/marketing/email") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Email Marketing
                      </Link>
                      <Link
                        to="/admin/marketing/analytics"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/marketing/analytics") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Analytics
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Sales Section */}
              <Collapsible 
                open={expandedItems.sales}
                onOpenChange={() => toggleSection('sales')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<ShoppingCart size={20} />}
                    label="Vendas"
                    isActive={location.pathname.includes("/admin/orders")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.sales}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/orders"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/orders") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Pedidos
                      </Link>
                      <Link
                        to="/admin/orders/refunds"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/orders/refunds") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Reembolsos
                      </Link>
                      <Link
                        to="/admin/orders/invoices"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/orders/invoices") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Faturas
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Wallet Section */}
              <Collapsible 
                open={expandedItems.wallet}
                onOpenChange={() => toggleSection('wallet')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<Wallet size={20} />}
                    label="Carteira"
                    isActive={location.pathname.includes("/admin/wallet")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.wallet}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/wallet/balance"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/wallet/balance") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Saldo
                      </Link>
                      <Link
                        to="/admin/wallet/transactions"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/wallet/transactions") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Transações
                      </Link>
                      <Link
                        to="/admin/wallet/withdraw"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/wallet/withdraw") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Retiradas
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Partnership Section */}
              <Collapsible 
                open={expandedItems.partnership}
                onOpenChange={() => toggleSection('partnership')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<Users size={20} />}
                    label="Parcerias"
                    isActive={location.pathname.includes("/admin/partnership")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.partnership}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/partnership/affiliates"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/partnership/affiliates") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Afiliados
                      </Link>
                      <Link
                        to="/admin/partnership/programs"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/partnership/programs") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Programas
                      </Link>
                      <Link
                        to="/admin/partnership/commissions"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/partnership/commissions") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Comissões
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Tools Section */}
              <Collapsible 
                open={expandedItems.tools}
                onOpenChange={() => toggleSection('tools')}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <NavItem
                    to="#"
                    icon={<Wrench size={20} />}
                    label="Ferramentas"
                    isActive={location.pathname.includes("/admin/tools")}
                    isSidebarOpen={isSidebarOpen}
                    hasSubItems={true}
                    isOpen={expandedItems.tools}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
                  {isSidebarOpen && (
                    <>
                      <Link
                        to="/admin/tools/seo"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/tools/seo") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        SEO
                      </Link>
                      <Link
                        to="/admin/tools/analytics"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/tools/analytics") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Analytics
                      </Link>
                      <Link
                        to="/admin/tools/automation"
                        className={`block py-2 px-3 rounded-md transition-colors ${isActive("/admin/tools/automation") ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                      >
                        Automações
                      </Link>
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Other regular links */}
              <NavItem
                to="/admin/users"
                icon={<Users size={20} />}
                label="Usuários"
                isActive={isActive("/admin/users")}
                isSidebarOpen={isSidebarOpen}
              />
              
              <NavItem
                to="/admin/content"
                icon={<FileText size={20} />}
                label="Conteúdo"
                isActive={isActive("/admin/content")}
                isSidebarOpen={isSidebarOpen}
              />
              
              <NavItem
                to="/admin/settings"
                icon={<Settings size={20} />}
                label="Configurações"
                isActive={isActive("/admin/settings")}
                isSidebarOpen={isSidebarOpen}
              />
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
