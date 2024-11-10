"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">
                    <span className="logo-highlight">J</span>averia <span className="logo-highlight">P</span>ortfolio
                </h1>

                <nav className="nav-links">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="project">Projects</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="mobile-menu-button">
                    <button onClick={toggleMobileMenu}>&#9776;</button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="mobile-nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="project">Projects</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
