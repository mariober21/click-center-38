
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Mail, TrendingUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const AdminMarketing = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (currentPath === "/admin/marketing/campaigns") {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Campanhas de Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Gerencie suas campanhas de marketing para promover seus produtos.</p>
            <Button>Criar Nova Campanha</Button>
          </CardContent>
        </Card>
      );
    } else if (currentPath === "/admin/marketing/email") {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Email Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Envie emails personalizados para sua lista de contatos.</p>
            <Button>Criar Nova Campanha de Email</Button>
          </CardContent>
        </Card>
      );
    } else if (currentPath === "/admin/marketing/analytics") {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Visualize métricas e análises de suas campanhas de marketing.</p>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
              <TrendingUp size={64} className="text-gray-300" />
            </div>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Marketing</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <BarChart size={18} className="text-primary" />
                  Campanhas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">2 ativas, 3 programadas</p>
                <Button variant="link" className="p-0 h-auto mt-2">Gerenciar Campanhas</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  Email Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2,450</p>
                <p className="text-xs text-muted-foreground">Contatos na lista</p>
                <Button variant="link" className="p-0 h-auto mt-2">Enviar Email</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary" />
                  Conversões
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">3.2%</p>
                <p className="text-xs text-muted-foreground">+0.5% desde a semana passada</p>
                <Button variant="link" className="p-0 h-auto mt-2">Ver Analytics</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminMarketing;
