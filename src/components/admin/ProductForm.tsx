
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  ImagePlus, 
  FilePlus, 
  Upload, 
  X, 
  Save, 
  ArrowLeft,
  Tag,
  Eye
} from "lucide-react";

interface FilePreview {
  file: File;
  url: string;
}

const ProductForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("basic");
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [comparePrice, setComparePrice] = useState("");
  const [productType, setProductType] = useState("curso");
  const [status, setStatus] = useState("draft");
  
  // Media state
  const [images, setImages] = useState<FilePreview[]>([]);
  const [videos, setVideos] = useState<FilePreview[]>([]);
  const [files, setFiles] = useState<FilePreview[]>([]);
  
  // SEO state
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  
  // Pricing options
  const [hasSalePrice, setHasSalePrice] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionInterval, setSubscriptionInterval] = useState("month");
  
  // File upload handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setVideos(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].url);
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  const removeVideo = (index: number) => {
    const newVideos = [...videos];
    URL.revokeObjectURL(newVideos[index].url);
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  
  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would upload the files and save the product data
    toast({
      title: "Produto salvo",
      description: status === "published" 
        ? "Seu produto foi publicado com sucesso." 
        : "Seu produto foi salvo como rascunho.",
    });
    
    navigate("/admin/products");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="outline" 
          type="button" 
          onClick={() => navigate("/admin/products")}
        >
          <ArrowLeft size={16} className="mr-2" /> Voltar
        </Button>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            type="button"
            onClick={() => window.open("/product-preview", "_blank")}
          >
            <Eye size={16} className="mr-2" /> Pré-visualizar
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => {
              setStatus("draft");
              setTimeout(() => document.forms[0].requestSubmit(), 0);
            }}
          >
            Salvar Rascunho
          </Button>
          
          <Button 
            type="button" 
            onClick={() => {
              setStatus("published");
              setTimeout(() => document.forms[0].requestSubmit(), 0);
            }}
          >
            <Save size={16} className="mr-2" /> Publicar
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
          <TabsTrigger value="media">Mídia</TabsTrigger>
          <TabsTrigger value="pricing">Preços</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
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
                <Button type="button" onClick={() => setActiveTab("media")} className="mt-4">
                  Próximo: Adicionar Mídia
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Media do Produto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Imagens do Produto</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative group border rounded-md overflow-hidden h-32">
                      <img 
                        src={img.url} 
                        alt={`Preview ${idx}`} 
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(idx)}
                        type="button"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border border-dashed rounded-md h-32 flex items-center justify-center">
                    <Label 
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center cursor-pointer p-4 w-full h-full hover:bg-gray-50"
                    >
                      <ImagePlus className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Carregar Imagem</span>
                      <Input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        multiple
                        onChange={handleImageUpload}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Vídeos</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {videos.map((vid, idx) => (
                    <div key={idx} className="relative group border rounded-md overflow-hidden h-40">
                      <video 
                        src={vid.url} 
                        controls
                        className="w-full h-full object-cover"
                      />
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeVideo(idx)}
                        type="button"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border border-dashed rounded-md h-40 flex items-center justify-center">
                    <Label 
                      htmlFor="video-upload"
                      className="flex flex-col items-center justify-center cursor-pointer p-4 w-full h-full hover:bg-gray-50"
                    >
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Carregar Vídeo</span>
                      <Input 
                        id="video-upload" 
                        type="file" 
                        accept="video/*" 
                        className="hidden" 
                        multiple
                        onChange={handleVideoUpload}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Arquivos Adicionais</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative group border rounded-md p-3 flex items-center gap-3">
                      <FilePlus size={24} className="text-gray-400" />
                      <div className="overflow-hidden">
                        <p className="font-medium text-sm truncate">{file.file.name}</p>
                        <p className="text-xs text-gray-500">{Math.round(file.file.size / 1024)} KB</p>
                      </div>
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(idx)}
                        type="button"
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border border-dashed rounded-md h-20 flex items-center justify-center">
                    <Label 
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center cursor-pointer p-4 w-full h-full hover:bg-gray-50"
                    >
                      <FilePlus className="h-6 w-6 text-gray-400 mb-1" />
                      <span className="text-sm text-gray-500">Carregar Arquivos</span>
                      <Input 
                        id="file-upload" 
                        type="file" 
                        className="hidden" 
                        multiple
                        onChange={handleFileUpload}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setActiveTab("basic")}>
                  Anterior
                </Button>
                <Button type="button" onClick={() => setActiveTab("pricing")}>
                  Próximo: Definir Preços
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle>Preços e Opções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Preço (R$)</Label>
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
                  
                  {hasSalePrice && (
                    <div className="space-y-2">
                      <Label htmlFor="compare-price">Preço Original (R$)</Label>
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
                </div>
                
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
                <Button type="button" variant="outline" onClick={() => setActiveTab("media")}>
                  Anterior
                </Button>
                <Button type="button" onClick={() => setActiveTab("seo")}>
                  Próximo: SEO
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seo">
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
                <Button type="button" variant="outline" onClick={() => setActiveTab("pricing")}>
                  Anterior
                </Button>
                <Button type="submit">
                  <Save size={16} className="mr-2" /> Finalizar e Salvar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
};

export default ProductForm;
