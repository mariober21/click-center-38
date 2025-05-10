
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart,
  Users,
  ShoppingBag,
  Package,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Calendar
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboard = () => {
  const [dashboardStats] = useState({
    totalUsers: 156,
    totalProducts: 12,
    totalOrders: 87,
    totalRevenue: 24850,
    newUsers: 24,
    newOrders: 8,
    percentGrowth: 12.5,
    revenueGrowth: 8.3
  });

  // Mock data for the charts would go here in a real app

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="overflow-hidden border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Users size={16} className="text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalUsers}</div>
              <div className="flex items-center mt-1">
                <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                  <ArrowUp size={12} className="mr-0.5" />
                  {dashboardStats.percentGrowth}%
                </span>
                <p className="text-xs text-muted-foreground ml-1.5">
                  +{dashboardStats.newUsers} novos nos últimos 7 dias
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-2">
              <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-blue-500 hover:text-blue-600 hover:bg-transparent">
                Ver detalhes <ArrowRight size={12} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-violet-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
              <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                <Package size={16} className="text-violet-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalProducts}</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-muted-foreground">
                  Ativos na plataforma
                </span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-2">
              <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-violet-500 hover:text-violet-600 hover:bg-transparent">
                Gerenciar produtos <ArrowRight size={12} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-orange-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <ShoppingBag size={16} className="text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalOrders}</div>
              <div className="flex items-center mt-1">
                <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                  <ArrowUp size={12} className="mr-0.5" />
                  5.3%
                </span>
                <p className="text-xs text-muted-foreground ml-1.5">
                  +{dashboardStats.newOrders} novos nos últimos 7 dias
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-2">
              <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-orange-500 hover:text-orange-600 hover:bg-transparent">
                Ver pedidos <ArrowRight size={12} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Faturamento</CardTitle>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign size={16} className="text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {dashboardStats.totalRevenue.toLocaleString('pt-BR')}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                  <ArrowUp size={12} className="mr-0.5" />
                  {dashboardStats.revenueGrowth}%
                </span>
                <p className="text-xs text-muted-foreground ml-1.5">
                  comparado ao mês anterior
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-2">
              <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-green-500 hover:text-green-600 hover:bg-transparent">
                Relatório financeiro <ArrowRight size={12} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Revenue Card */}
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
              R$ {dashboardStats.totalRevenue.toLocaleString('pt-BR')}
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
        
        {/* Recent Activities */}
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
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
