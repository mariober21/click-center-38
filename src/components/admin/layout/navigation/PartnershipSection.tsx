
import { Users } from "lucide-react";
import NavSection from "./NavSection";

interface PartnershipSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const PartnershipSection = ({ isSidebarOpen, expandedItems, toggleSection }: PartnershipSectionProps) => {
  const links = [
    { path: "/admin/partnership/affiliates", label: "Afiliados" },
    { path: "/admin/partnership/programs", label: "Programas" },
    { path: "/admin/partnership/commissions", label: "Comissões" }
  ];

  return (
    <NavSection
      title="Parcerias"
      icon={Users}
      links={links}
      basePath="/admin/partnership"
      sectionKey="partnership"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default PartnershipSection;
