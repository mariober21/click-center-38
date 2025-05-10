
import { ShoppingBag, Users, Package, BarChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="min-w-8 min-h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingBag size={16} className="text-primary" />
            </div>
            <div>
              <p className="font-medium">Novo pedido realizado</p>
              <p className="text-sm text-muted-foreground">João Silva comprou Curso de Marketing Digital</p>
              <p className="text-xs text-muted-foreground">Hoje, 10:45</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="min-w-8 min-h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Users size={16} className="text-blue-500" />
            </div>
            <div>
              <p className="font-medium">Novo usuário registrado</p>
              <p className="text-sm text-muted-foreground">Maria Oliveira criou uma conta</p>
              <p className="text-xs text-muted-foreground">Hoje, 09:30</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="min-w-8 min-h-8 rounded-full bg-violet-500/10 flex items-center justify-center">
              <Package size={16} className="text-violet-500" />
            </div>
            <div>
              <p className="font-medium">Novo produto adicionado</p>
              <p className="text-sm text-muted-foreground">Mentoria Premium foi adicionado ao catálogo</p>
              <p className="text-xs text-muted-foreground">Ontem, 14:20</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="min-w-8 min-h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
              <BarChart size={16} className="text-orange-500" />
            </div>
            <div>
              <p className="font-medium">Relatório mensal gerado</p>
              <p className="text-sm text-muted-foreground">O relatório de abril está disponível para visualização</p>
              <p className="text-xs text-muted-foreground">Ontem, 08:15</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
