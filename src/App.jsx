import { useState } from "react";
import "./App.css";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Categorias from "./components/categorias.jsx";
import ProductCard from "./components/produtocard.jsx";
import produtos from "./data/produtos.js";
import Marcas from "./components/marcas.jsx";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaSelecionada
        );

  function filtrarCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  return (
    <div>
      <Header />

      <main>
        <Categorias
          filtrarCategoria={filtrarCategoria}
          categoriaSelecionada={categoriaSelecionada}
        />

        <section>
          <h2>Produtos</h2>

          <div className="lista-produtos">
            {produtosFiltrados.map((produto) => (
              <ProductCard
                key={produto.id}
                produto={produto}
              />
            ))}
          </div>
        </section>
        <Marcas />
      </main>
      

      <Footer />
    </div>
  );
}

export default App;

