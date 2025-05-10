
import { Wallet } from "lucide-react";
import NavSection from "./NavSection";

interface WalletSectionProps {
  isSidebarOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

const WalletSection = ({ isSidebarOpen, expandedItems, toggleSection }: WalletSectionProps) => {
  const links = [
    { path: "/admin/wallet/balance", label: "Saldo" },
    { path: "/admin/wallet/transactions", label: "Transações" },
    { path: "/admin/wallet/withdraw", label: "Retiradas" }
  ];

  return (
    <NavSection
      title="Carteira"
      icon={Wallet}
      links={links}
      basePath="/admin/wallet"
      sectionKey="wallet"
      isSidebarOpen={isSidebarOpen}
      expandedItems={expandedItems}
      toggleSection={toggleSection}
    />
  );
};

export default WalletSection;
