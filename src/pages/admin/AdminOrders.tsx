
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Search, Eye, Download, Filter } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import OrderDetailView from "@/components/admin/OrderDetailView";

// Mock order data
const initialOrders = [
  { 
    id: "ORD-001", 
    customer: "João Silva", 
    email: "joao@exemplo.com",
    product: "Curso de Marketing Digital", 
    date: "15/05/2023", 
    amount: 297.00, 
    status: "concluído" 
  },
  { 
    id: "ORD-002", 
    customer: "Maria Oliveira", 
    email: "maria@exemplo.com",
    product: "Ebook: Vendas Online", 
    date: "12/05/2023", 
    amount: 47.00, 
    status: "concluído" 
  },
  { 
    id: "ORD-003", 
    customer: "Carlos Santos", 
    email: "carlos@exemplo.com",
    product: "Mentoria Premium", 
    date: "10/05/2023", 
    amount: 997.00, 
    status: "aguardando pagamento" 
  },
  { 
    id: "ORD-004", 
    customer: "Ana Pereira", 
    email: "ana@exemplo.com",
    product: "Templates de Landing Page", 
    date: "05/05/2023", 
    amount: 67.00, 
    status: "cancelado" 
  },
];

// This is now exported to be used in OrderDetailView
export const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "concluído":
      return "bg-green-100 text-green-800";
    case "aguardando pagamento":
      return "bg-yellow-100 text-yellow-800";
    case "cancelado":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const AdminOrders = () => {
  const [orders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<typeof initialOrders[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewOrder = (order: typeof initialOrders[0]) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  const totalRevenue = orders
    .filter(order => order.status === "concluído")
    .reduce((sum, order) => sum + order.amount, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Gerenciar Pedidos</h1>
          <p className="text-muted-foreground">
            Visualize e gerencie os pedidos realizados na plataforma.
          </p>
        </div>
        
        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Em todos os períodos
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                De pedidos concluídos
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Aguardando Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter(order => order.status === "aguardando pagamento").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Pedidos pendentes
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3">
            <CardTitle>Lista de Pedidos</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar pedidos..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Filter size={16} />
              </Button>
              <Button variant="outline" className="h-9">
                <Download size={16} className="mr-2" /> Exportar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div>{order.customer}</div>
                          <div className="text-sm text-muted-foreground">{order.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>R$ {order.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0"
                          onClick={() => handleViewOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                      Nenhum pedido encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <OrderDetailView 
        open={isDetailOpen} 
        onOpenChange={setIsDetailOpen} 
        order={selectedOrder} 
      />
    </AdminLayout>
  );
};

export default AdminOrders;
