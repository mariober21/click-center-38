
import { Calendar, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RevenueChartProps {
  totalRevenue: number;
}

const RevenueChart = ({ totalRevenue }: RevenueChartProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Faturamento Mensal</CardTitle>
        <Button variant="outline" size="sm" className="h-8">
          <Calendar size={14} className="mr-1" />
          Filtrar período
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold mt-2">
          € {totalRevenue.toLocaleString('de-DE')}
        </div>
        <div className="text-sm text-muted-foreground">
          De 1 Mai a 31 Mai, 2025
        </div>
        <div className="h-[200px] mt-6 flex items-center justify-center">
          <TrendingUp size={100} className="text-muted-foreground/30" />
          <p className="ml-4 text-muted-foreground">
            Gráficos de faturamento serão exibidos aqui
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
