import { useState } from "react";

function FormularioProduto({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("Computadores");

  const categorias = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];

  function aoSalvar(evento) {
    evento.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome: nome,
      marca: marca,
      categoria: categoria,
      preco: Number(preco),
      imagem: imagem,
    };

    adicionarProduto(novoProduto);

    setNome("");
    setMarca("");
    setPreco("");
    setImagem("");
    setCategoria("Computadores");
  }

  return (
    <section className="formulario-produto">
      <form onSubmit={aoSalvar}>
        <h2>Cadastrar Produto</h2>

        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          required
        />

        <label>Marca</label>
        <input
          type="text"
          value={marca}
          onChange={(evento) => setMarca(evento.target.value)}
          required
        />

        <label>Preço</label>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(evento) => setPreco(evento.target.value)}
          required
        />

        <label>Imagem</label>
        <input
          type="text"
          value={imagem}
          onChange={(evento) => setImagem(evento.target.value)}
          placeholder="/imagens/produto.jpg"
          required
        />

        <label>Área</label>
        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        <button type="submit">Adicionar Produto</button>
      </form>
    </section>
  );
}

export default FormularioProduto;