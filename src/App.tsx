
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Members from "./pages/Members";
import WhatsIncluded from "./pages/WhatsIncluded";
import Academy from "./pages/Academy";
import Resources from "./pages/Resources";
import Marketplace from "./pages/Marketplace";
import HelpCenter from "./pages/HelpCenter";
import AdminGuard from "./components/AdminGuard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminMarketing from "./pages/admin/AdminMarketing";
import AdminWallet from "./pages/admin/AdminWallet";
import AdminPartnership from "./pages/admin/AdminPartnership";
import AdminTools from "./pages/admin/AdminTools";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminContent from "./pages/admin/AdminContent";
import AdminSales from "./pages/admin/AdminSales";

// Content management pages
import AdminBlogContent from "./pages/admin/content/AdminBlogContent";
import AdminVideoContent from "./pages/admin/content/AdminVideoContent";
import AdminTestimonialsContent from "./pages/admin/content/AdminTestimonialsContent";
import AdminMediaLibrary from "./pages/admin/content/AdminMediaLibrary";
import AdminPagesContent from "./pages/admin/content/AdminPagesContent";
import AdminFaqContent from "./pages/admin/content/AdminFaqContent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/whats-included" element={<WhatsIncluded />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/help-center" element={<HelpCenter />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
          <Route path="/admin/products" element={<AdminGuard><AdminProducts /></AdminGuard>} />
          <Route path="/admin/products/add" element={<AdminGuard><AdminAddProduct /></AdminGuard>} />
          <Route path="/admin/products/categories" element={<AdminGuard><AdminProducts /></AdminGuard>} />
          <Route path="/admin/orders" element={<AdminGuard><AdminOrders /></AdminGuard>} />
          <Route path="/admin/orders/refunds" element={<AdminGuard><AdminOrders /></AdminGuard>} />
          <Route path="/admin/orders/invoices" element={<AdminGuard><AdminOrders /></AdminGuard>} />
          <Route path="/admin/users" element={<AdminGuard><AdminUsers /></AdminGuard>} />
          <Route path="/admin/marketing" element={<AdminGuard><AdminMarketing /></AdminGuard>} />
          <Route path="/admin/marketing/campaigns" element={<AdminGuard><AdminMarketing /></AdminGuard>} />
          <Route path="/admin/marketing/email" element={<AdminGuard><AdminMarketing /></AdminGuard>} />
          <Route path="/admin/marketing/analytics" element={<AdminGuard><AdminMarketing /></AdminGuard>} />
          
          {/* Wallet Routes */}
          <Route path="/admin/wallet" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          <Route path="/admin/wallet/balance" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          <Route path="/admin/wallet/transactions" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          <Route path="/admin/wallet/withdraw" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          <Route path="/admin/wallet/monthly" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          <Route path="/admin/wallet/advance" element={<AdminGuard><AdminWallet /></AdminGuard>} />
          
          <Route path="/admin/partnership" element={<AdminGuard><AdminPartnership /></AdminGuard>} />
          <Route path="/admin/partnership/affiliates" element={<AdminGuard><AdminPartnership /></AdminGuard>} />
          <Route path="/admin/partnership/programs" element={<AdminGuard><AdminPartnership /></AdminGuard>} />
          <Route path="/admin/partnership/commissions" element={<AdminGuard><AdminPartnership /></AdminGuard>} />
          <Route path="/admin/tools" element={<AdminGuard><AdminTools /></AdminGuard>} />
          <Route path="/admin/tools/seo" element={<AdminGuard><AdminTools /></AdminGuard>} />
          <Route path="/admin/tools/analytics" element={<AdminGuard><AdminTools /></AdminGuard>} />
          <Route path="/admin/tools/automation" element={<AdminGuard><AdminTools /></AdminGuard>} />
          <Route path="/admin/content" element={<AdminGuard><AdminContent /></AdminGuard>} />
          
          {/* Sales Routes */}
          <Route path="/admin/sales" element={<AdminGuard><AdminSales /></AdminGuard>} />
          <Route path="/admin/sales/balance" element={<AdminGuard><AdminSales /></AdminGuard>} />
          <Route path="/admin/sales/statement" element={<AdminGuard><AdminSales /></AdminGuard>} />
          <Route path="/admin/sales/monthly" element={<AdminGuard><AdminSales /></AdminGuard>} />
          <Route path="/admin/sales/withdraw" element={<AdminGuard><AdminSales /></AdminGuard>} />
          <Route path="/admin/sales/advance" element={<AdminGuard><AdminSales /></AdminGuard>} />
          
          {/* Content Management Routes */}
          <Route path="/admin/content/blog" element={<AdminGuard><AdminBlogContent /></AdminGuard>} />
          <Route path="/admin/content/blog/new" element={<AdminGuard><AdminBlogContent /></AdminGuard>} />
          <Route path="/admin/content/blog/edit/:id" element={<AdminGuard><AdminBlogContent /></AdminGuard>} />
          <Route path="/admin/content/videos" element={<AdminGuard><AdminVideoContent /></AdminGuard>} />
          <Route path="/admin/content/testimonials" element={<AdminGuard><AdminTestimonialsContent /></AdminGuard>} />
          <Route path="/admin/content/media" element={<AdminGuard><AdminMediaLibrary /></AdminGuard>} />
          <Route path="/admin/content/pages" element={<AdminGuard><AdminPagesContent /></AdminGuard>} />
          <Route path="/admin/content/faq" element={<AdminGuard><AdminFaqContent /></AdminGuard>} />
          
          <Route path="/admin/settings" element={<AdminGuard><AdminSettings /></AdminGuard>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
