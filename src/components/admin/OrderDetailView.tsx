
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getStatusBadgeClass } from "@/pages/admin/AdminOrders";

interface OrderDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: {
    id: string;
    customer: string;
    email: string;
    product: string;
    date: string;
    amount: number;
    status: string;
  } | null;
}

const OrderDetailView = ({ open, onOpenChange, order }: OrderDetailProps) => {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Detalhes do Pedido {order.id}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Status do Pedido</p>
              <Badge className={getStatusBadgeClass(order.status)}>
                {order.status}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Valor Total</p>
              <p className="text-lg font-semibold">R$ {order.amount.toFixed(2)}</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm text-muted-foreground">Cliente</p>
            <p className="font-medium">{order.customer}</p>
            <p className="text-sm">{order.email}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Produto</p>
            <p className="font-medium">{order.product}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Data do Pedido</p>
            <p>{order.date}</p>
          </div>
          
          <Separator />
          
          <div className="flex justify-end gap-2">
            {order.status === "aguardando pagamento" && (
              <Button variant="outline">Marcar como Pago</Button>
            )}
            {order.status !== "cancelado" && (
              <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Cancelar Pedido
              </Button>
            )}
            <Button>Emitir Nota Fiscal</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailView;
