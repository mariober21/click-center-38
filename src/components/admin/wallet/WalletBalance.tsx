
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";

const WalletBalance = () => {
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
              <p className="text-4xl font-bold">€ 2.547,85</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Link to="/admin/wallet/withdraw">
                <Button className="w-full">Sacar Fundos</Button>
              </Link>
              <Link to="/admin/wallet/transactions">
                <Button variant="outline" className="w-full">Histórico de Pagamentos</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default WalletBalance;
