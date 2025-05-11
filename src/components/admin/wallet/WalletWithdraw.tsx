
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const WalletWithdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Saque de Fundos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Solicitar Saque</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center py-4">
              <p className="text-sm font-medium text-muted-foreground">Saldo Disponível para Saque</p>
              <p className="text-3xl font-bold">€ 2.547,85</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Valor do Saque</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">€</span>
                <input 
                  type="text" 
                  className="w-full pl-8 pr-4 py-2 border rounded-md" 
                  placeholder="0,00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
            </div>
            <Button className="w-full">Solicitar Saque</Button>
            <Link to="/admin/wallet">
              <Button variant="outline" className="w-full">Cancelar</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WalletWithdraw;
