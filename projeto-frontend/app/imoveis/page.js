import Header from '@/components/Header/Header';
import { FaSearch } from 'react-icons/fa';
/*import ResidenceCard from '@/components/ResidenceCard';*/
import './imoveis.css';

const residences = [
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
  {
    image: '',
    price: '$25.000',
    name: 'Aliva Priva Jardim',
    description: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore'
  },
];

export default function ImoveisPage() {
  return (
    <div>
      <Header />
      <main className="innerWidth paddings imoveis-main">
        <div className="imoveis-header-row">
          <div>
            <h1 className="imoveis-title">Encontre o imóvel<br />perfeito para comprar</h1>
            <p className="imoveis-desc">Explore opções selecionadas para você. Nosso time está pronto para te ajudar com cada detalhe.</p>
          </div>
          <div className="imoveis-filter-box">
            <input className="imoveis-filter-input" placeholder="Filtros de Busca" />
            <span className="imoveis-filter-icon"><FaSearch /></span>
          </div>
        </div>
        {/*<div className="imoveis-grid">
          {residences.map((res, idx) => (
           /* <ResidenceCard key={idx} {...res} />
          ))}
        </div>*/}
      </main>
    </div>
  );
} 