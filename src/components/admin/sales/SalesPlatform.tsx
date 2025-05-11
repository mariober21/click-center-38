
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { salesPlatform, Sale } from '@/services/SalesService';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DollarSign, ArrowDownCircle, PlusCircle } from 'lucide-react';

const SalesPlatform = () => {
  const [sales, setSales] = useState<Sale[]>(salesPlatform.getVendas());
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const { toast } = useToast();
  const contaBancaria = salesPlatform.getContaBancaria();
  
  const handleRegistrarVenda = () => {
    if (!produto.trim() || !valor.trim() || isNaN(parseFloat(valor))) {
      toast({
        title: "Dados inválidos",
        description: "Produto e valor são obrigatórios e o valor deve ser numérico.",
        variant: "destructive",
      });
      return;
    }
    
    const novaVenda = salesPlatform.registrarVenda(produto, parseFloat(valor));
    setSales([...salesPlatform.getVendas()]);
    
    toast({
      title: "Venda registrada com sucesso",
      description: `Comissão: € ${novaVenda.comissao.toFixed(2)}`,
    });
    
    setProduto('');
    setValor('');
  };
  
  const handleTransferirComissoes = () => {
    const result = salesPlatform.transferirComissoes();
    
    if (result.success) {
      toast({
        title: "Transferência realizada",
        description: `€ ${result.amount.toFixed(2)} transferido para a conta de ${result.account.titular}`,
      });
      
      // Atualizar as vendas (não é necessário, mas mantém o estado atualizado)
      setSales([...salesPlatform.getVendas()]);
    } else {
      toast({
        title: "Sem comissões para transferir",
        description: "Não há comissões acumuladas para transferência.",
        variant: "destructive",
      });
    }
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE') + ' ' + date.toLocaleTimeString('de-DE');
  };
  
  // Calcular comissão acumulada
  const comissoesAcumuladas = salesPlatform.getComissoesAcumuladas();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">
            Plataforma de Vendas e Comissões
          </CardTitle>
          <Button onClick={handleTransferirComissoes} className="flex items-center gap-2">
            <ArrowDownCircle size={16} />
            Transferir Comissões
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Resumo das comissões */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Comissões Acumuladas</p>
                    <p className="text-2xl font-bold">€ {comissoesAcumuladas.toFixed(2)}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <DollarSign className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dados bancários */}
            <Card>
              <CardContent className="p-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Dados Bancários</p>
                <div className="space-y-1">
                  <p><span className="font-medium">Titular:</span> {contaBancaria.titular}</p>
                  <p><span className="font-medium">Banco:</span> {contaBancaria.banco}</p>
                  <p><span className="font-medium">Agência:</span> {contaBancaria.agencia}</p>
                  <p><span className="font-medium">Conta:</span> {contaBancaria.numero}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Formulário para nova venda */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">Registrar Nova Venda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium mb-1 block">Produto</label>
                  <Input 
                    placeholder="Nome do produto" 
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-medium mb-1 block">Valor (€)</label>
                  <Input 
                    placeholder="0,00" 
                    type="number" 
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>
                <div className="md:col-span-1 flex items-end">
                  <Button 
                    onClick={handleRegistrarVenda} 
                    className="w-full flex items-center gap-2"
                  >
                    <PlusCircle size={16} />
                    Registrar Venda
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabela de histórico de vendas */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">Histórico de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Valor (€)</TableHead>
                    <TableHead className="text-right">Comissão (€)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sales.length > 0 ? (
                    sales.map((venda, index) => (
                      <TableRow key={index}>
                        <TableCell>{formatDate(venda.data)}</TableCell>
                        <TableCell>{venda.produto}</TableCell>
                        <TableCell className="text-right">
                          {venda.valor.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          {venda.comissao.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4">
                        Nenhuma venda registrada.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesPlatform;
