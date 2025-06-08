"use client";
import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Dados das estatísticas
const heroStats = [
  { number: '9.000+', label: 'Clientes<br/>satisfeitos' },
  { number: '4.000+', label: 'Casas<br/>e apartamentos<br/>vendidos' },
  { number: '10+', label: 'Impactos<br/>ambientais<br/> reduzidos' },
];

// Dados dos cards da segunda seção
const optionCards = [
  {
    title: "Casas em Condomínios Fechados",
    desc: "Ideal para quem busca segurança e convivência comunitária com valores acessíveis. Uma ótima escolha para famílias.",
  },
  {
    title: "Apartamentos Compactos e Funcionais",
    desc: "Projetados para otimizar o espaço e oferecer conforto. Perfeitos para solteiros, casais ou pequenas famílias que buscam praticidade e sustentabilidade.",
  },
  {
    title: "Residências Sustentáveis",
    desc: "Imóveis com soluções ecológicas, energia renovável e materiais de baixo impacto ambiental. Uma escolha consciente para o futuro.",
  },
];

// Componente de número animado
const AnimatedNumber = ({ finalNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = parseInt(finalNumber.replace(/\+|\.|,/g, ''));
  const isDecimal = finalNumber.includes('.');
  const isPlus = finalNumber.includes('+');

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      let animatedValue = progress * targetNumber;

      if (isDecimal) {
        animatedValue = Math.floor(animatedValue * 10) / 10;
      } else {
        animatedValue = Math.floor(animatedValue);
      }

      setCurrentNumber(animatedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (isPlus) {
        setCurrentNumber(`${targetNumber}+`);
      }
    };

    requestAnimationFrame(animate);
  }, [finalNumber, targetNumber, isDecimal, isPlus]);

  const formattedNumber =
    typeof currentNumber === 'number'
      ? currentNumber.toLocaleString('pt-BR')
      : currentNumber;

  return <span>{formattedNumber}</span>;
};

// Componente reutilizável dos cards expansíveis
const OptionCard = ({ title, desc, isOpen, onClick }) => (
  <button className={`option-card ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <h2>{title}</h2>
    {isOpen && <p>{desc}</p>}
  </button>
);

// Componente principal Hero
const Hero = () => {
  const [openOptionCardIndex, setOpenOptionCardIndex] = useState(null);

  const handleOptionCardClick = (index) => {
    setOpenOptionCardIndex(openOptionCardIndex === index ? null : index);
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* Texto à esquerda */}
        <div className="hero-text">
          <h1 className="hero-title">
            Moradias sustentáveis e <br />
            acessíveis que mudam <br />
            vidas.
          </h1>
          <p className="hero-desc">
            Possuímos uma proposta de imobiliária focada em habitação <br/> sustentável e acessível que busca atender a demanda crescente por <br/> imóveis que não só respeitem o meio ambiente, mas também sejam <br/> viáveis para diferentes camadas sociais.
          </p>
          {/* Campo de busca */}
          <div className="hero-search">
            <div className="location-box">
              <FaMapMarkerAlt size={32} color="#769080" />
            </div>
            <input type="text" placeholder="Digite a localização" />
            <div>
              <button className="search-button">Busque Aqui</button>
            </div>
          </div>
          {/* Estatísticas */}
          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <div className="hero-stat" key={index}>
                <span className="hero-stat-number">
                  <AnimatedNumber finalNumber={stat.number} />
                </span>
                <span
                className="hero-stat-label"
                dangerouslySetInnerHTML={{ __html: stat.label }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segunda Seção */}
      <div className="hero-container new-section">
        {/* Imagem à esquerda */}
        <div className="hero-left-image">
          {/* Placeholder para imagem da casa */}
        </div>

        {/* Conteúdo à direita */}
        <div className="hero-right-content">
          <span className="hero-subtitle">Melhores Escolhas</span>
          <h1 className="hero-title second-section">Residências Populares</h1>
          <p className="hero-desc second-section">
            Nossa seleção de residências populares foi pensada para quem<br />
            procura economia sem abrir mão do bem estar e da sustentabilidade. <br/> São imóveis com ótimo custo benefício, construídos com<br />
            responsabilidade e em comunidades planejadas para crescer de<br />
            forma inteligente.
          </p>

          {/* Cards interativos */}
          <div className="hero-options-cards">
            {optionCards.map((card, index) => (
              <OptionCard
                key={index}
                title={card.title}
                desc={card.desc}
                isOpen={openOptionCardIndex === index}
                onClick={() => handleOptionCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
