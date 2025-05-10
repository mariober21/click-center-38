
import { Package } from "lucide-react";
import NavSection from "./NavSection";

interface ProductsSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const ProductsSection = ({ isSidebarOpen, expandedItems, toggleSection }: ProductsSectionProps) => {
  const links = [
    { path: "/admin/products", label: "Todos os Produtos" },
    { path: "/admin/products/add", label: "Adicionar Novo" },
    { path: "/admin/products/categories", label: "Categorias" }
  ];

  return (
    <NavSection
      title="Produtos"
      icon={Package}
      links={links}
      basePath="/admin/products"
      sectionKey="products"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default ProductsSection;
