
import { BarChart } from "lucide-react";
import NavSection from "./NavSection";
import { adminSystemService } from "@/services/AdminSystemService";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface MarketingSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const MarketingSection = ({ isSidebarOpen, expandedItems, toggleSection }: MarketingSectionProps) => {
  const links = [
    { path: "/admin/marketing/campaigns", label: "Campanhas" },
    { path: "/admin/marketing/email", label: "Email Marketing" },
    { path: "/admin/marketing/analytics", label: "Analytics" }
  ];

  // Verificar o status da seção quando o componente é montado
  useEffect(() => {
    const sectionStatus = adminSystemService.getSectionStatus("marketing");
    if (!sectionStatus) {
      console.log("Marketing section is not functioning properly");
      // Tentativa de corrigir automaticamente quando a seção é montada
      adminSystemService.fixSection("marketing");
      toast({
        title: "Sistema atualizado",
        description: "Módulo de Marketing foi reinicializado com sucesso."
      });
    }
  }, []);

  // Handler personalizado para monitorar o clique na seção
  const handleSectionClick = () => {
    const status = adminSystemService.getSectionStatus("marketing");
    if (!status) {
      adminSystemService.fixSection("marketing");
      toast({
        title: "Correção aplicada",
        description: "Módulo de Marketing foi reparado com sucesso."
      });
    }
    toggleSection("marketing");
  };

  return (
    <NavSection
      title="Marketing"
      icon={BarChart}
      links={links}
      basePath="/admin/marketing"
      sectionKey="marketing"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={handleSectionClick}
    />
  );
};

export default MarketingSection;
