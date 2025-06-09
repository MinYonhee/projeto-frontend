"use client";
import React, { useState } from 'react';
import './OurValue.css'; 

const valores = [
  {
    title: 'Casas que respeitam você e o meio ambiente',
    desc: 'A responsabilidade social e ambiental é um dos pilares que orientam as ações da nossa imobiliária. Nós nos comprometemos a desenvolver e oferecer empreendimentos que respeitem o meio ambiente e promovam o bem-estar das comunidades onde atuamos.'
  },
  {
    title: 'Cada lar pensado com empatia e responsabilidade', 
    desc: 'Nossos lares são mais do que estruturas: são um espaço de cuidado, acolhimento e propósito. Por isso, projetamos cada imóvel com empatia, respeitando as necessidades das pessoas e promovendo bem-estar, com responsabilidade ambiental e social.'
  },
  {
    title: 'Sustentável no presente, inteligente para o futuro', 
    desc: 'Nossos projetos unem soluções ecológicas com inovação. Utilizamos materiais conscientes, tecnologias eficientes e práticas que reduzem o impacto ambiental hoje, enquanto preparamos cada espaço para as necessidades do amanhã.'
  },
];

function ValorCard({ title, desc, isOpen, onClick }) {
  return (
    <button className={`valor-card ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="valor-card-title">{title}</div>
      {isOpen && desc && <div className="valor-card-description">{desc}</div>}
    </button>
  );
}

export default function ValorSection() {
  const [openCardIndex, setOpenCardIndex] = useState(null); 

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index); 
  };

  return (
    <section className="valor-section">
      <div className="valor-info">
        <div className="valor-label">Nosso Valor</div>
        <h1 className="primaryText valor-title">O que nos torna únicos?</h1>
        <p className="valor-desc">A habitação sustentável envolve práticas de construção que utilizam materiais ecológicos, promovem a eficiência energética, e gerenciam de forma responsável o uso de recursos como água e energia. Nossos imóveis são projetados para reduzir o impacto ambiental, proporcionando uma maior qualidade de vida aos moradores e uma menor pegada ecológica.</p>
        <div className="valor-cards">
          {valores.map((v, idx) => (
            <ValorCard 
              key={idx} 
              title={v.title} 
              desc={v.desc}
              isOpen={openCardIndex === idx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
      </div>
      <div className="valor-arch-img">
        <div className="valor-arch" />
      </div>
    </section>
  );
}