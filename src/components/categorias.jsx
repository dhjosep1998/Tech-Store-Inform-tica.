function Categorias({ filtrarCategoria, categoriaSelecionada }) {
  const categorias = [
    "Todos",
    "Ficção",
    "Tecnologia",
    "Teologia",
    "História",
    "Desenvolvimento Pessoal",
  ];

  return (
    <section>
      <h2>Categorias</h2>

      <div>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={
              categoriaSelecionada === categoria
                ? "categoria-ativa"
                : ""
            }
            onClick={() => filtrarCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categorias;