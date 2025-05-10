
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import StatsOverview from "@/components/admin/dashboard/StatsOverview";
import CourseManagementCards from "@/components/admin/dashboard/CourseManagementCards";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import RecentActivities from "@/components/admin/dashboard/RecentActivities";

const AdminDashboard = () => {
  const [dashboardStats] = useState({
    totalUsers: 156,
    totalProducts: 12,
    totalOrders: 87,
    totalRevenue: 24850,
    newUsers: 24,
    newOrders: 8,
    percentGrowth: 12.5,
    revenueGrowth: 8.3
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <DashboardHeader />
        <StatsOverview stats={dashboardStats} />
        <CourseManagementCards />
        <RevenueChart totalRevenue={dashboardStats.totalRevenue} />
        <RecentActivities />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
