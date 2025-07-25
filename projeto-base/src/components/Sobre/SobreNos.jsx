// src/components/SobreNos/SobreNos.js
import React from 'react';
import './SobreNos.css'; // Importando o arquivo CSS

// Você pode criar um array de membros da equipe para ser mais dinâmico
const equipe = [
  {
    nome: 'Nome do Fundador 1',
    cargo: 'CEO & Fundador',
    imagem: 'https://via.placeholder.com/150' // Substitua pela URL da imagem real
  },
  {
    nome: 'Nome do Membro 2',
    cargo: 'Diretor de Operações',
    imagem: 'https://via.placeholder.com/150'
  },
  {
    nome: 'Nome do Membro 3',
    cargo: 'Líder de Tecnologia',
    imagem: 'https://via.placeholder.com/150'
  }
];

export function SobreNos() {
  return (
    <div className="sobre-nos-container">
      
      {/* Seção Principal (Hero) */}
      <section className="hero-sobre">
        <h1>Conheça a Nossa História</h1>
        <p className="subtitulo">Somos apaixonados por inovação e dedicados a entregar as melhores soluções para nossos clientes.</p>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <section className="missao-visao-valores">
        <article className="card-mvv">
          <h3>Missão</h3>
          <p>Nossa missão é resolver problemas complexos com tecnologia de ponta, facilitando a vida das pessoas e o crescimento de negócios.</p>
        </article>
        <article className="card-mvv">
          <h3>Visão</h3>
          <p>Ser a empresa referência em nosso setor, reconhecida pela excelência, inovação e por nosso impacto positivo na comunidade.</p>
        </article>
        <article className="card-mvv">
          <h3>Valores</h3>
          <ul>
            <li>Compromisso com o cliente</li>
            <li>Inovação constante</li>
            <li>Integridade e Transparência</li>
            <li>Trabalho em equipe</li>
          </ul>
        </article>
      </section>

      {/* Seção da Equipe */}
      <section className="nossa-equipe">
        <h2>Nossa Equipe</h2>
        <div className="equipe-grid">
          {equipe.map((membro, index) => (
            <div key={index} className="membro-card">
              <img src={membro.imagem} alt={`Foto de ${membro.nome}`} />
              <h3>{membro.nome}</h3>
              <p>{membro.cargo}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Seção de Chamada para Ação (Call to Action) */}
      <section className="cta-sobre">
        <h2>Gostou do que viu?</h2>
        <p>Entre em contato conosco e descubra como podemos ajudar seu negócio.</p>
        <button className="cta-button">Fale Conosco</button>
      </section>

    </div>
  );
}