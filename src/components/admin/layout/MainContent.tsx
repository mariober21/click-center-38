
import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
  isSidebarOpen: boolean;
}

const MainContent = ({ children, isSidebarOpen }: MainContentProps) => {
  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? "lg:ml-0" : ""}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
