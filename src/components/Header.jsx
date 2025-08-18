import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const navLinks = [
    { name: 'About me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/work' },
    { name: 'Interests', path: '/interests' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const hamburgerIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    );

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <header className={ `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }` }>
            <nav className="bg-secondary-bg shadow-lg p-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
                    <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755045932/mylogoupscale_wsqkix.png"
                            alt="aidantze's profile pic"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-xl font-montserrat font-semibold text-primary-text">
                        aidantze's portfolio
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-6 ml-10 font-montserrat">
                    { navLinks.map((link) => (
                        <Link key={ link.name } to={ link.path }>
                            <span className="text-primary-text hover:text-accent-blue transition-colors duration-300">
                                { link.name }
                            </span>
                        </Link>
                    )) }
                </div>

                {/* Mobile Menu Button */ }
                <div className="md:hidden">
                    <button onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) } className="text-primary-text">
                        { isMobileMenuOpen ? closeIcon : hamburgerIcon }
                    </button>
                </div>

                {/* Mobile Dropdown Menu */ }
                { isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full right-0 w-full bg-secondary-bg shadow-lg">
                        <ul className="flex flex-col items-center py-4 font-montserrat">
                            { navLinks.map((link) => (
                                <li key={ link.name } className="py-2">
                                    <Link to={ link.path } onClick={ () => setIsMobileMenuOpen(false) }>
                                        <span className="text-primary-text hover:text-accent-blue transition-colors duration-300">
                                            { link.name }
                                        </span>
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                ) }
            </nav>
        </header>
    );
};

export default Header;