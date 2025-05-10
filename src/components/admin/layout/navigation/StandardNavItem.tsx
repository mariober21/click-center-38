
import React from "react";
import { LucideIcon } from "lucide-react";
import NavItem from "../NavItem";

interface StandardNavItemProps {
  title: string;
  path: string;
  icon: LucideIcon;
  isSidebarOpen: boolean;
  isActive: boolean;
}

const StandardNavItem = ({ title, path, icon, isSidebarOpen, isActive }: StandardNavItemProps) => {
  const Icon = icon;
  
  return (
    <NavItem
      to={path}
      icon={<Icon size={20} />}
      label={title}
      isActive={isActive}
      isSidebarOpen={isSidebarOpen}
    />
  );
};

export default StandardNavItem;
