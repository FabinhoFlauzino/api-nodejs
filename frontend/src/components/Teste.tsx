import { useEffect, useState } from "react"

type ProdutoProps = {
  codigo: number;
  nome: string;
  preco: number;
}

export function TesteRequisicao() {

  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState(0)

  function salvar() {
    const novo = {
      nome,
      preco,
      codigo: new Date().getTime()
    }

    fetch("http://localhost:4000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo)
    }).then(() => {
      setNome("");
      setPreco(0);
    }).catch(error => console.error('Erro ao salvar produto:', error));
  }

  return (
    <section>
      <form>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="border border-gray-500" />
        <input type="number" value={preco} onChange={e => setPreco(Number(e.target.value))} className="border border-gray-500" />
        <button type="button" className="border border-gray-500" onClick={salvar}>Salvar</button>
      </form>
    </section>
  )
}