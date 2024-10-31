"use client"

import logoMenu from "@/app/img/Logo-nav.png";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DivNavs } from "../styled";

export default function Menu() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <>
            <DivNavs>
                <div className="Nav_Celular">
                    <nav>
                        <div className="menu-hamburger">
                            <Link href="/"><Image id="logocarro" src={logoMenu} alt="logo" className="mostrar" /></Link>
                            <button
                                id="hamburger-menu"
                                className="hamburger"
                                onClick={toggleMenu}
                            >
                                ☰
                            </button>
                        </div>
                        <ul
                            id="nav-links"
                            className={`nav-links ${menuActive ? 'active' : ''}`}
                        >
                            <button
                                id="close-menu"
                                className="close-menu"
                                onClick={closeMenu}
                            >
                                ✖
                            </button>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/chatbot'>ChatBot</Link></li>
                            <li><Link href='/sobre-nos'>Sobre Nós</Link></li>
                            <li><Link href='/usuario/login'>Login</Link></li>
                            <li><Link href='/carro/cad-carro'>Cadastrar Carro</Link></li>

                        </ul>
                    </nav>
                </div>

                <nav className="NavHome">
                    <Link href="/"><Image className="logo" src={logoMenu} alt="logo" /></Link>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/chatbot'>ChatBot</Link></li>
                        <li><Link href='/sobre-nos'>Sobre Nós</Link></li>
                        <li><Link href='/usuario/login'>Login</Link></li>
                        <li><Link href='/carro/cad-carro'>Cadastrar Carro</Link></li>
                    </ul>
                </nav>
            </DivNavs>
        </>
    );
}
