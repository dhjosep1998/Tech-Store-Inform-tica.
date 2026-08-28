function Marcas() {
  const marcas = [
    "Lenovo",
    "Logitech",
    "Redragon",
    "Kingston",
    "LG",
  ];

  return (
    <section className="marcas">
      <h2>Marcas em destaque</h2>

      <div className="lista-marcas">
        {marcas.map((marca) => (
          <div className="marca-card" key={marca}>
            {marca}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marcas;