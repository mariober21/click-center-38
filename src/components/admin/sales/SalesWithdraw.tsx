
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SalesWithdraw = () => {
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
};

export default SalesWithdraw;
