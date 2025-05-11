
// Convert the Python PlataformaVendas class to TypeScript

interface BankAccount {
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
}

export class SalesService {
  private taxaComissao: number;
  private contaBancaria: BankAccount;
  private vendas: Sale[];
  private comissoesAcumuladas: number;

  constructor(taxaComissao: number, contaBancaria: BankAccount) {
    this.taxaComissao = taxaComissao / 100; // Converter para decimal
    this.contaBancaria = contaBancaria;
    this.vendas = [];
    this.comissoesAcumuladas = 0;
  }

  registrarVenda(produto: string, valor: number): Sale {
    const comissao = valor * this.taxaComissao;
    this.comissoesAcumuladas += comissao;
    const venda: Sale = {
      produto,
      valor,
      comissao,
      data: new Date()
    };
    this.vendas.push(venda);
    return venda;
  }

  transferirComissoes(): {success: boolean, amount: number, account: BankAccount} {
    if (this.comissoesAcumuladas > 0) {
      const result = {
        success: true,
        amount: this.comissoesAcumuladas,
        account: this.contaBancaria
      };
      this.comissoesAcumuladas = 0;
      return result;
    } else {
      return {
        success: false,
        amount: 0,
        account: this.contaBancaria
      };
    }
  }

  getVendas(): Sale[] {
    return [...this.vendas];
  }

  getComissoesAcumuladas(): number {
    return this.comissoesAcumuladas;
  }

  getContaBancaria(): BankAccount {
    return {...this.contaBancaria};
  }
}

// Inicializa a plataforma com dados de exemplo
const contaBancariaAdmin = {
  titular: "João Silva",
  banco: "Banco Exemplo",
  agencia: "1234",
  numero: "56789-0"
};

export const salesPlatform = new SalesService(10, contaBancariaAdmin);

// Adiciona dados de exemplo
salesPlatform.registrarVenda("Curso Python", 500);
salesPlatform.registrarVenda("E-book Django", 150);
