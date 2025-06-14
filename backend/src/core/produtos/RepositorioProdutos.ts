import Produto from "./Produto";

export default class RepositorioProdutos {
  itens: Produto[] = [
    new Produto("Colher", 5.99),
    new Produto("Mouse", 39.99),
    new Produto("Teclado", 99.99),
  ]

  obterTodos() {
    return this.itens
  }

  novo(nome: string, preco: number) {
    const novoProduto = new Produto(nome, preco)
    this.itens.push(novoProduto)
  }

  obterPorCodigo(cod: string) {
    const produto = this.itens.find(produto => produto.codigo === cod)
    return produto
  }

  alterarPorCodigo(cod: string, nome?: string, preco?: number) {
    const indice = this.itens.findIndex(produto => produto.codigo === cod)
    if (indice >= 0 && indice < this.itens.length) {
      if (nome) {
        this.itens[indice].nome = nome
      }
      if (preco) {
        this.itens[indice].preco = preco
      }
    }
  }
}