
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Save } from "lucide-react";

interface SeoTabProps {
  slug: string;
  setSlug: (value: string) => void;
  metaTitle: string;
  setMetaTitle: (value: string) => void;
  metaDescription: string;
  setMetaDescription: (value: string) => void;
  onPrevTab: () => void;
}

const SeoTab = ({
  slug,
  setSlug,
  metaTitle,
  setMetaTitle,
  metaDescription,
  setMetaDescription,
  onPrevTab
}: SeoTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações de SEO</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="slug">URL Personalizada</Label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-1">/produto/</span>
            <Input 
              id="slug" 
              value={slug} 
              onChange={(e) => setSlug(e.target.value)} 
              placeholder="url-do-produto"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="meta-title">Título da Meta (SEO)</Label>
          <Input 
            id="meta-title" 
            value={metaTitle} 
            onChange={(e) => setMetaTitle(e.target.value)} 
            placeholder="Título para os motores de busca"
          />
          <p className="text-xs text-muted-foreground">
            {metaTitle.length} / 60 caracteres recomendados
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="meta-description">Descrição da Meta (SEO)</Label>
          <Textarea 
            id="meta-description" 
            value={metaDescription} 
            onChange={(e) => setMetaDescription(e.target.value)} 
            placeholder="Descrição para os motores de busca"
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            {metaDescription.length} / 160 caracteres recomendados
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onPrevTab}>
            Anterior
          </Button>
          <Button type="submit">
            <Save size={16} className="mr-2" /> Finalizar e Salvar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeoTab;
