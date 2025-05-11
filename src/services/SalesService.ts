
interface ContaBancaria {
  titular: string;
  banco: string;
  agencia: string;
  numero: string;
}

export interface Sale {
  produto: string;
  valor: number;
  comissao: number;
  data: Date;
  transferida: boolean;
}

class SalesPlatformService {
  private vendas: Sale[] = [];
  private comissoesAcumuladas: number = 0;
  private contaBancaria: ContaBancaria = {
    titular: "Usuário Demo",
    banco: "Banco Exemplo",
    agencia: "1234",
    numero: "12345-6"
  };

  constructor() {
    // Simulated pre-existing data
    this.vendas = [
      {
        produto: "Curso de Marketing Digital",
        valor: 297,
        comissao: 29.7,
        data: new Date(2023, 4, 15),
        transferida: true
      },
      {
        produto: "Ebook: Vendas Online",
        valor: 47,
        comissao: 4.7,
        data: new Date(2023, 4, 10),
        transferida: false
      }
    ];
    
    this.recalcularComissoesAcumuladas();
  }

  private recalcularComissoesAcumuladas(): void {
    this.comissoesAcumuladas = this.vendas
      .filter(venda => !venda.transferida)
      .reduce((total, venda) => total + venda.comissao, 0);
  }

  public registrarVenda(produto: string, valor: number): Sale {
    const comissao = valor * 0.1; // 10% de comissão
    
    const novaVenda: Sale = {
      produto,
      valor,
      comissao,
      data: new Date(),
      transferida: false
    };
    
    this.vendas.unshift(novaVenda); // Adiciona no início do array
    this.recalcularComissoesAcumuladas();
    
    return novaVenda;
  }

  public getVendas(): Sale[] {
    return [...this.vendas];
  }

  public getComissoesAcumuladas(): number {
    return this.comissoesAcumuladas;
  }

  public getContaBancaria(): ContaBancaria {
    return { ...this.contaBancaria };
  }

  public setContaBancaria(dados: Partial<ContaBancaria>): void {
    this.contaBancaria = { ...this.contaBancaria, ...dados };
  }

  public transferirComissoes(): { success: boolean, amount: number, account: ContaBancaria } {
    const amount = this.comissoesAcumuladas;
    
    if (amount <= 0) {
      return {
        success: false,
        amount: 0,
        account: this.contaBancaria
      };
    }
    
    // Marcar todas as comissões como transferidas
    this.vendas.forEach(venda => {
      if (!venda.transferida) {
        venda.transferida = true;
      }
    });
    
    this.comissoesAcumuladas = 0;
    
    return {
      success: true,
      amount,
      account: this.contaBancaria
    };
  }
}

// Export a singleton instance
export const salesPlatform = new SalesPlatformService();
