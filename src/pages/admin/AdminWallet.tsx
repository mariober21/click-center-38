
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { DollarSign, CreditCard, ArrowUpRight, Wallet, ArrowDownLeft } from "lucide-react";

const AdminWallet = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (currentPath === "/admin/wallet/balance") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Saldo da Carteira</h1>
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Saldo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="py-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">Saldo Disponível</p>
                  <p className="text-4xl font-bold">R$ 2.547,85</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Button>Sacar Fundos</Button>
                  <Button variant="outline">Histórico de Pagamentos</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      );
    } else if (currentPath === "/admin/wallet/transactions") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Transações</h1>
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowDownLeft size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Venda do Produto - Curso de Marketing</p>
                      <p className="text-sm text-muted-foreground">10/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 297,00</p>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowDownLeft size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Comissão de Afiliado</p>
                      <p className="text-sm text-muted-foreground">09/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 85,50</p>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowUpRight size={18} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Saque para Conta Bancária</p>
                      <p className="text-sm text-muted-foreground">05/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-600">-R$ 500,00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else if (currentPath === "/admin/wallet/withdraw") {
      return (
        <>
          <h1 className="text-2xl font-bold mb-6">Saque de Fundos</h1>
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Saque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-sm font-medium text-muted-foreground">Saldo Disponível para Saque</p>
                  <p className="text-3xl font-bold">R$ 2.547,85</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor do Saque</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">R$</span>
                    <input type="text" className="w-full pl-8 pr-4 py-2 border rounded-md" placeholder="0,00" />
                  </div>
                </div>
                <Button className="w-full">Solicitar Saque</Button>
              </div>
            </CardContent>
          </Card>
        </>
      );
    } else {
      return (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Carteira</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Wallet size={18} className="text-primary" />
                  Saldo Disponível
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 2.547,85</p>
                <Button variant="link" className="p-0 h-auto mt-2">Ver Detalhes</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign size={18} className="text-primary" />
                  Ganhos do Mês
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 1.250,00</p>
                <p className="text-xs text-muted-foreground">+32% desde o mês passado</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <CreditCard size={18} className="text-primary" />
                  Último Saque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">R$ 500,00</p>
                <p className="text-xs text-muted-foreground">05/05/2025</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowDownLeft size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Venda do Produto - Curso de Marketing</p>
                      <p className="text-sm text-muted-foreground">10/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 297,00</p>
                </div>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowDownLeft size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Comissão de Afiliado</p>
                      <p className="text-sm text-muted-foreground">09/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">+R$ 85,50</p>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowUpRight size={18} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Saque para Conta Bancária</p>
                      <p className="text-sm text-muted-foreground">05/05/2025</p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-600">-R$ 500,00</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Ver Todas as Transações</Button>
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

export default AdminWallet;
