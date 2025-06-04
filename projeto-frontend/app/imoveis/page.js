"use client";
import Header from '@/components/Header/Header';
import { FaSearch } from 'react-icons/fa';
import ResidenceCard from '@/components/ResidenceCard/ResidenceCard';
import './imoveis.css'; 
import React, { useState } from 'react';
import FilterModal from '@/components/FilterModal/FilterModal';

const residences = [
  {
    image: '',
    price: '$15.000',
    name: 'Apartamento em Recife - Pernambuco',
    description: 'Possui condominio, estacionamentos com carregadores elétricos, piscinas privativas..'
  },
  {
    image: '',
    price: '$14.000',
    name: 'Apartamento em Ondina - Bahia',
    description: 'Possui duas suites, estacionamento, tetos solares..'
  },
  {
    image: '',
    price: '$15.000',
    name: 'Casa em Porto Alegre - Rio Grande do Sul',
    description: 'Possui primeiro andar, suites em todos os quartos, estacionamento..'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Apartamento em Barra da Tijuca - Rio de Janeiro',
    description: 'Possui condominio, parque, área de lazer, academia..'
  },
  {
    image: '',
    price: '$4.500',
    name: 'Casa em Tiradentes - Minas Gerais',
    description: 'Possui varanda, área verde em torno da casa, dois quartos..'
  },
  {
    image: '',
    price: '$10.000',
    name: 'Casa em Vila Nova Conceição - São Paulo',
    description: 'Possui primeiro andar, banheiro aquecida, tetos solares..'
  },
];

export default function ImoveisPage() {
  const [filterText, setFilterText] = useState('');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

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

  const filteredResidences = residences.filter(res => {
    if (Object.keys(appliedFilters).length === 0 && filterText !== '') {
         return res.name.toLowerCase().includes(filterText.toLowerCase()) ||
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
           <ResidenceCard key={idx} {...res} />
          ))}
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