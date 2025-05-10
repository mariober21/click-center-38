import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ShoppingBag,
  Package,
  Users,
  Settings,
  BarChart,
  FileText,
  Wallet,
  Wrench,
  LayoutDashboard,
  ShoppingCart
} from "lucide-react";
import NavItem from "./NavItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

interface SidebarNavigationProps {
  isSidebarOpen: boolean;
}

const SidebarNavigation = ({ isSidebarOpen }: SidebarNavigationProps) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    products: false,
    marketing: false,
    sales: false,
    partnership: false,
    tools: false,
    wallet: false
  });
  
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
  );
};

export default SidebarNavigation;
