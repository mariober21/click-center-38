
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SalesWithdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("Banco XYZ - Conta 12345-6");
  
  const handleSubmit = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast({
        title: "Erro",
        description: "Por favor, insira um valor válido para saque.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Solicitação enviada",
      description: `Seu saque de €${withdrawAmount} foi solicitado com sucesso.`,
    });
    
    setWithdrawAmount("");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Saque</h1>
      <Card>
        <CardHeader>
          <CardTitle>Solicitar Saque</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center py-4">
              <p className="text-sm font-medium text-muted-foreground">Saldo Disponível para Saque</p>
              <p className="text-3xl font-bold">€ 8.750,35</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Valor do Saque</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">€</span>
                <Input 
                  type="text" 
                  className="pl-8" 
                  placeholder="0,00" 
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Conta Bancária</label>
              <select 
                className="w-full px-4 py-2 border rounded-md"
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option>Banco XYZ - Conta 12345-6</option>
                <option>Adicionar Nova Conta</option>
              </select>
            </div>
            <Button className="w-full" onClick={handleSubmit}>Solicitar Saque</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SalesWithdraw;
