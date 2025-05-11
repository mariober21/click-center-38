
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const SalesMonthly = () => {
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
              <p className="font-bold">€ 3.450,00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Total de Saques</p>
              <p className="font-bold">€ 450,00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Saldo Líquido</p>
              <p className="font-bold text-green-600">+€ 3.000,00</p>
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
};

export default SalesMonthly;
