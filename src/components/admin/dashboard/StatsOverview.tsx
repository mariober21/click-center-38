
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users,
  ShoppingBag,
  Package,
  ArrowUp,
  ArrowRight,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

interface StatsProps {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  newUsers: number;
  newOrders: number;
  percentGrowth: number;
  revenueGrowth: number;
}

const StatsOverview = ({ stats }: { stats: StatsProps }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="overflow-hidden border-l-4 border-l-blue-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Users size={16} className="text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUsers}</div>
          <div className="flex items-center mt-1">
            <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
              <ArrowUp size={12} className="mr-0.5" />
              {stats.percentGrowth}%
            </span>
            <p className="text-xs text-muted-foreground ml-1.5">
              +{stats.newUsers} novos nos últimos 7 dias
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
          <div className="text-2xl font-bold">{stats.totalProducts}</div>
          <div className="flex items-center mt-1">
            <span className="text-xs text-muted-foreground">
              Ativos na plataforma
            </span>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-2">
          <Link to="/admin/products">
            <Button variant="ghost" size="sm" className="text-xs p-0 h-auto text-violet-500 hover:text-violet-600 hover:bg-transparent">
              Gerenciar produtos <ArrowRight size={12} className="ml-1" />
            </Button>
          </Link>
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
          <div className="text-2xl font-bold">{stats.totalOrders}</div>
          <div className="flex items-center mt-1">
            <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
              <ArrowUp size={12} className="mr-0.5" />
              5.3%
            </span>
            <p className="text-xs text-muted-foreground ml-1.5">
              +{stats.newOrders} novos nos últimos 7 dias
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
            R$ {stats.totalRevenue.toLocaleString('pt-BR')}
          </div>
          <div className="flex items-center mt-1">
            <span className="text-xs inline-flex items-center text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
              <ArrowUp size={12} className="mr-0.5" />
              {stats.revenueGrowth}%
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
  );
};

export default StatsOverview;
