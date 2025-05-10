
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Search, Eye } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

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

const AdminOrders = () => {
  const [orders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeClass = (status: string) => {
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Gerenciar Pedidos</h1>
          <p className="text-muted-foreground">
            Visualize e gerencie os pedidos realizados na plataforma.
          </p>
        </div>
        
        <Card>
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3">
            <CardTitle>Lista de Pedidos</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pedidos..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
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
    </AdminLayout>
  );
};

export default AdminOrders;
