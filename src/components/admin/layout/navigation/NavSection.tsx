
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import NavItem from "../NavItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { adminSystemService } from "@/services/AdminSystemService";

export interface NavLink {
  path: string;
  label: string;
}

interface NavSectionProps {
  title: string;
  icon: LucideIcon;
  links: NavLink[];
  basePath: string;
  sectionKey: string;
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const NavSection = ({
  title,
  icon,
  links,
  basePath,
  sectionKey,
  isSidebarOpen,
  expandedItems,
  toggleSection
}: NavSectionProps) => {
  const location = useLocation();
  const isActive = location.pathname.includes(basePath);
  const isExpanded = expandedItems[sectionKey];
  const [errorState, setErrorState] = useState(false);

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  // Verificar status da seção
  const sectionStatus = adminSystemService.getSectionStatus(sectionKey);
  
  // Handler para clicar em um link
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (!sectionStatus) {
      e.preventDefault();
      adminSystemService.fixSection(sectionKey);
      setErrorState(false);
      toggleSection(sectionKey);
    }
  };

  const Icon = icon;

  return (
    <Collapsible 
      open={isExpanded}
      onOpenChange={() => toggleSection(sectionKey)}
      className="w-full"
    >
      <CollapsibleTrigger className="w-full">
        <NavItem
          to="#"
          icon={<Icon size={20} className={!sectionStatus ? "text-red-500" : ""} />}
          label={title}
          isActive={isActive}
          isSidebarOpen={isSidebarOpen}
          hasSubItems={true}
          isOpen={isExpanded}
          status={sectionStatus ? "active" : "error"}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-8 mt-1.5 space-y-1.5 overflow-hidden">
        {isSidebarOpen && (
          <>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-3 rounded-md transition-colors ${isLinkActive(link.path) ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"}`}
                onClick={(e) => handleLinkClick(e, link.path)}
              >
                {link.label}
              </Link>
            ))}
          </>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default NavSection;
