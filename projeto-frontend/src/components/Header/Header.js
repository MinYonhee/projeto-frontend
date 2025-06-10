'use client'

import React, { useState, useEffect } from 'react' 
import './Header.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineUserCircle, HiMiniMoon } from "react-icons/hi2";
import { FaSun } from "react-icons/fa";
import { useThemeStore } from '../../../store/themeStore';

const Header = () => {
    const pathname = usePathname();
    const theme = useThemeStore(state => state.theme);
    const toggleTheme = useThemeStore(state => state.toggleTheme);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="assets/logo.png" alt="logo" width={50}/>

                <div className="flexCenter h-menu">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                    <div 
                        className="dropdown-container"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a className={pathname === "/imoveis" ? "active" : ""}>
                            Imóveis
                        </a>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <Link href="/comprar-imovel" className="dropdown-item">
                                    Comprar Imóveis
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/nosso-valor" className={pathname === "/nosso-valor" ? "active" : ""}>Nosso Valor</Link>
                    <Link href="/consultores" className={pathname === "/consultores" ? "active" : ""}>Consultores</Link> 
                    <div className="header-icons-group">
                        <Link href="/cadastro" className="loginIconLink">
                            <HiOutlineUserCircle size={32} className="userIcon" />
                        </Link>
                        <span className="header-icons-separator" />
                        <button className="toggle-theme-btn" onClick={toggleTheme} aria-label="Alternar modo claro/escuro">
                            {theme === 'dark' ? <FaSun size={22} /> : <HiMiniMoon size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
