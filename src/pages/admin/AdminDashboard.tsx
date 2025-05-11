
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import StatsOverview from "@/components/admin/dashboard/StatsOverview";
import RecentActivities from "@/components/admin/dashboard/RecentActivities";
import CourseManagementCards from "@/components/admin/dashboard/CourseManagementCards";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import SalesPlatform from "@/components/admin/sales/SalesPlatform";

const mockStats = {
  totalUsers: 1235,
  totalProducts: 45,
  totalOrders: 2546,
  totalRevenue: 45786.99,
  newUsers: 124,
  newOrders: 156,
  percentGrowth: 12.5,
  revenueGrowth: 8.2
};

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <DashboardHeader />
        <StatsOverview stats={mockStats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart totalRevenue={mockStats.totalRevenue} />
          <RecentActivities />
        </div>
        
        <CourseManagementCards />
        
        {/* Plataforma de vendas */}
        <SalesPlatform />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
