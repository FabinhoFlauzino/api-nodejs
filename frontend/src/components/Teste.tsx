import { useEffect, useRef, useState } from "react"

type ProdutoProps = {
  codigo: number;
  nome: string;
  preco: number;
}

export function TesteRequisicao() {
  const ref = useRef<HTMLInputElement>(null)
  const url = "http://localhost:4000"

  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState(0)

  function handleFocus() {
    ref.current?.focus()
  }

  function salvar() {
    const novo = {
      nome,
      preco,
      codigo: new Date().getTime()
    }

    fetch(`${url}/produtos`, {
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

  function buscarPorId(id: string) {
    const produto = fetch(`${url}/produtos/${id}`)
      .then(res => res.json())
      .then(data => {
        setNome(data.nome)
        setPreco(data.preco)
      })
      .catch(error => console.error('Erro ao buscar produto:', error));

      return produto;
  }

  return (
    <section>
      <form>
        <input type="text" ref={ref} value={nome} onChange={e => setNome(e.target.value)} className="border border-gray-500" />
        <input type="number" value={preco} onChange={e => setPreco(Number(e.target.value))} className="border border-gray-500" />
        <button type="button" className="border border-gray-500" onClick={salvar}>Salvar</button>
        <button type="button" className="border border-gray-500" onClick={() => buscarPorId("95b4a310-9da5-4946-9b49-d398dc6e66e9")}>Buscar</button>
        <button type="button" className="border border-gray-500" onClick={handleFocus}>Focus</button>
      </form>
    </section>
  )
}