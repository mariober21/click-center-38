
import { BarChart } from "lucide-react";
import NavSection from "./NavSection";

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

  return (
    <NavSection
      title="Marketing"
      icon={BarChart}
      links={links}
      basePath="/admin/marketing"
      sectionKey="marketing"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default MarketingSection;
