
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

interface BasicInfoTabProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  productType: string;
  setProductType: (value: string) => void;
  onNextTab: () => void;
}

const BasicInfoTab = ({
  title,
  setTitle,
  description,
  setDescription,
  productType,
  setProductType,
  onNextTab
}: BasicInfoTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Produto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título do Produto</Label>
          <Input 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ex: Curso de Marketing Digital"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Descreva seu produto em detalhes"
            rows={5}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="product-type">Tipo de Produto</Label>
          <Select value={productType} onValueChange={setProductType}>
            <SelectTrigger id="product-type">
              <SelectValue placeholder="Selecione o tipo de produto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="curso">Curso</SelectItem>
              <SelectItem value="ebook">Ebook</SelectItem>
              <SelectItem value="mentoria">Mentoria</SelectItem>
              <SelectItem value="template">Template</SelectItem>
              <SelectItem value="software">Software</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-4">
          <Button type="button" onClick={onNextTab} className="mt-4">
            Próximo: Adicionar Mídia
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoTab;
