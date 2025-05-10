
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarketingNavigation from "./MarketingNavigation";

interface EmailViewProps {
  activePath: string;
}

const EmailView = ({ activePath }: EmailViewProps) => {
  return (
    <>
      <MarketingNavigation activePath={activePath} />
      <Card>
        <CardHeader>
          <CardTitle>Email Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Envie emails personalizados para sua lista de contatos.</p>
          <div className="space-y-4">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Oferta Especial</p>
                    <p className="text-sm text-muted-foreground">Enviado • 10/05 • 1,245 destinatários</p>
                  </div>
                  <Button variant="outline" size="sm">Ver Relatório</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Boletim Mensal</p>
                    <p className="text-sm text-muted-foreground">Rascunho • Agendado para 01/06</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </CardContent>
            </Card>
            <Button>Criar Nova Campanha de Email</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EmailView;
