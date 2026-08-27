function Editoras() {
  const editoras = [
    "HarperCollins",
    "Alta Books",
    "Companhia das Letras",
    "Thomas Nelson Brasil",
    "Intrínseca",
  ];

  return (
    <section className="editoras">
      <h2>Editoras em destaque</h2>

      <div className="lista-editoras">
        {editoras.map((editora) => (
          <div className="editora-card" key={editora}>
            {editora}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Editoras;