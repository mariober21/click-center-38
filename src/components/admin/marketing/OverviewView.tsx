
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingNavigation from "./MarketingNavigation";

interface OverviewViewProps {
  activePath: string;
}

const OverviewView = ({ activePath }: OverviewViewProps) => {
  return (
    <>
      <MarketingNavigation activePath={activePath} />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BarChart size={18} className="text-primary" />
                Campanhas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-muted-foreground">2 ativas, 3 programadas</p>
              <Link to="/admin/marketing/campaigns">
                <Button variant="link" className="p-0 h-auto mt-2">Gerenciar Campanhas</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                Email Marketing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2,450</p>
              <p className="text-xs text-muted-foreground">Contatos na lista</p>
              <Link to="/admin/marketing/email">
                <Button variant="link" className="p-0 h-auto mt-2">Enviar Email</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                Conversões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3.2%</p>
              <p className="text-xs text-muted-foreground">+0.5% desde a semana passada</p>
              <Link to="/admin/marketing/analytics">
                <Button variant="link" className="p-0 h-auto mt-2">Ver Analytics</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Desempenho de Campanhas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <p className="font-medium">Lançamento de Verão</p>
                  <p className="text-sm text-muted-foreground">Em andamento • 15/05 - 30/06</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 8,230.00</p>
                  <p className="text-sm text-green-600">48 vendas</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">Oferta da Semana</p>
                  <p className="text-sm text-muted-foreground">Finalizado • 01/05 - 07/05</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 4,120.00</p>
                  <p className="text-sm text-green-600">32 vendas</p>
                </div>
              </div>
            </div>
            <Link to="/admin/marketing/campaigns" className="block mt-4">
              <Button variant="outline" className="w-full">Ver Todas as Campanhas</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OverviewView;
