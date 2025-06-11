"use client"

import Header from '@/components/Header/Header';
import '@/components/TeamCard/TeamCard.css';
import { getAllConsultants } from '@/services/backforappApi';
import { useEffect, useState } from 'react';

const consultores = [
  {
    nome: 'Joyce Alane',
    area: 'Contato',
    desc: '(81) 99454-6495',
    image: '/assets/joyce.jpeg',
  },
  {
    nome: 'João Vitor',
    area: 'Contato',
    desc: '(81) 99999-1234',
    image: '/assets/joao.jpeg',
  },
  {
    nome: 'Pedro Tófani',
    area: 'Contato',
    desc: '(51) 99824-1302',
    image: '/assets/pedro.jpeg',
  },
  {
    nome: 'Marina Lima',
    area: 'Contato',
    desc: '(11) 98578-0305',
    image: '/assets/marina.jpeg',
  },
  {
    nome: 'Larissa Machado',
    area: 'Contato',
    desc: '(83) 99954-2321',
    image: '/assets/larissa.jpeg',
  },
  {
    nome: 'Vanessa Rangel',
    area: 'Contato',
    desc: '(85) 99032-5443',
    image: '/assets/vanessa.jpeg',
  },
];


export default function ConsultoresPage() {
  const [consultants, setConsultants] = useState(null);

  const handleFetchAllConsultants = async () => {
    const result = await getAllConsultants();
    setConsultants(result.data.results);
  }

  useEffect(() => {
    handleFetchAllConsultants();
  }, [])

  return (
    <>
      <Header />
      <main className="innerWidth paddings valor-main">
        <section className="section_one">
          <h1 className="equipe-title">Converse com um<br />especialista</h1>
          <p className="equipe-desc">
            Nosso time está aqui para entender sua necessidade e te apresentar as melhores opções.
          </p>
        </section>

        <section className="section_two">
          <h1 className="equipe-title">Setor de Vendas</h1>

          <div className="consultores-grid">
            {consultants && consultants.map((p, i) => (
              <div key={i} className="equipe-card">
                <div className="equipe-card-img">
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} className="equipe-card-avatar" />
                  ) : (
                    <div className="equipe-card-img-placeholder"></div>
                  )}
                </div>
                <div className="equipe-card-body">
                  <div className="equipe-card-area">Contato</div>
                  <div className="equipe-card-nome">{p.name}</div>
                  <div className="equipe-card-desc">{p.contact}</div>
                </div>
              </div>
            ))} 
            {consultants == null && (
              <p>Nenhum consultor encontrado</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
