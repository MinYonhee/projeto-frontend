import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { saveANewContactInHistory } from '@/services/backforappApi';

const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    
    try {
      await saveANewContactInHistory(formValues.fullName, formValues.email, formValues.message)
    } catch (error) {
      alert("Falha ao enviar solicitação de contato")
    }
    
  }

  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Coluna Esquerda - Promo */}
        <div className="footer-promo card-style">
          <h2 className="footer-title">Encontre o imóvel ideal para você</h2>
          <p className="footer-desc">
            Moradias sustentáveis, acessíveis e pensadas para o seu bem-estar. Nossa equipe está pronta para ajudar você a conquistar o seu novo lar com tranquilidade e segurança.
          </p>
          <Link href="/consultores">
            <button className="footer-button">Quero conhecer as opções</button>
          </Link>
        </div>

        {/* Coluna Direita - Contato */}
        <div className="footer-contact card-style">
          <h2 className="footer-title">Fale com a nossa equipe</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text"  name="fullName" placeholder="Nome completo" />
            <input type="email" name="email" placeholder="E-mail" />
            <textarea name="message"  placeholder="Sua mensagem" />
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <div className="footer-links">
          <Link href="/consultores">Contato</Link>
          <a href="#">Política de Privacidade</a>
          <Link href="/nosso-valor">Sobre Nós</Link>
        </div>
        {/* Redes Sociais */}
        <div className="footer-social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;