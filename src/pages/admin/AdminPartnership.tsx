
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Users, Link as LinkIcon, DollarSign } from "lucide-react";

const AdminPartnership = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AdminLayout>
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
              <Button>Criar Novo Programa</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminPartnership;
