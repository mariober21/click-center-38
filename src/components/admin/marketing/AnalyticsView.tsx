
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import MarketingNavigation from "./MarketingNavigation";

interface AnalyticsViewProps {
  activePath: string;
}

const AnalyticsView = ({ activePath }: AnalyticsViewProps) => {
  return (
    <>
      <MarketingNavigation activePath={activePath} />
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Visualize métricas e análises de suas campanhas de marketing.</p>
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-green-600">+0.5% desde a semana passada</p>
                <div className="h-24 mt-2 bg-gray-100 rounded-md flex items-center justify-center">
                  <TrendingUp size={32} className="text-gray-300" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Aquisição de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-2xl font-bold">452</div>
                    <p className="text-xs text-green-600">+12% este mês</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">R$ 28,50</div>
                    <p className="text-xs text-muted-foreground">Custo por aquisição</p>
                  </div>
                </div>
                <div className="h-24 mt-2 bg-gray-100 rounded-md"></div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsView;
