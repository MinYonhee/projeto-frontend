'use client';

import React, { useState } from 'react';
import './login.css';
import { LiaUserCircle } from 'react-icons/lia';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'O e-mail é obrigatório.';
    else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) newErrors.email = 'Informe um e-mail válido.';
    if (!password) newErrors.password = 'A senha é obrigatória.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulário válido', email, password);
    } else {
      console.log('Formulário inválido', errors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="logo"
          className="login-logo"
        />
      </div>
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-avatar">
            <LiaUserCircle size={60} />
          </div>
          <h2>Acesse sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Informe seu endereço de e-mail*"
                value={email}
                onChange={handleEmailChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Informe sua senha*"
                  value={password}
                  onChange={handlePasswordChange}
                  className={errors.password ? 'input-error' : ''}
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <a href="#" className="forgot-password-link" onClick={() => alert('Recuperação de senha ainda não implementada.')}>
              Esqueci a senha
            </a>
            <button type="submit" className="continue-button">
              Continuar
            </button>
          </form>
          <div className="form-buttons-group">
            <button className="back-button" onClick={() => router.back()}>
              Voltar
            </button>
          </div>
        </div>
        <div className="login-image-container"></div>
      </div>
    </div>
  );
}

export default LoginPage;
