'use client'

import React, { useState, useEffect } from 'react' 
import './Header.css'
import Link from 'next/link';
import { LiaUserCircle } from "react-icons/lia";
import { usePathname } from 'next/navigation';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const pathname = usePathname();
    // TODO: Implement actual user login status check (e.g., from context or state management)
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder state
    const [showDropdown, setShowDropdown] = useState(false);

    // Example effect to simulate login status change (remove when implementing actual auth)
    // useEffect(() => {
    //   // In a real app, this would check auth status from storage or context
    //   const userIsLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    //   setIsLoggedIn(userIsLoggedIn);
    // }, []);

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="/vercel.svg" alt="logo" width={100} />

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
                                <Link href="/imoveis/alugar" className="dropdown-item">
                                    Alugar Imóveis
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/nosso-valor" className={pathname === "/nosso-valor" ? "active" : ""}>Nosso Valor</Link>
                    <Link href="/consultores" className={pathname === "/consultores" ? "active" : ""}>Consultores</Link> 

                    {/* Conditionally render Login link or User Icon */}
                    {isLoggedIn ? (
                        <Link href="/cadastro">
                            <FaUserCircle size={30} className="userIcon" />
                        </Link>
                    ) : (
                        <Link href="/cadastro" className="loginLink">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Header;
