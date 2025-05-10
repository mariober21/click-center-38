
import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Plus, Search, Edit, Trash, Eye, Video, Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const AdminVideoContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  
  // This would come from database in a real implementation
  const videos = [
    { id: 1, title: "Introdução ao Marketing Digital", status: "publicado", author: "João Silva", date: "10/05/2025", views: 245 },
    { id: 2, title: "Tutorial: Como Usar o Dashboard", status: "privado", author: "Maria Oliveira", date: "08/05/2025", views: 102 },
    { id: 3, title: "Estratégias para Afiliados", status: "publicado", author: "Carlos Santos", date: "02/05/2025", views: 187 },
    { id: 4, title: "Workshop E-commerce", status: "publicado", author: "Ana Pereira", date: "29/04/2025", views: 322 },
    { id: 5, title: "Tendências de Marketing", status: "privado", author: "Paulo Rocha", date: "25/04/2025", views: 89 },
  ];

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um vídeo para upload.",
        variant: "destructive",
      });
      return;
    }

    if (!videoTitle) {
      toast({
        title: "Erro",
        description: "Por favor, informe um título para o vídeo.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally upload the file to your storage (e.g., Supabase Storage)
    // and then save the metadata to the database
    
    toast({
      title: "Sucesso!",
      description: `O vídeo "${videoTitle}" foi carregado com sucesso.`,
    });
    
    setIsDialogOpen(false);
    setSelectedFile(null);
    setVideoTitle("");
    setVideoDescription("");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Vídeos</h1>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus size={16} className="mr-2" /> Adicionar Vídeo
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar vídeos..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="published">Publicados</TabsTrigger>
            <TabsTrigger value="private">Privados</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Todos os Vídeos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Visualizações</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVideos.map((video) => (
                      <TableRow key={video.id}>
                        <TableCell className="font-medium">{video.title}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            video.status === "publicado" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                          }`}>
                            {video.status === "publicado" ? "Publicado" : "Privado"}
                          </span>
                        </TableCell>
                        <TableCell>{video.author}</TableCell>
                        <TableCell>{video.date}</TableCell>
                        <TableCell>{video.views}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                              <Trash size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Vídeos Publicados</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Visualizações</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVideos
                      .filter(video => video.status === "publicado")
                      .map((video) => (
                        <TableRow key={video.id}>
                          <TableCell className="font-medium">{video.title}</TableCell>
                          <TableCell>{video.author}</TableCell>
                          <TableCell>{video.date}</TableCell>
                          <TableCell>{video.views}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                <Trash size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="private" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Vídeos Privados</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Visualizações</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVideos
                      .filter(video => video.status === "privado")
                      .map((video) => (
                        <TableRow key={video.id}>
                          <TableCell className="font-medium">{video.title}</TableCell>
                          <TableCell>{video.author}</TableCell>
                          <TableCell>{video.date}</TableCell>
                          <TableCell>{video.views}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                <Trash size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Vídeo</DialogTitle>
            <DialogDescription>
              Faça upload de um vídeo para a biblioteca.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Título</label>
              <Input
                id="title"
                placeholder="Título do vídeo"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Descrição</label>
              <Input
                id="description"
                placeholder="Descrição do vídeo"
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="file" className="text-sm font-medium">Arquivo de Vídeo</label>
              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                {selectedFile ? (
                  <div className="flex flex-col items-center">
                    <Video className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => setSelectedFile(null)}
                    >
                      Trocar arquivo
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Arraste um arquivo ou clique para selecionar</p>
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="video-upload" className="cursor-pointer">
                        Selecionar arquivo
                        <input
                          id="video-upload"
                          type="file"
                          accept="video/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleUpload}>
              <Upload className="mr-2 h-4 w-4" />
              Fazer Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminVideoContent;
