
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowDown } from "lucide-react";

const SalesStatement = () => {
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
};

export default SalesStatement;
