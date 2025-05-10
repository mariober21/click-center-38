
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { ImagePlus, Upload, FilePlus, X } from "lucide-react";
import FileUploadPreview from "./FileUploadPreview";

interface FilePreview {
  file: File;
  url: string;
}

interface MediaTabProps {
  images: FilePreview[];
  videos: FilePreview[];
  files: FilePreview[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (index: number) => void;
  removeVideo: (index: number) => void;
  removeFile: (index: number) => void;
  onPrevTab: () => void;
  onNextTab: () => void;
}

const MediaTab = ({
  images,
  videos,
  files,
  onImageUpload,
  onVideoUpload,
  onFileUpload,
  removeImage,
  removeVideo,
  removeFile,
  onPrevTab,
  onNextTab
}: MediaTabProps) => {
  return (
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
                  onChange={onImageUpload}
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
                  onChange={onVideoUpload}
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
                  onChange={onFileUpload}
                />
              </Label>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onPrevTab}>
            Anterior
          </Button>
          <Button type="button" onClick={onNextTab}>
            Próximo: Definir Preços
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaTab;
