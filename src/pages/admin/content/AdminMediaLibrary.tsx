
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Image, Plus, Search, Trash2, Video } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MediaItem {
  id: string;
  name: string;
  type: "image" | "video" | "document" | "other";
  size: string;
  url: string;
  thumbnail?: string;
  uploadDate: string;
  dimensions?: string;
}

const AdminMediaLibrary = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dragActive, setDragActive] = useState(false);
  
  // Sample media data - would come from database in a real implementation
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: "1",
      name: "banner-principal.jpg",
      type: "image",
      size: "2.4 MB",
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      uploadDate: "2025-03-10",
      dimensions: "1920 x 1080",
    },
    {
      id: "2",
      name: "tutorial-produto.mp4",
      type: "video",
      size: "15.7 MB",
      url: "/videos/tutorial.mp4",
      thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      uploadDate: "2025-02-22",
    },
    {
      id: "3",
      name: "catalogo-2025.pdf",
      type: "document",
      size: "4.2 MB",
      url: "/documents/catalogo.pdf",
      uploadDate: "2025-01-15",
    },
    {
      id: "4",
      name: "logo-empresa.png",
      type: "image",
      size: "0.8 MB",
      url: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      uploadDate: "2024-12-05",
      dimensions: "512 x 512",
    },
    {
      id: "5",
      name: "apresentacao-servicos.pdf",
      type: "document",
      size: "3.5 MB",
      url: "/documents/apresentacao.pdf",
      uploadDate: "2025-03-01",
    },
    {
      id: "6",
      name: "depoimento-cliente.mp4",
      type: "video",
      size: "28.3 MB",
      url: "/videos/depoimento.mp4",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      uploadDate: "2025-02-18",
    },
  ]);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    // In a real implementation, we would upload files to a server or storage service
    Array.from(files).forEach(file => {
      const fileType = file.type.split('/')[0];
      let type: MediaItem["type"] = "other";
      
      if (fileType === "image") type = "image";
      else if (fileType === "video") type = "video";
      else if (file.type === "application/pdf") type = "document";
      
      const newItem: MediaItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: type,
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file),
        uploadDate: new Date().toISOString().split('T')[0],
      };
      
      setMediaItems(prev => [newItem, ...prev]);
    });
    
    toast({
      title: "Arquivos adicionados",
      description: `${files.length} arquivo(s) adicionado(s) com sucesso.`,
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleDeleteMedia = (id: string) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
    toast({
      title: "Arquivo removido",
      description: "O arquivo foi removido com sucesso.",
    });
  };

  const filteredItems = mediaItems
    .filter(item => {
      if (activeTab !== "all" && item.type !== activeTab) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });

  const getFileIcon = (type: MediaItem["type"]) => {
    switch (type) {
      case "image": return <Image size={24} className="text-blue-500" />;
      case "video": return <Video size={24} className="text-purple-500" />;
      case "document": return <FileText size={24} className="text-red-500" />;
      default: return <FileText size={24} className="text-gray-500" />;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Biblioteca de Mídia</h1>
          <Button>
            <Plus size={16} className="mr-2" /> Adicionar Arquivos
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle>Seus Arquivos</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pesquisar arquivos..."
                    className="w-full md:w-[300px] pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="image">Imagens</TabsTrigger>
                <TabsTrigger value="video">Vídeos</TabsTrigger>
                <TabsTrigger value="document">Documentos</TabsTrigger>
              </TabsList>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center mb-8 ${
                  dragActive ? "border-primary bg-primary/5" : "border-gray-200"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Image size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Arraste e solte arquivos aqui</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    ou clique no botão abaixo para selecionar arquivos do seu computador
                  </p>
                  <div>
                    <Label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Escolher Arquivos
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhum arquivo encontrado.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="border rounded-md overflow-hidden group">
                      <div className="relative aspect-video bg-muted flex items-center justify-center">
                        {item.type === "image" ? (
                          <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : item.type === "video" && item.thumbnail ? (
                          <div className="relative w-full h-full">
                            <img
                              src={item.thumbnail}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-black/60 p-3">
                                <Video size={24} className="text-white" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center p-4">
                            {getFileIcon(item.type)}
                            <span className="mt-2 text-sm truncate max-w-full px-2">
                              {item.name}
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <Button size="sm" variant="outline" className="bg-white">
                            <Download size={16} className="mr-1" /> Baixar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteMedia(item.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="truncate">
                            <p className="font-medium truncate" title={item.name}>
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.size} • {item.uploadDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminMediaLibrary;
