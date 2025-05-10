
import AdminLayout from "@/components/admin/AdminLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import OverviewView from "@/components/admin/marketing/OverviewView";
import CampaignsView from "@/components/admin/marketing/CampaignsView";
import EmailView from "@/components/admin/marketing/EmailView";
import AnalyticsView from "@/components/admin/marketing/AnalyticsView";

const AdminMarketing = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/admin/marketing");
  
  // Set active path based on current location
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // Render the appropriate view based on the active path
  const renderContent = () => {
    if (activePath === "/admin/marketing/campaigns") {
      return <CampaignsView activePath={activePath} />;
    } else if (activePath === "/admin/marketing/email") {
      return <EmailView activePath={activePath} />;
    } else if (activePath === "/admin/marketing/analytics") {
      return <AnalyticsView activePath={activePath} />;
    } else {
      return <OverviewView activePath={activePath} />;
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminMarketing;
