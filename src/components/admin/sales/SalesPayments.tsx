
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

interface PaymentFormValues {
  nif: string;
  creditCard: string;
  bankAccount: string;
}

const SalesPayments = () => {
  const form = useForm<PaymentFormValues>({
    defaultValues: {
      nif: "",
      creditCard: "",
      bankAccount: ""
    }
  });

  const onSubmit = (data: PaymentFormValues) => {
    // In a real app, this would send the payment data to the server
    console.log("Payment form submitted:", data);
    toast({
      title: "Pagamento processado",
      description: "Seu pagamento foi processado com sucesso.",
    });
    form.reset();
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Pagamento Seguro</h1>
      <Card>
        <CardHeader>
          <CardTitle>Dados de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nif"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIF (Número de Identificação Fiscal)</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu NIF" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="creditCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cartão de Crédito</FormLabel>
                    <FormControl>
                      <Input placeholder="Número do cartão" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bankAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conta Bancária</FormLabel>
                    <FormControl>
                      <Input placeholder="Número da conta bancária" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Pagar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default SalesPayments;
