
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const WalletTransactions = () => {
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
              <p className="font-semibold text-green-600">+€ 297,00</p>
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
              <p className="font-semibold text-green-600">+€ 85,50</p>
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
              <p className="font-semibold text-red-600">-€ 500,00</p>
            </div>
          </div>
          <Link to="/admin/wallet">
            <Button variant="outline" className="w-full mt-4">Voltar para Carteira</Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default WalletTransactions;
