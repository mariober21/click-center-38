
import AdminLayout from "@/components/admin/AdminLayout";
import { useLocation } from "react-router-dom";
import SalesDashboard from "@/components/admin/sales/SalesDashboard";
import SalesBalance from "@/components/admin/sales/SalesBalance";
import SalesStatement from "@/components/admin/sales/SalesStatement";
import SalesMonthly from "@/components/admin/sales/SalesMonthly";
import SalesWithdraw from "@/components/admin/sales/SalesWithdraw";
import SalesAdvance from "@/components/admin/sales/SalesAdvance";

const AdminSales = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) {
      case "/admin/sales/balance":
        return <SalesBalance />;
      case "/admin/sales/statement":
        return <SalesStatement />;
      case "/admin/sales/monthly":
        return <SalesMonthly />;
      case "/admin/sales/withdraw":
        return <SalesWithdraw />;
      case "/admin/sales/advance":
        return <SalesAdvance />;
      default:
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
