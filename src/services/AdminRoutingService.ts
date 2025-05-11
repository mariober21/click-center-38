
import { toast } from "@/hooks/use-toast";

// Define common route paths
export const ADMIN_ROUTES = {
  dashboard: "/admin",
  sales: {
    base: "/admin/sales",
    balance: "/admin/sales/balance",
    statement: "/admin/sales/statement",
    monthly: "/admin/sales/monthly",
    withdraw: "/admin/sales/withdraw",
    advance: "/admin/sales/advance"
  },
  wallet: {
    base: "/admin/wallet",
    balance: "/admin/wallet/balance",
    transactions: "/admin/wallet/transactions",
    monthly: "/admin/wallet/monthly", 
    withdraw: "/admin/wallet/withdraw",
    advance: "/admin/wallet/advance"
  },
  marketing: {
    base: "/admin/marketing",
    campaigns: "/admin/marketing/campaigns",
    email: "/admin/marketing/email",
    analytics: "/admin/marketing/analytics"
  },
  users: "/admin/users",
  products: {
    base: "/admin/products",
    add: "/admin/products/add",
    categories: "/admin/products/categories"
  },
  partnership: {
    base: "/admin/partnership",
    affiliates: "/admin/partnership/affiliates",
    programs: "/admin/partnership/programs",
    commissions: "/admin/partnership/commissions"
  }
};

// Type for route error tracking
interface RouteError {
  path: string;
  message: string;
  timestamp: Date;
}

class AdminRoutingService {
  private routeErrors: RouteError[] = [];

  constructor() {
    // In a real application, we might load previous errors from storage
  }

  // Record a routing error
  public recordError(path: string, message: string): void {
    const error: RouteError = {
      path, 
      message, 
      timestamp: new Date()
    };
    
    this.routeErrors.push(error);
    console.error(`Routing error: ${message} at path ${path}`);
    
    // In a real app, we might send this to a server
  }

  // Get the correct path for wallet/sales sections
  public getFinancialPath(originalPath: string): string {
    // Handle the case where wallet and sales paths get confused
    if (originalPath.includes('/admin/wallet')) {
      const subPath = originalPath.split('/admin/wallet')[1] || '';
      
      // Find matching sales path if it exists
      for (const [key, path] of Object.entries(ADMIN_ROUTES.sales)) {
        if (key !== 'base' && originalPath === ADMIN_ROUTES.wallet[key as keyof typeof ADMIN_ROUTES.wallet]) {
          toast({
            title: "Redirecionamento",
            description: "Corrigindo rota para o caminho correto.",
          });
          return path as string;
        }
      }
    }
    
    // Same for sales paths
    if (originalPath.includes('/admin/sales')) {
      const subPath = originalPath.split('/admin/sales')[1] || '';
      
      // Find matching wallet path if it exists
      for (const [key, path] of Object.entries(ADMIN_ROUTES.wallet)) {
        if (key !== 'base' && originalPath === ADMIN_ROUTES.sales[key as keyof typeof ADMIN_ROUTES.sales]) {
          toast({
            title: "Redirecionamento",
            description: "Corrigindo rota para o caminho correto.",
          });
          return path as string;
        }
      }
    }
    
    return originalPath;
  }

  // Get all route errors
  public getErrors(): RouteError[] {
    return [...this.routeErrors];
  }

  // Clear errors
  public clearErrors(): void {
    this.routeErrors = [];
  }
}

// Export a singleton instance
export const adminRoutingService = new AdminRoutingService();
