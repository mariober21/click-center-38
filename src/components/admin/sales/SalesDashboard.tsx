
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, FileText, BarChart3, ArrowDown, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const SalesDashboard = () => {
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
};

export default SalesDashboard;
