
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ActionLogger from "@/components/admin/utils/ActionLogger";
import { Download, RefreshCw } from "lucide-react";

const SalesBalance = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Saldo</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Detalhes do Saldo</CardTitle>
            <div className="flex gap-2">
              <ActionLogger section="vendas" action="Download do relatório de saldo" variant="outline">
                <Download size={16} className="mr-2" />
                Exportar
              </ActionLogger>
              <ActionLogger section="vendas" action="Atualização manual de saldo" variant="outline">
                <RefreshCw size={16} className="mr-2" />
                Atualizar
              </ActionLogger>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="py-4 text-center">
            <p className="text-sm font-medium text-muted-foreground">Saldo Total</p>
            <p className="text-4xl font-bold">€ 8.750,35</p>
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
                <p className="text-2xl font-bold">€ 186,18</p>
                <p className="text-xs text-muted-foreground">Por venda</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SalesBalance;
