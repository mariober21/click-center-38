
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import { Users, Link as LinkIcon, DollarSign } from "lucide-react";

const AdminPartnership = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (currentPath === "/admin/partnership/affiliates") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Gerenciar Afiliados</h1>
          <Card>
            <CardHeader>
              <CardTitle>Lista de Afiliados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-muted-foreground">joao@exemplo.com</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">24 conversões</p>
                    <p className="text-sm text-green-600">R$ 2.356,00</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium">Maria Santos</p>
                    <p className="text-sm text-muted-foreground">maria@exemplo.com</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">18 conversões</p>
                    <p className="text-sm text-green-600">R$ 1.845,00</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">Carlos Mendes</p>
                    <p className="text-sm text-muted-foreground">carlos@exemplo.com</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">12 conversões</p>
                    <p className="text-sm text-green-600">R$ 1.230,00</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Ver Todos os Afiliados</Button>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/partnership/programs") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Programas de Afiliados</h1>
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Programas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Programa Padrão</h3>
                      <p className="text-sm text-muted-foreground">10% de comissão em todas as vendas</p>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Programa Premium</h3>
                      <p className="text-sm text-muted-foreground">15% de comissão para parceiros selecionados</p>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Programa VIP</h3>
                      <p className="text-sm text-muted-foreground">20% de comissão para os maiores afiliados</p>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <Button>Criar Novo Programa</Button>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/partnership/commissions") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Comissões</h1>
          <Card>
            <CardHeader>
              <CardTitle>Pagamentos de Comissões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-muted-foreground">Maio 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 580,00</p>
                    <p className="text-xs text-green-600">Pago em 10/05/2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium">Maria Santos</p>
                    <p className="text-sm text-muted-foreground">Maio 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 436,00</p>
                    <p className="text-xs text-green-600">Pago em 10/05/2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">Carlos Mendes</p>
                    <p className="text-sm text-muted-foreground">Maio 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">R$ 220,00</p>
                    <p className="text-xs text-orange-600">Pendente</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Total a pagar (pendente)</p>
                  <p className="font-semibold">R$ 220,00</p>
                </div>
                <Button className="w-full mt-2">Processar Pagamentos</Button>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else {
      return (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Parcerias e Afiliados</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  Total de Afiliados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-muted-foreground">+12 novos este mês</p>
                <Link to="/admin/partnership/affiliates">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Afiliados</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <LinkIcon size={18} className="text-primary" />
                  Cliques em Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,854</p>
                <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign size={18} className="text-primary" />
                  Comissões Pagas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 12.450,00</p>
                <p className="text-xs text-muted-foreground">Este mês</p>
                <Link to="/admin/partnership/commissions">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Comissões</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Programas de Afiliados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Programa Padrão</h3>
                      <p className="text-sm text-muted-foreground">10% de comissão em todas as vendas</p>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Programa Premium</h3>
                      <p className="text-sm text-muted-foreground">15% de comissão para parceiros selecionados</p>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <Link to="/admin/partnership/programs">
                  <Button>Gerenciar Programas</Button>
                </Link>
              </div>
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

export default AdminPartnership;
