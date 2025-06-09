'use client';

import React, { useState } from 'react';
import './cadastro.css';
import { LiaUserCircle } from "react-icons/lia";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { registerNewUser } from '@/services/backforappApi';

function SignupPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'O nome é obrigatório.';
    if (!formData.sobrenome) newErrors.sobrenome = 'O sobrenome é obrigatório.';
    if (!formData.email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }
    if (!formData.telefone) newErrors.telefone = 'O telefone é obrigatório.';
    if (!formData.senha) newErrors.senha = 'A senha é obrigatória.';
    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Cadastro válido:', formData);
      await registerNewUser(formData.nome, formData.sobrenome, formData.email, formData.telefone, formData.senha);
      router.push("/");
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="/vercel.svg" alt="logo" className="signup-logo" />
      </div>
      <div className="signup-content">
        <div className="signup-form-container">
          <div className="signup-avatar">
            <LiaUserCircle size={60} />
          </div>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Insira seu nome*"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "input-error" : ""}
                />
                {errors.nome && <span className="error-message">{errors.nome}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                  type="text"
                  name="sobrenome"
                  placeholder="Insira seu sobrenome*"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  className={errors.sobrenome ? "input-error" : ""}
                />
                {errors.sobrenome && <span className="error-message">{errors.sobrenome}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Insira seu e-mail*"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                name="telefone"
                placeholder="Insira seu número de telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={errors.telefone ? "input-error" : ""}
              />
              {errors.telefone && <span className="error-message">{errors.telefone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  placeholder="Informe sua senha*"
                  value={formData.senha}
                  onChange={handleChange}
                  className={errors.senha ? "input-error" : ""}
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.senha && <span className="error-message">{errors.senha}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmarSenha"
                  placeholder="Confirme sua senha*"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  className={errors.confirmarSenha ? "input-error" : ""}
                />
                <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
            </div>

            <button type="submit" className="continue-button">Cadastrar</button>
          </form>

          <div className="form-buttons-group">
            <button className="back-button" onClick={handleBackClick}>Voltar</button>
          </div>
        </div>

        <div className="signup-image-container"></div>
      </div>
    </div>
  );
}

export default SignupPage;
