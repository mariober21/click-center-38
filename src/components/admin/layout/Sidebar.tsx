
import { useState, useEffect } from "react";
import SidebarNavigation from "./SidebarNavigation";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  return (
    <aside 
      className={`bg-white border-r border-gray-200 ${
        isSidebarOpen 
          ? "fixed inset-y-0 left-0 z-50 w-64 pt-16 lg:static lg:pt-0 lg:w-64"
          : "hidden lg:block lg:w-20"
      } transition-all duration-300 shadow-sm`}
    >
      <SidebarNavigation isSidebarOpen={isSidebarOpen} />
    </aside>
  );
};

export default Sidebar;
