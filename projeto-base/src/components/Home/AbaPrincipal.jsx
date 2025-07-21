import './index.css'
import { FaInstagram,FaRegEnvelope,FaFacebookSquare } from "react-icons/fa";

export function AbaPrincipal(){
    return(
        <>
        <div className="container">
        <header>
            <div className="cabecalho">
            <img src="src/assets/e66b6fdbd5f365cefc42b9c4f4cb976eb0d9380e.png" alt="" />
            <h1>Contatos</h1>
            <p><FaInstagram/> Instagram</p>
            <p><FaRegEnvelope/> Email</p>
            <p><FaFacebookSquare/> Facebook</p>
            </div>

            <div className="navbar">
            <nav>
                <ul>
                  <li>Nossos serviços</li>
                  <li>Sobre nós</li>
                  <li>Digite seu cep</li>
                </ul>
              </nav>
            </div>
        </header>

        <main>
            <h1>Catálogo</h1>
             <button>Filtro</button>

             <div className="produtos">
                <div id="prod1">Produto 1</div>
                <div id="prod2">Produto 2</div>
                <div id="prod3">Produto 3</div>
                <div id="prod4">Produto 4</div>
                <div id="prod5">Produto 5</div>
                <div id="prod6">Produto 6</div>
             </div>
        </main>
        </div>
        </>
    )
}
