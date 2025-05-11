
import { toast } from "@/hooks/use-toast";

// Define the section keys that match our admin panel structure
export type AdminSectionKey = 'vendas' | 'marketing' | 'carteira' | 'usuarios' | 'parcerias' | 'produtos';

// Interface to track the status of each admin section
interface AdminSystemState {
  sections: Record<AdminSectionKey, boolean>;
  lastChecked: Date | null;
}

class AdminSystemService {
  private state: AdminSystemState = {
    sections: {
      vendas: true,
      marketing: false,
      carteira: true,
      usuarios: true,
      parcerias: true,
      produtos: true
    },
    lastChecked: null
  };

  constructor() {
    // Initialize the service with saved state if available
    this.loadState();
  }

  private loadState(): void {
    const savedState = localStorage.getItem('adminSystemState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        this.state = {
          ...parsed,
          lastChecked: parsed.lastChecked ? new Date(parsed.lastChecked) : null
        };
      } catch (error) {
        console.error('Failed to load admin system state', error);
      }
    }
  }

  private saveState(): void {
    localStorage.setItem('adminSystemState', JSON.stringify(this.state));
  }

  public checkAllSections(): Record<AdminSectionKey, boolean> {
    // In a real application, this would actually check each section's functionality
    // For demo purposes, we're simulating the check
    this.state.lastChecked = new Date();
    this.saveState();
    return this.state.sections;
  }

  public getSectionStatus(section: AdminSectionKey): boolean {
    return this.state.sections[section] || false;
  }

  public getAllSectionsStatus(): Record<AdminSectionKey, boolean> {
    return {...this.state.sections};
  }

  public fixSection(section: AdminSectionKey): boolean {
    if (!(section in this.state.sections)) {
      toast({
        title: "Erro",
        description: `Seção '${section}' não encontrada.`,
        variant: "destructive",
      });
      return false;
    }

    // Fix the specified section
    this.state.sections[section] = true;
    this.saveState();
    
    toast({
      title: "Sucesso",
      description: `A seção '${section}' foi corrigida e agora está funcionando.`,
    });
    
    return true;
  }

  public fixAllSections(): void {
    // Set all sections to working state
    Object.keys(this.state.sections).forEach(key => {
      this.state.sections[key as AdminSectionKey] = true;
    });
    
    this.saveState();
    
    toast({
      title: "Sucesso",
      description: "Todas as seções foram corrigidas e estão funcionando corretamente.",
    });
  }

  public logAction(section: string, action: string): boolean {
    // Convert section to AdminSectionKey if valid
    const validSection = (this.isValidSectionKey(section) ? section : "marketing") as AdminSectionKey;
    
    if (!this.state.sections[validSection]) {
      toast({
        title: "Erro",
        description: `Ação em '${section}' não pode ser realizada porque a seção está com problema.`,
        variant: "destructive",
      });
      return false;
    }
    
    // Log the action (in a real app, this might send to a backend service)
    console.log(`[${new Date().toLocaleString()}] [${section}] ${action}`);
    
    toast({
      title: "Ação registrada",
      description: `[${section}] ${action} realizada com sucesso.`,
    });
    
    return true;
  }

  public getLastCheckTime(): Date | null {
    return this.state.lastChecked;
  }
  
  // Helper method to check if a string is a valid AdminSectionKey
  public isValidSectionKey(key: string): key is AdminSectionKey {
    return ["vendas", "marketing", "carteira", "usuarios", "parcerias", "produtos"].includes(key as AdminSectionKey);
  }
}

// Export a singleton instance
export const adminSystemService = new AdminSystemService();
