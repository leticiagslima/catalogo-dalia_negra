import React, { useState } from 'react';
import './css/App.css';
import Topo from './componentes/topo.jsx';
import Slideshow from './componentes/slideshow.jsx';
import { dadosProdutos } from './dados/dados-produtos.jsx';

function App() {

  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? dadosProdutos
    : dadosProdutos.filter(p => p.categoria === categoriaAtiva);

  return (

    <>
      <Topo />

      <Slideshow />
     

      <nav className="filtros-container">
        <button 
          className={categoriaAtiva === "Todos" ? "active" : ""} 
          onClick={() => setCategoriaAtiva("Todos")}
        >
          Todos os Produtos
        </button>
        
        <button 
          className={categoriaAtiva === "Senhor dos Anéis" ? "active" : ""} 
          onClick={() => setCategoriaAtiva("Senhor dos Anéis")}
        >
          Senhor dos Anéis
        </button>

        <button 
          className={categoriaAtiva === "Harry Potter" ? "active" : ""} 
          onClick={() => setCategoriaAtiva("Harry Potter")}
        >
          Harry Potter
        </button>

        <button 
          className={categoriaAtiva === "Star Wars" ? "active" : ""} 
          onClick={() => setCategoriaAtiva("Star Wars")}
        >
          Star Wars
        </button>

        <button 
          className={categoriaAtiva === "Jogos Vorazes" ? "active" : ""} 
          onClick={() => setCategoriaAtiva("Jogos Vorazes")}
        >
          Jogos Vorazes
        </button>
      </nav>

      <div className="cartoes-container">
        {produtosFiltrados.map((produto) => (
          <div className="cartao" key={produto.id}>
            <img src={produto.foto} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    
    </>

  );
}

export default App;