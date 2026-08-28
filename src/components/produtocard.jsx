function ProductCard({ produto }) {
  return (
    <div className="product-card">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="product-card-image"
      />

      <h3>{produto.nome}</h3>

      <p>Marca: {produto.marca}</p>

      <p>Categoria: {produto.categoria}</p>

      <strong>
        R$ {produto.preco.toFixed(2)}
      </strong>
    </div>
  );
}

export default ProductCard;