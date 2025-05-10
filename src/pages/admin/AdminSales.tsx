
import AdminLayout from "@/components/admin/AdminLayout";
import { useLocation } from "react-router-dom";
import SalesDashboard from "@/components/admin/sales/SalesDashboard";
import SalesBalance from "@/components/admin/sales/SalesBalance";
import SalesStatement from "@/components/admin/sales/SalesStatement";
import SalesMonthly from "@/components/admin/sales/SalesMonthly";
import SalesWithdraw from "@/components/admin/sales/SalesWithdraw";
import SalesAdvance from "@/components/admin/sales/SalesAdvance";
import { useEffect } from "react";

const AdminSales = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Registrar a navegação no console para fins de depuração
  useEffect(() => {
    console.log("AdminSales: Navegou para", currentPath);
  }, [currentPath]);

  const renderContent = () => {
    // Ajustando as rotas para garantir que correspondam exatamente ao que está no AdminLayout.tsx
    if (currentPath === "/admin/wallet/balance" || currentPath === "/admin/sales/balance") {
      return <SalesBalance />;
    } else if (currentPath === "/admin/wallet/transactions" || currentPath === "/admin/sales/statement") {
      return <SalesStatement />;
    } else if (currentPath === "/admin/sales/monthly" || currentPath === "/admin/wallet/monthly") {
      return <SalesMonthly />;
    } else if (currentPath === "/admin/wallet/withdraw" || currentPath === "/admin/sales/withdraw") {
      return <SalesWithdraw />;
    } else if (currentPath === "/admin/sales/advance" || currentPath === "/admin/wallet/advance") {
      return <SalesAdvance />;
    } else {
      return <SalesDashboard />;
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminSales;
