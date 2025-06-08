"use client";
import Header from '@/components/Header/Header';
import { FaSearch } from 'react-icons/fa';
import ResidenceCard from '@/components/ResidenceCard/ResidenceCard';
import './alugar-imovel.css'; 
import React, { useState, useEffect, useCallback } from 'react';
import FilterModal from '@/components/FilterModal/FilterModal';

// Função para gerar mais cards
const generateMoreResidences = (startIndex) => {
  const cities = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília',
    'Curitiba', 'Fortaleza', 'Recife', 'Porto Alegre', 'Manaus'
  ];
  
  const types = ['Apartamento', 'Casa', 'Cobertura', 'Flat', 'Studio'];
  
  return Array.from({ length: 6 }, (_, i) => ({
    image: '',
    price: `R$ ${(Math.random() * 5000 + 1000).toFixed(0)}`,
    name: `${types[Math.floor(Math.random() * types.length)]} em ${cities[Math.floor(Math.random() * cities.length)]}`,
    description: 'Possui condomínio, estacionamento, área de lazer, segurança 24h, piscina, academia e salão de festas.'
  }));
};

const initialResidences = [
  {
    image: '',
    price: 'R$ 2.500',
    name: 'Apartamento em Recife - Pernambuco',
    description: 'Possui condomínio, estacionamentos com carregadores elétricos, piscinas privativas..'
  },
  {
    image: '',
    price: 'R$ 2.800',
    name: 'Apartamento em Ondina - Bahia',
    description: 'Possui duas suites, estacionamento, tetos solares..'
  },
  {
    image: '',
    price: 'R$ 3.200',
    name: 'Casa em Porto Alegre - Rio Grande do Sul',
    description: 'Possui primeiro andar, suites em todos os quartos, estacionamento..'
  },
  {
    image: '',
    price: 'R$ 4.500',
    name: 'Apartamento em Barra da Tijuca - Rio de Janeiro',
    description: 'Possui condomínio, parque, área de lazer, academia..'
  },
  {
    image: '',
    price: 'R$ 1.800',
    name: 'Casa em Tiradentes - Minas Gerais',
    description: 'Possui varanda, área verde em torno da casa, dois quartos..'
  },
  {
    image: '',
    price: 'R$ 3.500',
    name: 'Casa em Vila Nova Conceição - São Paulo',
    description: 'Possui primeiro andar, banheiro aquecida, tetos solares..'
  }
];

export default function AlugarImoveisPage() {
  const [residences, setResidences] = useState(initialResidences);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const openFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleApplyFilter = (filters) => {
    setAppliedFilters(filters);
    closeFilterModal();
  };

  const filteredResidences = residences.filter(res => {
    if (Object.keys(appliedFilters).length === 0) return true;
    
    return Object.entries(appliedFilters).every(([key, value]) => {
      if (key === 'price') {
        const price = parseFloat(res.price.replace(/[^0-9.-]+/g, ''));
        return price <= value;
      }
      return res[key]?.toLowerCase().includes(value.toLowerCase());
    });
  });

  const loadMoreResidences = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const newResidences = generateMoreResidences(residences.length);
      setResidences(prev => [...prev, ...newResidences]);
      setIsLoading(false);
    }, 1000);
  }, [residences.length, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreResidences();
        }
      },
      { threshold: 0.1 }
    );

    const trigger = document.getElementById('load-more-trigger');
    if (trigger) {
      observer.observe(trigger);
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [loadMoreResidences]);

  return (
    <div>
      <Header />
      <main className="innerWidth paddings imoveis-main">
        <div className="imoveis-header-row">
          <div>
            <h1 className="primaryText imoveis-title">Encontre o imóvel<br />perfeito para alugar</h1>
            <p className="imoveis-desc">Explore opções selecionadas para você. Nosso time está pronto para te ajudar com cada detalhe.</p>
          </div>
          <div className="imoveis-filter-box" onClick={openFilterModal}>
            <div className="imoveis-filter-input">
              {Object.keys(appliedFilters).length > 0 ? (
                <div className="filter-option-tag">
                  {Object.entries(appliedFilters).map(([key, value]) => (
                    <span key={key}>
                      {value}
                      <span className="remove-filter" onClick={(e) => {
                        e.stopPropagation();
                        const newFilters = { ...appliedFilters };
                        delete newFilters[key];
                        setAppliedFilters(newFilters);
                      }}>x</span>
                    </span>
                  ))}
                </div>
              ) : (
                <input
                  placeholder="Filtros de Busca"
                  value={filterText}
                  onChange={handleFilterChange}
                  disabled={Object.keys(appliedFilters).length > 0}
                />
              )}
            </div>
            <span className="imoveis-filter-icon"><FaSearch /></span>
          </div>
        </div>
        <div className="imoveis-grid">
          {filteredResidences.map((res, idx) => (
            <ResidenceCard key={idx} {...res} />
          ))}
        </div>
        <div id="load-more-trigger" style={{ height: '20px', margin: '20px 0' }}>
          {isLoading && <div className="loading-spinner">Carregando mais imóveis...</div>}
        </div>
      </main>
      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={closeFilterModal}
        onApplyFilter={handleApplyFilter}
        initialFilters={appliedFilters}
      />
    </div>
  );
} 