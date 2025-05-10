
import { useState } from "react";

export interface FilePreview {
  file: File;
  url: string;
}

export function useProductForm(initialTab: string = "basic") {
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("BRL");
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
  
  // Tab mapping function
  function mapExternalTabToInternal(externalTab: string): string {
    switch(externalTab) {
      case "info": return "basic";
      case "media": return "media";
      case "pricing": return "pricing";
      case "seo": return "seo";
      case "inventory": return "basic"; // Default to basic for inventory
      default: return "basic";
    }
  };
  
  // Active tab state
  const [activeTab, setActiveTab] = useState(initialTab ? mapExternalTabToInternal(initialTab) : "basic");
  
  return {
    title, setTitle,
    description, setDescription,
    price, setPrice,
    currency, setCurrency,
    comparePrice, setComparePrice,
    productType, setProductType,
    status, setStatus,
    images, videos, files,
    handleImageUpload, handleVideoUpload, handleFileUpload,
    removeImage, removeVideo, removeFile,
    metaTitle, setMetaTitle,
    metaDescription, setMetaDescription,
    slug, setSlug,
    hasSalePrice, setHasSalePrice,
    isSubscription, setIsSubscription,
    subscriptionInterval, setSubscriptionInterval,
    activeTab, setActiveTab,
    mapExternalTabToInternal
  };
}
