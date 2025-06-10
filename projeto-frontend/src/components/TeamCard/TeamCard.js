"use client";
import { useRef } from 'react';
import './TeamCard.css'; 

const equipe = [
  {
    nome: 'Beatriz Costa',
    area: 'Área - Full-Stack',
    desc: 'Estudante de Sistemas para Internet, Publicitária e Técnica em Jogos Digitais.',
    image: '/assets/beatriz.jpeg'
  },
  {
    nome: 'Jansen Okasaki',
    area: 'Área - FullStack',
    desc: 'Estudante do curso de Sistemas para Internet e amante da tecnologia.',
    image: '/assets/jansen.jpeg'
  },
  {
    nome: 'Luana Cabral',
    area: 'Área - FrontEnd',
    desc: 'Estudante de Sistemas para Internet, entusiasta de dados, automação e soluções digitais.',
    image: '/assets/luana.jpeg'
  },
  {
    nome: 'Roberta Nascimento',
    area: 'Área - Designer e FullStack',
    desc: 'Estudante de Sistemas para Internet, determinada e resiliente.',
    image: '/assets/roberta.jpeg'
  }
];

function EquipeCard({ nome, area, desc, image }) {
  return (
    <div className="equipe-card">
      <div className="equipe-card-img">
        {image && image.trim() !== ""
          ? <img src={image} alt={nome} className="equipe-card-avatar" />
          : <div className="equipe-card-img-placeholder"></div>
        }
      </div>

      <div className="equipe-card-body">
        <div className="equipe-card-area">{area}</div>
        <div className="equipe-card-nome">{nome}</div>
        <div className="equipe-card-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function EquipeSection() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; 
      const currentScroll = sliderRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="equipe-section">
      <div className="equipe-label">Nossa Equipe</div>
      <h2 className="equipe-title">Nossos Desenvolvedores</h2>
      <p className="equipe-desc">Somos o time de desenvolvedores responsáveis por tornar este projeto realidade.<br /> Trabalhamos com foco em qualidade, usabilidade e performance, combinando boas práticas de desenvolvimento com criatividade, sustentabilidade e dedicação. Tudo foi desenvolvido com atenção aos detalhes, pensando em oferecer a melhor experiência para você.</p>
      <div className="equipe-slider-container">
        
        {/* Botão de navegação esquerda desativado */}
        {/*
        <button 
          className="equipe-slider-arrow prev"
          onClick={() => scrollSlider('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        */}

        <div className="equipe-slider" ref={sliderRef}>
          {equipe.map((p, idx) => <EquipeCard key={idx} {...p} />)}
        </div>

        {/* Botão de navegação direita desativado */}
        {/*
        <button 
          className="equipe-slider-arrow next"
          onClick={() => scrollSlider('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        */}
        
      </div>
    </section>
  );
}
