  if (!isVisible) return null;

  return (
    <div className="filter-modal-overlay" onClick={onClose}>
      <div className="filter-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="filter-section">
          <h4>Tipo de imóvel</h4>
          {selectedFilters.type && (
            <div className="filter-option-tag">
              {selectedFilters.type}
              <span className="remove-filter" onClick={() => handleTagRemove('type')}>x</span>
            </div>
          )}
          <input
            type="text"
            placeholder="Selecionar tipo"
            value={selectedFilters.type || ''}
            onChange={(e) => handleInputChange('type', e.target.value)}
          />
        </div>

        <div className="filter-section">
          <h4>Localização</h4>
          {selectedFilters.location && (
            <div className="filter-option-tag">
              {selectedFilters.location}
              <span className="remove-filter" onClick={() => handleTagRemove('location')}>x</span>
            </div>
          )}
          <input
            type="text"
            placeholder="Selecionar localização"
            value={selectedFilters.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>

        <div className="filter-section">
          <h4>Faixa de preço</h4>
          {selectedFilters.priceRange && (
            <div className="filter-option-tag">
              {selectedFilters.priceRange}
              <span className="remove-filter" onClick={() => handleTagRemove('priceRange')}>x</span>
            </div>
          )}
          <input
            type="text"
            placeholder="Selecionar faixa de preço"
            value={selectedFilters.priceRange || ''}
            onChange={(e) => handleInputChange('priceRange', e.target.value)}
          />
        </div>

        <div className="filter-row">
          <div className="filter-section">
            <h4>Número de Quartos</h4>
            {selectedFilters.rooms && (
              <div className="filter-option-tag">
                {selectedFilters.rooms}
                <span className="remove-filter" onClick={() => handleTagRemove('rooms')}>x</span>
              </div>
            )}
            <input
              type="text"
              placeholder="Selecionar número de quartos"
              value={selectedFilters.rooms || ''}
              onChange={(e) => handleInputChange('rooms', e.target.value)}
            />
          </div>

          <div className="filter-section">
            <h4>Vagas na Garagem</h4>
            {selectedFilters.garage && (
              <div className="filter-option-tag">
                {selectedFilters.garage}
                <span className="remove-filter" onClick={() => handleTagRemove('garage')}>x</span>
              </div>
            )}
            <input
              type="text"
              placeholder="Selecionar vagas"
              value={selectedFilters.garage || ''}
              onChange={(e) => handleInputChange('garage', e.target.value)}
            />
          </div>
        </div>

        <div className="filter-actions">
          <button className="remove-button" onClick={handleRemoveAllClick}>Remover</button>
          <button className="filter-button" onClick={handleApplyClick}>Filtrar</button>
        </div>
      </div>
    </div>
  );
} 