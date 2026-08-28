import { useState } from "react";
import "./App.css";

import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Categorias from "./components/categorias.jsx";
import ProductCard from "./components/produtocard.jsx";
import Marcas from "./components/marcas.jsx";
import FormularioProduto from "./components/FormularioProduto.jsx";

import produtosIniciais from "./data/produtos.js";

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todos");

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) =>
            produto.categoria === categoriaSelecionada
        );

  function filtrarCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  function adicionarProduto(novoProduto) {
    setProdutos([...produtos, novoProduto]);
  }

  return (
    <div>
      <Header />

      <main>
        <FormularioProduto
          adicionarProduto={adicionarProduto}
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

        <Categorias
          filtrarCategoria={filtrarCategoria}
          categoriaSelecionada={categoriaSelecionada}
        />

        <Marcas />
      </main>

      <Footer />
    </div>
  );
}

export default App;