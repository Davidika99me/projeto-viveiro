import './index.css';
import { FaInstagram, FaRegEnvelope, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'; // IMPORTAÇÃO CORRETA aqui no topo

export function AbaPrincipal() {
  const descricoes = {
    prod1: 'Descrição detalhada do Produto 1',
    prod2: 'Descrição detalhada do Produto 2',
    prod3: 'Descrição detalhada do Produto 3',
    prod4: 'Descrição detalhada do Produto 4',
    prod5: 'Descrição detalhada do Produto 5',
    prod6: 'Descrição detalhada do Produto 6',
  };

  return (
    <>
      <div className="container">
        <header>
          <div className="cabecalho">
            <img src="src/assets/e66b6fdbd5f365cefc42b9c4f4cb976eb0d9380e.png" alt="Logo" />
            <h1>Contatos</h1>
            <p><FaInstagram /> Instagram</p>
            <p><FaRegEnvelope /> Email</p>
            <p><FaFacebookSquare /> Facebook</p>
          </div>

          <nav>
            <ul>
              <li><Link to="/trabalho">Nosso Trabalho</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/">Início</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <h1>Catálogo</h1>
          <button>Filtro</button>

          <div className="produtos">
            {Object.entries(descricoes).map(([id, desc]) => (
              <div key={id} className="card">
                <div className="card-titulo">{id.replace('prod', 'Produto ')}</div>
                <div className="card-descricao">{desc}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
