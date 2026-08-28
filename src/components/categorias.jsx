function Categorias({ filtrarCategoria, categoriaSelecionada }) {
  const categorias = [
    "Todos",
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];

  return (
    <section>
      <h2>Áreas da Loja</h2>

      <select
        value={categoriaSelecionada}
        onChange={(event) => filtrarCategoria(event.target.value)}
      >
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </section>
  );
}

export default Categorias;