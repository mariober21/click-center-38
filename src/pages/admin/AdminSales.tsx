
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Wallet, FileText, BarChart3, ArrowDown, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const AdminSales = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (currentPath === "/admin/sales/balance") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Saldo</h1>
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Saldo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="py-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">Saldo Total</p>
                <p className="text-4xl font-bold">R$ 8.750,35</p>
                <p className="text-sm text-green-600">+12% desde o último mês</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Vendas Realizadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">47</p>
                    <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Valor Médio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">R$ 186,18</p>
                    <p className="text-xs text-muted-foreground">Por venda</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/sales/statement") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Extrato</h1>
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Wallet size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Venda - Curso de Marketing Digital</p>
                      <p className="text-sm text-muted-foreground">10/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 297,00</p>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Wallet size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Venda - Ebook: Vendas Online</p>
                      <p className="text-sm text-muted-foreground">09/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 47,00</p>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowDown size={18} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Saque para Conta Bancária</p>
                      <p className="text-sm text-muted-foreground">05/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-600">-R$ 450,00</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Carregar Mais Transações</Button>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/sales/monthly") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Movimentações do Mês</h1>
          <Card>
            <CardHeader>
              <CardTitle>Resumo Mensal - Maio 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Total de Vendas</p>
                  <p className="font-bold">R$ 3.450,00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Total de Saques</p>
                  <p className="font-bold">R$ 450,00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Saldo Líquido</p>
                  <p className="font-bold text-green-600">+R$ 3.000,00</p>
                </div>
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                  <BarChart3 size={48} className="text-gray-300" />
                  <span className="ml-2 text-gray-400">Gráfico de Movimentações</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Comparação com mês anterior</p>
                  <p className="text-sm font-medium text-green-600">+22%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/sales/withdraw") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Saque</h1>
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Saque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-sm font-medium text-muted-foreground">Saldo Disponível para Saque</p>
                  <p className="text-3xl font-bold">R$ 8.750,35</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor do Saque</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">R$</span>
                    <input type="text" className="w-full pl-8 pr-4 py-2 border rounded-md" placeholder="0,00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Conta Bancária</label>
                  <select className="w-full px-4 py-2 border rounded-md">
                    <option>Banco XYZ - Conta 12345-6</option>
                    <option>Adicionar Nova Conta</option>
                  </select>
                </div>
                <Button className="w-full">Solicitar Saque</Button>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/sales/advance") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Antecipação</h1>
          <Card>
            <CardHeader>
              <CardTitle>Antecipar Pagamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-sm font-medium text-muted-foreground">Valor Disponível para Antecipação</p>
                  <p className="text-3xl font-bold">R$ 4.320,00</p>
                </div>
                <Card className="bg-gray-50 border-none">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Venda 12/06/2025</p>
                        <p className="text-sm text-muted-foreground">Previsto para daqui 30 dias</p>
                      </div>
                      <p className="font-bold">R$ 2.500,00</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2 w-full">Antecipar</Button>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-none">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Venda 15/06/2025</p>
                        <p className="text-sm text-muted-foreground">Previsto para daqui 33 dias</p>
                      </div>
                      <p className="font-bold">R$ 1.820,00</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2 w-full">Antecipar</Button>
                  </CardContent>
                </Card>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-1">Taxa de antecipação:</p>
                  <p className="font-medium">2.5% do valor antecipado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else {
      return (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Vendas</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Wallet size={18} className="text-primary" />
                  Saldo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 8.750,35</p>
                <p className="text-xs text-muted-foreground">Atualizado hoje</p>
                <Link to="/admin/sales/balance">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Detalhes</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText size={18} className="text-primary" />
                  Extrato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">32</p>
                <p className="text-xs text-muted-foreground">Transações este mês</p>
                <Link to="/admin/sales/statement">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Extrato</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <BarChart3 size={18} className="text-primary" />
                  Movimentações do Mês
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 3.450,00</p>
                <p className="text-xs text-green-600">+22% desde o mês anterior</p>
                <Link to="/admin/sales/monthly">
                  <Button variant="link" className="p-0 h-auto mt-2">Ver Detalhes</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowDown size={18} className="text-primary" />
                  Saque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Solicite saques do seu saldo disponível para sua conta bancária.
                </p>
                <Link to="/admin/sales/withdraw">
                  <Button>Solicitar Saque</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUp size={18} className="text-primary" />
                  Antecipação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Antecipe o recebimento de vendas parceladas ou agendadas.
                </p>
                <Link to="/admin/sales/advance">
                  <Button>Solicitar Antecipação</Button>
                </Link>
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

export default AdminSales;
