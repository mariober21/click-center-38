
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import NavItem from "../NavItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

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

  const isLinkActive = (path: string) => {
    return location.pathname === path;
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
          icon={<Icon size={20} />}
          label={title}
          isActive={isActive}
          isSidebarOpen={isSidebarOpen}
          hasSubItems={true}
          isOpen={isExpanded}
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
