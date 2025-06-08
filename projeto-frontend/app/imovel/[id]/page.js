"use client";
import { useParams } from "next/navigation";
import { FaCheckCircle } from 'react-icons/fa';
import Header from "@/components/Header/Header";
import React from 'react';
import './DetalhesImovel.css';
import { useRouter } from "next/navigation";
import ResidenceCard from "@/components/ResidenceCard/ResidenceCard";

const mockImoveis = [
  {
    id: 1,
    title: "Casa moderna com jardim ecológico",
    price: "R$ 250.000",
    condominio: "R$ 1000 / mês",
    iptu: "R$ 156 / mês",
    images: [
      "/casa1.jpg",
      "/sala1.jpg",
      "/cozinha1.jpg",
      "/banheiro1.jpg",
      "/quarto1.jpg",
      "/area1.jpg"
    ],
    descricao: `Esta residência é a união perfeita entre sofisticação, conforto e consciência ambiental. Projetada com princípios de arquitetura sustentável, ela conta com materiais ecológicos, solução de eficiência energética e integração com o jardim externo — tudo pensado para reduzir o impacto ambiental e proporcionar bem-estar aos moradores.\n\nAmbientes amplos, iluminação natural abundante e ventilação cruzada. O imóvel proporciona experiências únicas de convivência, com espaços integrados entre sala de estar, jantar e varanda. O jardim com paisagismo nativo e horta vertical complementa o cenário de tranquilidade.\n\nDestaque para o sistema de captação e reaproveitamento de água da chuva e os diferenciais que tornam o imóvel um verdadeiro oásis urbano.`,
    comodos: [
      "3 Quartos (sendo 1 suíte master com varanda ecológica)",
      "2 Banheiros com torneiras de baixo consumo",
      "Sala de Estar ampla e iluminada",
      "Sala de Jantar com integração ao jardim",
      "Cozinha com espaço para compostagem orgânica",
      "Área de Serviço com reaproveitamento de água",
      "Garagem para 2 carros (com ponto de recarga para carro elétrico)",
      "Jardim com paisagismo nativo e horta vertical"
    ]
  },
  {
    id: 2,
    title: "Apartamento em Ondina - Bahia",
    price: "R$ 140.000",
    condominio: "R$ 800 / mês",
    iptu: "R$ 120 / mês",
    images: [
      "/sala1.jpg",
      "/cozinha1.jpg",
      "/banheiro1.jpg",
      "/quarto1.jpg",
      "/area1.jpg",
      "/casa1.jpg"
    ],
    descricao: `Apartamento com duas suítes, estacionamento, tetos solares e vista para o mar.`,
    comodos: [
      "2 Suítes",
      "Estacionamento",
      "Tetos solares",
      "Vista para o mar"
    ]
  },
  {
    id: 3,
    title: "Casa em Porto Alegre - Rio Grande do Sul",
    price: "R$ 150.000",
    condominio: "R$ 900 / mês",
    iptu: "R$ 130 / mês",
    images: [
      "/cozinha1.jpg",
      "/banheiro1.jpg",
      "/quarto1.jpg",
      "/area1.jpg",
      "/casa1.jpg",
      "/sala1.jpg"
    ],
    descricao: `Casa com primeiro andar, suítes em todos os quartos, estacionamento amplo.`,
    comodos: [
      "3 Suítes",
      "Estacionamento amplo",
      "Primeiro andar"
    ]
  },
  {
    id: 4,
    title: "Apartamento em Barra da Tijuca - Rio de Janeiro",
    price: "R$ 250.000",
    condominio: "R$ 1200 / mês",
    iptu: "R$ 200 / mês",
    images: [
      "/banheiro1.jpg",
      "/quarto1.jpg",
      "/area1.jpg",
      "/casa1.jpg",
      "/sala1.jpg",
      "/cozinha1.jpg"
    ],
    descricao: `Apartamento com condomínio, parque, área de lazer e academia.`,
    comodos: [
      "Condomínio",
      "Parque",
      "Área de lazer",
      "Academia"
    ]
  },
  {
    id: 5,
    title: "Casa em Tiradentes - Minas Gerais",
    price: "R$ 45.000",
    condominio: "R$ 400 / mês",
    iptu: "R$ 80 / mês",
    images: [
      "/quarto1.jpg",
      "/area1.jpg",
      "/casa1.jpg",
      "/sala1.jpg",
      "/cozinha1.jpg",
      "/banheiro1.jpg"
    ],
    descricao: `Casa com varanda, área verde em torno da casa, dois quartos.`,
    comodos: [
      "Varanda",
      "Área verde",
      "Dois quartos"
    ]
  },
  {
    id: 6,
    title: "Casa em Vila Nova Conceição - São Paulo",
    price: "R$ 100.000",
    condominio: "R$ 700 / mês",
    iptu: "R$ 110 / mês",
    images: [
      "/area1.jpg",
      "/casa1.jpg",
      "/sala1.jpg",
      "/cozinha1.jpg",
      "/banheiro1.jpg",
      "/quarto1.jpg"
    ],
    descricao: `Casa com primeiro andar, banheiro aquecido, tetos solares.`,
    comodos: [
      "Primeiro andar",
      "Banheiro aquecido",
      "Tetos solares"
    ]
  },
];

export default function ImovelDetalhePage() {
  const { id } = useParams();
  const imovel = mockImoveis.find(imv => String(imv.id) === String(id)) || mockImoveis[0];
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="detalhes-bg-wrapper">
        <main className="detalhes-container">
          <div className="detalhes-top">
            {/* Galeria de imagens */}
            <div className="detalhes-galeria">
              <div className="detalhes-galeria-grid">
                {imovel.images.map((img, idx) => (
                  <img key={idx} src={img} alt="Foto do imóvel" />
                ))}
              </div>
            </div>
            {/* Card de preço e info */}
            <div className="detalhes-info">
              <div className="detalhes-info-card">
                <h2 className="detalhes-preco">{imovel.price}</h2>
                <div className="detalhes-label">Condomínio <span style={{ float: 'right' }}>{imovel.condominio}</span></div>
                <div className="detalhes-label">IPTU <span style={{ float: 'right' }}>{imovel.iptu}</span></div>
                <div className="detalhes-financiamento"><FaCheckCircle style={{ marginRight: 6 }} /> Simular Financiamento</div>
                <button className="detalhes-botao">Entrar em contato com um consultor</button>
              </div>
            </div>
          </div>
          {/* Descrição */}
          <div className="detalhes-section">
            <h3>Descrição do Imóvel</h3>
            <p className="detalhes-descricao">{imovel.descricao}</p>
          </div>
          {/* Cômodos */}
          <div className="detalhes-section">
            <h3>Cômodos</h3>
            <ul className="detalhes-comodos-list">
              {imovel.comodos.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}