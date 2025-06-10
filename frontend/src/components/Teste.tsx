import { useEffect, useState } from "react"

type ProdutoProps = {
  codigo: number;
  nome: string;
  preco: number;
}

export function TesteRequisicao() {
  const [produto, setProduto] = useState<ProdutoProps[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then(res => res.json())
      .then(data => {
        setProduto(data);
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
   <section>
    {produto.length === 0 ? (
      <p>Nenhum produto encontrado.</p>
    ) : (
      produto.map(prod => (
        <article key={prod.codigo}>
          <h2>{prod.nome}</h2>
          <p>Código: {prod.codigo}</p>
          <p>Preço: R$ {prod.preco.toFixed(2)}</p>
        </article>
      ))
    )}
  </section>
  )
}