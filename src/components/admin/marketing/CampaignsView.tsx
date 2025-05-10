
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarketingNavigation from "./MarketingNavigation";

interface CampaignsViewProps {
  activePath: string;
}

const CampaignsView = ({ activePath }: CampaignsViewProps) => {
  return (
    <>
      <MarketingNavigation activePath={activePath} />
      <Card>
        <CardHeader>
          <CardTitle>Campanhas de Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Gerencie suas campanhas de marketing para promover seus produtos.</p>
          <div className="space-y-4">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Lançamento de Verão</p>
                    <p className="text-sm text-muted-foreground">Em andamento • 15/05 - 30/06</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Campanha de Black Friday</p>
                    <p className="text-sm text-muted-foreground">Programada • 20/11 - 30/11</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </CardContent>
            </Card>
            <Button>Criar Nova Campanha</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CampaignsView;
