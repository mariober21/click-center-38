
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Mail, TrendingUp } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

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
            <div className="space-y-4">
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Lançamento de Verão</p>
                      <p className="text-sm text-muted-foreground">Em andamento • 15/05 - 30/06</p>
                    </div>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Campanha de Black Friday</p>
                      <p className="text-sm text-muted-foreground">Programada • 20/11 - 30/11</p>
                    </div>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </CardContent>
              </Card>
              <Button>Criar Nova Campanha</Button>
            </div>
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
            <div className="space-y-4">
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Oferta Especial</p>
                      <p className="text-sm text-muted-foreground">Enviado • 10/05 • 1,245 destinatários</p>
                    </div>
                    <Button variant="outline" size="sm">Ver Relatório</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Boletim Mensal</p>
                      <p className="text-sm text-muted-foreground">Rascunho • Agendado para 01/06</p>
                    </div>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </CardContent>
              </Card>
              <Button>Criar Nova Campanha de Email</Button>
            </div>
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
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-green-600">+0.5% desde a semana passada</p>
                  <div className="h-24 mt-2 bg-gray-100 rounded-md flex items-center justify-center">
                    <TrendingUp size={32} className="text-gray-300" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Aquisição de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-2xl font-bold">452</div>
                      <p className="text-xs text-green-600">+12% este mês</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">R$ 28,50</div>
                      <p className="text-xs text-muted-foreground">Custo por aquisição</p>
                    </div>
                  </div>
                  <div className="h-24 mt-2 bg-gray-100 rounded-md"></div>
                </CardContent>
              </Card>
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
                <Link to="/admin/marketing/campaigns">
                  <Button variant="link" className="p-0 h-auto mt-2">Gerenciar Campanhas</Button>
                </Link>
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
                <Link to="/admin/marketing/email">
                  <Button variant="link" className="p-0 h-auto mt-2">Enviar Email</Button>
                </Link>
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
                <Link to="/admin/marketing/analytics">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Analytics</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Desempenho de Campanhas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium">Lançamento de Verão</p>
                    <p className="text-sm text-muted-foreground">Em andamento • 15/05 - 30/06</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 8,230.00</p>
                    <p className="text-sm text-green-600">48 vendas</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">Oferta da Semana</p>
                    <p className="text-sm text-muted-foreground">Finalizado • 01/05 - 07/05</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 4,120.00</p>
                    <p className="text-sm text-green-600">32 vendas</p>
                  </div>
                </div>
              </div>
              <Link to="/admin/marketing/campaigns" className="block mt-4">
                <Button variant="outline" className="w-full">Ver Todas as Campanhas</Button>
              </Link>
            </CardContent>
          </Card>
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
