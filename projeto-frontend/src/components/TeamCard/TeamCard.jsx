"use client";
import { useRef } from 'react';
import './TeamCard.css'; // Import the new equipe.css file

const equipe = [
  {
    nome: 'Beatriz Suelen',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Jansen Okasaki',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Luana Cabral',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Roberta Nascimento',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  }
];

function EquipeCard({ nome, area, desc, image }) {
  return (
    <div className="equipe-card">
      <div className="equipe-card-img">
        {/* Placeholder for circular image */} 
        <div className="equipe-card-img-placeholder"></div>
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
      const scrollAmount = 300; // Adjust this value based on your needs
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
      <p className="equipe-desc">Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.</p>
      <div className="equipe-slider-container">
        <button 
          className="equipe-slider-arrow prev"
          onClick={() => scrollSlider('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div className="equipe-slider" ref={sliderRef}>
          {equipe.map((p, idx) => <EquipeCard key={idx} {...p} />)}
        </div>
        <button 
          className="equipe-slider-arrow next"
          onClick={() => scrollSlider('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
} 