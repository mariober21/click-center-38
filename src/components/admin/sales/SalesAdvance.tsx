
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SalesAdvance = () => {
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
};

export default SalesAdvance;
