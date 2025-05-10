
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Tag, X, DollarSign, Euro, Banknote, CurrencyIcon } from "lucide-react";

interface PricingTabProps {
  price: string;
  setPrice: (value: string) => void;
  currency: string;
  setCurrency: (value: string) => void;
  comparePrice: string;
  setComparePrice: (value: string) => void;
  hasSalePrice: boolean;
  setHasSalePrice: (value: boolean) => void;
  isSubscription: boolean;
  setIsSubscription: (value: boolean) => void;
  subscriptionInterval: string;
  setSubscriptionInterval: (value: string) => void;
  onPrevTab: () => void;
  onNextTab: () => void;
}

const currencyOptions = [
  { value: "BRL", label: "Real Brasileiro (R$)", icon: <Banknote size={16} /> },
  { value: "USD", label: "Dólar Americano ($)", icon: <DollarSign size={16} /> },
  { value: "EUR", label: "Euro (€)", icon: <Euro size={16} /> },
  { value: "GBP", label: "Libra Esterlina (£)", icon: <Banknote size={16} /> },
  { value: "JPY", label: "Iene Japonês (¥)", icon: <Banknote size={16} /> },
];

const getCurrencySymbol = (currency: string): string => {
  switch(currency) {
    case "BRL": return "R$";
    case "USD": return "$";
    case "EUR": return "€";
    case "GBP": return "£";
    case "JPY": return "¥";
    default: return "R$";
  }
};

const PricingTab = ({
  price,
  setPrice,
  currency,
  setCurrency,
  comparePrice,
  setComparePrice,
  hasSalePrice,
  setHasSalePrice,
  isSubscription,
  setIsSubscription,
  subscriptionInterval,
  setSubscriptionInterval,
  onPrevTab,
  onNextTab
}: PricingTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preços e Opções</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Moeda</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger id="currency" className="flex items-center gap-2">
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent>
                  {currencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        {option.icon}
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Preço ({getCurrencySymbol(currency)})</Label>
              <Input 
                id="price" 
                type="number" 
                min="0" 
                step="0.01" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="0.00"
                required
              />
            </div>
          </div>
          
          {hasSalePrice && (
            <div className="space-y-2">
              <Label htmlFor="compare-price">Preço Original ({getCurrencySymbol(currency)})</Label>
              <div className="relative">
                <Input 
                  id="compare-price" 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  value={comparePrice} 
                  onChange={(e) => setComparePrice(e.target.value)} 
                  placeholder="0.00"
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                  onClick={() => setHasSalePrice(false)}
                >
                  <X size={14} />
                </Button>
              </div>
            </div>
          )}
          
          {!hasSalePrice && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setHasSalePrice(true)} 
              size="sm"
            >
              <Tag size={16} className="mr-2" /> Adicionar Preço Promocional
            </Button>
          )}
          
          <div className="flex items-center space-x-2 pt-4">
            <input
              type="checkbox"
              id="subscription"
              checked={isSubscription}
              onChange={(e) => setIsSubscription(e.target.checked)}
              className="rounded border-gray-300"
            />
            <Label htmlFor="subscription">Este é um produto por assinatura</Label>
          </div>
          
          {isSubscription && (
            <div className="space-y-2 pl-6">
              <Label htmlFor="subscription-interval">Intervalo de Cobrança</Label>
              <Select value={subscriptionInterval} onValueChange={setSubscriptionInterval}>
                <SelectTrigger id="subscription-interval">
                  <SelectValue placeholder="Selecione o intervalo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Semanal</SelectItem>
                  <SelectItem value="month">Mensal</SelectItem>
                  <SelectItem value="quarter">Trimestral</SelectItem>
                  <SelectItem value="year">Anual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onPrevTab}>
            Anterior
          </Button>
          <Button type="button" onClick={onNextTab}>
            Próximo: SEO
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingTab;
