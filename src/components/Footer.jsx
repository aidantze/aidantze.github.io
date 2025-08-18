import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaAddressBook } from 'react-icons/fa'; // Import the icons we need
import '../index.css';

const Footer = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About me', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/work' },
        { name: 'Interests', path: '/interests' },
    ];

    return (
        <footer className="bg-secondary-bg text-subtle-gray py-8 font-montserrat">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    {/* Nav Links */ }
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                        { navLinks.map(link => (
                            <Link key={ link.name } to={ link.path }>
                                <span className="hover:text-primary-text transition-colors duration-300">
                                    { link.name }
                                </span>
                            </Link>
                        )) }
                    </div>

                    {/* Social Links & Slogan */ }
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:opacity-80 transition-opacity duration-300" aria-label="Download my resume">
                                <FaAddressBook className="h-6 w-6 fill-current text-subtle-gray hover:text-primary-text" />
                            </a>
                            <a href="https://github.com/aidantze/projects.github.io" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" aria-label="My GitHub profile">
                                <FaGithub className="h-6 w-6 fill-current text-subtle-gray hover:text-primary-text" />
                            </a>
                            <a href="https://www.linkedin.com/in/aidantze/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" aria-label="My LinkedIn profile">
                                <FaLinkedin className="h-6 w-6 fill-current text-subtle-gray hover:text-primary-text" />
                            </a>
                        </div>
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent-blue transition-colors duration-300">
                            No servers were harmed in the deployment of this project.
                        </a>
                    </div>
                </div>
                <hr className="border-subtle-gray my-6" />
                <p className="text-center text-sm">Last updated: 14 August 2025</p>
            </div>
        </footer>
    );
};

export default Footer;