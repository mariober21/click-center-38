
import AdminLayout from "@/components/admin/AdminLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OverviewView from "@/components/admin/marketing/OverviewView";
import CampaignsView from "@/components/admin/marketing/CampaignsView";
import EmailView from "@/components/admin/marketing/EmailView";
import AnalyticsView from "@/components/admin/marketing/AnalyticsView";
import { toast } from "@/hooks/use-toast";
import { adminSystemService } from "@/services/AdminSystemService";
import ErrorBoundary from "@/components/admin/ErrorBoundary";

const AdminMarketing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("/admin/marketing");
  const [isLoading, setIsLoading] = useState(true);
  
  // Verificar se o sistema de marketing está funcionando
  useEffect(() => {
    const checkSystemStatus = async () => {
      setIsLoading(true);
      // Simular um carregamento para melhor experiência do usuário
      setTimeout(() => {
        const status = adminSystemService.getSectionStatus("marketing");
        if (!status) {
          toast({
            title: "Sistema de marketing em manutenção",
            description: "Estamos reparando algumas funcionalidades. Tente novamente em instantes.",
          });
          adminSystemService.fixSection("marketing");
        }
        setIsLoading(false);
      }, 500);
    };
    
    checkSystemStatus();
  }, []);
  
  // Set active path based on current location
  useEffect(() => {
    setActivePath(location.pathname);
    
    // Verificar se o caminho é válido, caso contrário, redirecionar para a visão geral
    const validPaths = ["/admin/marketing", "/admin/marketing/campaigns", "/admin/marketing/email", "/admin/marketing/analytics"];
    if (!validPaths.includes(location.pathname)) {
      navigate("/admin/marketing");
    }
  }, [location, navigate]);

  // Registrar ação de visualização
  useEffect(() => {
    adminSystemService.logAction("marketing", `Visualizou ${activePath}`);
  }, [activePath]);

  // Render the appropriate view based on the active path
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="p-6 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      );
    }
    
    if (activePath === "/admin/marketing/campaigns") {
      return <ErrorBoundary><CampaignsView activePath={activePath} /></ErrorBoundary>;
    } else if (activePath === "/admin/marketing/email") {
      return <ErrorBoundary><EmailView activePath={activePath} /></ErrorBoundary>;
    } else if (activePath === "/admin/marketing/analytics") {
      return <ErrorBoundary><AnalyticsView activePath={activePath} /></ErrorBoundary>;
    } else {
      return <ErrorBoundary><OverviewView activePath={activePath} /></ErrorBoundary>;
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminMarketing;
