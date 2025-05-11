
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PythonCodeDisplay = () => {
  const pythonCode = `from datetime import datetime

class PlataformaAdmin:
    def __init__(self):
        """Inicializa o sistema do painel administrativo."""
        self.secoes = {
            "vendas": False,
            "marketing": False,
            "carteira": False,
            "usuarios": False,
            "parcerias": False,
            "produtos": False
        }

    def verificar_status_secoes(self):
        """Verifica o status de funcionamento de todas as seções."""
        print("=== Status das Seções ===")
        for secao, status in self.secoes.items():
            status_msg = "Funcionando" if status else "Com problema"
            print(f"{secao.capitalize()}: {status_msg}")
        print("========================\\n")

    def corrigir_secao(self, secao):
        """Simula a correção de uma seção específica.

        Args:
            secao (str): Nome da seção a ser corrigida.
        """
        if secao in self.secoes:
            self.secoes[secao] = True
            print(f"A seção '{secao}' foi corrigida e agora está funcionando.")
        else:
            print(f"Seção '{secao}' não encontrada.")

    def corrigir_todas_secoes(self):
        """Corrige todas as seções para garantir o funcionamento."""
        for secao in self.secoes:
            self.secoes[secao] = True
        print("Todas as seções foram corrigidas e estão funcionando corretamente.\\n")

    def registrar_acao(self, secao, acao):
        """Simula o registro de uma ação no sistema.

        Args:
            secao (str): Nome da seção onde a ação foi realizada.
            acao (str): Descrição da ação realizada.
        """
        if self.secoes.get(secao, False):
            print(f"Ação registrada: [{secao.capitalize()}] {acao} realizada com sucesso.")
        else:
            print(f"Erro: Ação em '{secao}' não pode ser realizada porque a seção está com problema.")

# Exemplo de uso:
if __name__ == "__main__":
    # Inicializa o sistema administrativo
    admin = PlataformaAdmin()

    # Verifica o status inicial das seções
    admin.verificar_status_secoes()

    # Tenta registrar uma ação antes de corrigir as seções
    admin.registrar_acao("vendas", "Consulta de relatório de vendas")

    # Corrige uma seção específica
    admin.corrigir_secao("vendas")

    # Verifica o status após a correção
    admin.verificar_status_secoes()

    # Corrige todas as seções
    admin.corrigir_todas_secoes()

    # Verifica o status final
    admin.verificar_status_secoes()

    # Registra uma ação após a correção
    admin.registrar_acao("vendas", "Consulta de relatório de vendas")`;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Documentação do Sistema</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-zinc-900 text-green-400 p-4 rounded-md overflow-x-auto font-mono text-sm">
          <pre>{pythonCode}</pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default PythonCodeDisplay;
