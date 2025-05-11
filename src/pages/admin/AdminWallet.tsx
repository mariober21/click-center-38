
import AdminLayout from "@/components/admin/AdminLayout";
import { useLocation } from "react-router-dom";
import WalletDashboard from "@/components/admin/wallet/WalletDashboard";
import WalletBalance from "@/components/admin/wallet/WalletBalance";
import WalletTransactions from "@/components/admin/wallet/WalletTransactions";
import WalletWithdraw from "@/components/admin/wallet/WalletWithdraw";
import SalesPayments from "@/components/admin/sales/SalesPayments";

const AdminWallet = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (currentPath === "/admin/wallet/balance") {
      return <WalletBalance />;
    } else if (currentPath === "/admin/wallet/transactions") {
      return <WalletTransactions />;
    } else if (currentPath === "/admin/wallet/withdraw") {
      return <WalletWithdraw />;
    } else if (currentPath === "/admin/wallet/payments") {
      return <SalesPayments />;
    } else {
      return <WalletDashboard />;
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminWallet;
