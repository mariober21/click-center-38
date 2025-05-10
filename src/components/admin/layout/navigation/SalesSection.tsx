
import { ShoppingCart } from "lucide-react";
import NavSection from "./NavSection";

interface SalesSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const SalesSection = ({ isSidebarOpen, expandedItems, toggleSection }: SalesSectionProps) => {
  const links = [
    { path: "/admin/orders", label: "Pedidos" },
    { path: "/admin/orders/refunds", label: "Reembolsos" },
    { path: "/admin/orders/invoices", label: "Faturas" }
  ];

  return (
    <NavSection
      title="Vendas"
      icon={ShoppingCart}
      links={links}
      basePath="/admin/orders"
      sectionKey="sales"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default SalesSection;
