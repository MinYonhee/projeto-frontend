import React from 'react';
import './DetalhesImovel.css';

const mockImovel = {
  id: '1',
  titulo: 'Casa Moderna',
  preco: 250000,
  condominio: 1000,
  iptu: 150,
  descricao: `Esta residência é a união entre estilo e sustentabilidade, conforme os conceitos ambientais. Projetada com painéis solares e aquecimento solar, conta ainda com materiais ecológicos, solução de reuso de águas pluviais e sistema de automação inteligente — tudo pensado para reduzir o impacto ambiental e proporcionar mais conforto e economia.`,
  comodos: [
    '3 Quartos (sendo 1 suíte master com varanda ecológica)',
    '2 Banheiros com torneiras de baixo consumo',
    'Sala de Estar ampla e iluminada',
    'Sala de Jantar com integração ao jardim',
    'Cozinha com espaço para compostagem orgânica',
    'Área de Serviço com reaproveitamento de água',
    'Garagem para 2 carros (com ponto de recarga para carro elétrico)',
    'Jardim com paisagismo nativo e horta vertical'
  ],
  imagens: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80'
  ]
};

export default function DetalhesImovel() {
  const imovel = mockImovel;

  return (
    <div>
      <div className="detalhes-bg-wrapper">
        <div className="container">
          <div className="topSection">
            {/* Galeria */}
            <div className="gallery">
              {imovel.imagens.map((img, idx) => (
                <img key={idx} src={img} alt="" />
              ))}
            </div>
            {/* Card de informações */}
            <div className="infoCard">
              <div className="price">R$ {imovel.preco.toLocaleString('pt-BR')}</div>
              <div className="label">Condomínio: R$ {imovel.condominio}/mês</div>
              <div className="label">IPTU: R$ {imovel.iptu}/mês</div>
              <div className="divider"></div>
              {/* Adicione outros detalhes aqui */}
            </div>
          </div>

          <div className="section">
            <h3>Descrição do Imóvel</h3>
            <p>{imovel.descricao}</p>
          </div>

          <div className="section">
            <h3>Cômodos</h3>
            <ul className="comodosList">
              {imovel.comodos.map((comodo, idx) => (
                <li key={idx}>{comodo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  </div>
  );
}