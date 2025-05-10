
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart,
  Users,
  ShoppingBag,
  Package,
  TrendingUp,
  DollarSign
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboard = () => {
  const [dashboardStats] = useState({
    totalUsers: 156,
    totalProducts: 12,
    totalOrders: 87,
    totalRevenue: 24850,
    newUsers: 24,
    newOrders: 8
  });

  // Mock data for the charts would go here in a real app

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users size={16} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                +{dashboardStats.newUsers} novos nos últimos 7 dias
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
              <Package size={16} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                Ativos na plataforma
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
              <ShoppingBag size={16} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                +{dashboardStats.newOrders} novos nos últimos 7 dias
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Revenue Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Faturamento</CardTitle>
            <DollarSign size={16} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {dashboardStats.totalRevenue.toLocaleString('pt-BR')}
            </div>
            <div className="h-[200px] mt-4 flex items-center justify-center">
              <TrendingUp size={100} className="text-muted-foreground/30" />
              <p className="ml-4 text-muted-foreground">
                Gráficos de faturamento serão exibidos aqui
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
                <div className="min-w-8 min-h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Novo usuário registrado</p>
                  <p className="text-sm text-muted-foreground">Maria Oliveira criou uma conta</p>
                  <p className="text-xs text-muted-foreground">Hoje, 09:30</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="min-w-8 min-h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Novo produto adicionado</p>
                  <p className="text-sm text-muted-foreground">Mentoria Premium foi adicionado ao catálogo</p>
                  <p className="text-xs text-muted-foreground">Ontem, 14:20</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="min-w-8 min-h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart size={16} className="text-primary" />
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
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
