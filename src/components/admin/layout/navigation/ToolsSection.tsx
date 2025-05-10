
import { Wrench } from "lucide-react";
import NavSection from "./NavSection";

interface ToolsSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const ToolsSection = ({ isSidebarOpen, expandedItems, toggleSection }: ToolsSectionProps) => {
  const links = [
    { path: "/admin/tools/seo", label: "SEO" },
    { path: "/admin/tools/analytics", label: "Analytics" },
    { path: "/admin/tools/automation", label: "Automações" }
  ];

  return (
    <NavSection
      title="Ferramentas"
      icon={Wrench}
      links={links}
      basePath="/admin/tools"
      sectionKey="tools"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default ToolsSection;
