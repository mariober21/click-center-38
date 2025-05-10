
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import BasicInfoTab from "./BasicInfoTab";
import MediaTab from "./MediaTab";
import PricingTab from "./PricingTab";
import SeoTab from "./SeoTab";

interface FilePreview {
  file: File;
  url: string;
}

interface ProductTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  // Basic info
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  productType: string;
  setProductType: (value: string) => void;
  // Media
  images: FilePreview[];
  videos: FilePreview[];
  files: FilePreview[];
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (index: number) => void;
  removeVideo: (index: number) => void;
  removeFile: (index: number) => void;
  // Pricing
  price: string;
  setPrice: (value: string) => void;
  comparePrice: string;
  setComparePrice: (value: string) => void;
  hasSalePrice: boolean;
  setHasSalePrice: (value: boolean) => void;
  isSubscription: boolean;
  setIsSubscription: (value: boolean) => void;
  subscriptionInterval: string;
  setSubscriptionInterval: (value: string) => void;
  // SEO
  slug: string;
  setSlug: (value: string) => void;
  metaTitle: string;
  setMetaTitle: (value: string) => void;
  metaDescription: string;
  setMetaDescription: (value: string) => void;
}

const ProductTabs = ({ 
  activeTab,
  setActiveTab,
  // Basic info
  title,
  setTitle,
  description,
  setDescription,
  productType,
  setProductType,
  // Media
  images,
  videos,
  files,
  handleImageUpload,
  handleVideoUpload,
  handleFileUpload,
  removeImage,
  removeVideo,
  removeFile,
  // Pricing
  price,
  setPrice,
  comparePrice,
  setComparePrice,
  hasSalePrice,
  setHasSalePrice,
  isSubscription,
  setIsSubscription,
  subscriptionInterval,
  setSubscriptionInterval,
  // SEO
  slug,
  setSlug,
  metaTitle,
  setMetaTitle,
  metaDescription,
  setMetaDescription
}: ProductTabsProps) => {
  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab} value={activeTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
        <TabsTrigger value="media">Mídia</TabsTrigger>
        <TabsTrigger value="pricing">Preços</TabsTrigger>
        <TabsTrigger value="seo">SEO</TabsTrigger>
      </TabsList>
      
      <TabsContent value="basic">
        <BasicInfoTab
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          productType={productType}
          setProductType={setProductType}
          onNextTab={() => setActiveTab("media")}
        />
      </TabsContent>
      
      <TabsContent value="media">
        <MediaTab
          images={images}
          videos={videos}
          files={files}
          onImageUpload={handleImageUpload}
          onVideoUpload={handleVideoUpload}
          onFileUpload={handleFileUpload}
          removeImage={removeImage}
          removeVideo={removeVideo}
          removeFile={removeFile}
          onPrevTab={() => setActiveTab("basic")}
          onNextTab={() => setActiveTab("pricing")}
        />
      </TabsContent>
      
      <TabsContent value="pricing">
        <PricingTab
          price={price}
          setPrice={setPrice}
          comparePrice={comparePrice}
          setComparePrice={setComparePrice}
          hasSalePrice={hasSalePrice}
          setHasSalePrice={setHasSalePrice}
          isSubscription={isSubscription}
          setIsSubscription={setIsSubscription}
          subscriptionInterval={subscriptionInterval}
          setSubscriptionInterval={setSubscriptionInterval}
          onPrevTab={() => setActiveTab("media")}
          onNextTab={() => setActiveTab("seo")}
        />
      </TabsContent>
      
      <TabsContent value="seo">
        <SeoTab
          slug={slug}
          setSlug={setSlug}
          metaTitle={metaTitle}
          setMetaTitle={setMetaTitle}
          metaDescription={metaDescription}
          setMetaDescription={setMetaDescription}
          onPrevTab={() => setActiveTab("pricing")}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
