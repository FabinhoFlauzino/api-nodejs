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
}