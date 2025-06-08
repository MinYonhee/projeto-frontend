"use client";
import Header from '@/components/Header/Header';
import { FaSearch } from 'react-icons/fa';
import ResidenceCard from '@/components/ResidenceCard/ResidenceCard';
import './comprar-imovel.css'; 
import React, { useState, useEffect, useCallback } from 'react';
import FilterModal from '@/components/FilterModal/FilterModal';
import { useRouter } from 'next/navigation';

// Função para gerar mais cards
const generateMoreResidences = (startIndex) => {
  const cities = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília',
    'Curitiba', 'Fortaleza', 'Recife', 'Porto Alegre', 'Manaus'
  ];
  
  const types = ['Apartamento', 'Casa', 'Cobertura', 'Flat', 'Studio'];
  
  return Array.from({ length: 6 }, (_, i) => ({
    id: startIndex + i + 1,
    image: '/placeholder.jpg',
    price: `$${(Math.random() * 20000 + 5000).toFixed(0)}`,
    title: `${types[Math.floor(Math.random() * types.length)]} em ${cities[Math.floor(Math.random() * cities.length)]}`,
    description: 'Possui condomínio, estacionamento, área de lazer, segurança 24h, piscina, academia e salão de festas.'
  }));
};

const initialResidences = [
  {
    id: 1,
    image: '/placeholder.jpg',
    price: '$15.000',
    title: 'Apartamento em Recife - Pernambuco',
    description: 'Possui condominio, estacionamentos com carregadores elétricos, piscinas privativas..'
  },
  {
    id: 2,
    image: '/placeholder.jpg',
    price: '$14.000',
    title: 'Apartamento em Ondina - Bahia',
    description: 'Possui duas suites, estacionamento, tetos solares..'
  },
  {
    id: 3,
    image: '/placeholder.jpg',
    price: '$15.000',
    title: 'Casa em Porto Alegre - Rio Grande do Sul',
    description: 'Possui primeiro andar, suites em todos os quartos, estacionamento..'
  },
  {
    id: 4,
    image: '/placeholder.jpg',
    price: '$25.000',
    title: 'Apartamento em Barra da Tijuca - Rio de Janeiro',
    description: 'Possui condominio, parque, área de lazer, academia..'
  },
  {
    id: 5,
    image: '/placeholder.jpg',
    price: '$4.500',
    title: 'Casa em Tiradentes - Minas Gerais',
    description: 'Possui varanda, área verde em torno da casa, dois quartos..'
  },
  {
    id: 6,
    image: '/placeholder.jpg',
    price: '$10.000',
    title: 'Casa em Vila Nova Conceição - São Paulo',
    description: 'Possui primeiro andar, banheiro aquecida, tetos solares..'
  },
];

export default function ImoveisPage() {
  const [filterText, setFilterText] = useState('');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [residences, setResidences] = useState(initialResidences);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setAppliedFilters({});
  };

  const openFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  const handleApplyFilter = (filters) => {
    console.log('Applying filters:', filters);
    setAppliedFilters(filters);
    setFilterText('');
  };

  const loadMoreResidences = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    // Simula um delay de carregamento
    setTimeout(() => {
      const newResidences = generateMoreResidences(residences.length);
      setResidences(prev => [...prev, ...newResidences]);
      setIsLoading(false);
      
      // Limita o número total de cards para não sobrecarregar
      if (residences.length >= 30) {
        setHasMore(false);
      }
    }, 1000);
  }, [isLoading, hasMore, residences.length]);

  // Observador de interseção para detectar quando o usuário chega próximo ao final da página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreResidences();
        }
      },
      { threshold: 0.1 }
    );

    const loadMoreTrigger = document.getElementById('load-more-trigger');
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger);
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  }, [loadMoreResidences]);

  const filteredResidences = residences.filter(res => {
    if (Object.keys(appliedFilters).length === 0 && filterText !== '') {
         return res.title.toLowerCase().includes(filterText.toLowerCase()) ||
                res.description.toLowerCase().includes(filterText.toLowerCase());
    }

    let modalMatch = true;

    if (appliedFilters.type && res.type !== appliedFilters.type) {
        modalMatch = false;
    }

    if (modalMatch && appliedFilters.location && !res.location?.toLowerCase().includes(appliedFilters.location.toLowerCase())) {
        modalMatch = false;
    }

    if (modalMatch && appliedFilters.priceRange && !res.price?.includes(appliedFilters.priceRange)) {
         modalMatch = false;
    }

    if (modalMatch && appliedFilters.rooms && res.rooms !== parseInt(appliedFilters.rooms)) {
        modalMatch = false;
    }

    if (modalMatch && appliedFilters.garage && res.garage !== parseInt(appliedFilters.garage)) {
        modalMatch = false;
    }

    return modalMatch;
  });

  return (
    <div>
      <Header />
      <main className="innerWidth paddings imoveis-main">
        <div className="imoveis-header-row">
          <div>
            <h1 className="primaryText imoveis-title">Encontre o imóvel<br />perfeito para comprar</h1>
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
            <div key={res.id} onClick={() => router.push(`/imovel/${res.id}`)} style={{ cursor: 'pointer' }}>
              <ResidenceCard {...res} />
            </div>
          ))}
        </div>
        {hasMore && (
          <div id="load-more-trigger" style={{ height: '20px', margin: '20px 0' }}>
            {isLoading && <div className="loading-spinner">Carregando mais imóveis...</div>}
          </div>
        )}
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