import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaAddressBook, FaYoutube } from 'react-icons/fa'; // Added FaAddressBook
import '../index.css';

const Footer = () => {
    return (
        <footer className="bg-secondary-bg text-subtle-gray py-8">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    {/* Left side: Page Links */ }
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
                        <Link to="/" className="hover:text-primary-text transition-colors duration-300">Home</Link>
                        <Link to="/about" className="hover:text-primary-text transition-colors duration-300">About me</Link>
                        <Link to="/projects" className="hover:text-primary-text transition-colors duration-300">Projects</Link>
                        <Link to="/work" className="hover:text-primary-text transition-colors duration-300">Experience</Link>
                        <Link to="/interests" className="hover:text-primary-text transition-colors duration-300">Interests</Link>
                    </div>

                    {/* Right side: Social and other links */ }
                    <div className="flex flex-col items-center gap-y-4">
                        <div className="flex items-center gap-x-6 text-2xl">
                            {/* Resume Download Icon/Link */ }
                            <a
                                href="/resume.pdf"
                                download="aidantze_resume.pdf"
                                className="hover:text-primary-text transition-colors duration-300"
                                aria-label="Download my resume"
                            >
                                <FaAddressBook />
                            </a>
                            <a href="https://github.com/aidantze/projects.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors duration-300" aria-label="My GitHub profile">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/aidantze/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors duration-300" aria-label="My LinkedIn profile">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors duration-300" aria-label="Youtube link">
                                <FaYoutube />
                            </a>
                        </div>
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer" className="hover:text-primary-text transition-colors duration-300" aria-label="Easter egg link">
                            <p className="text-sm">No servers were harmed in the deployment of this project.</p>
                        </a>

                    </div>
                </div>

                <hr className="border-subtle-gray my-6" />
                <p className="text-center text-sm">Last updated: 8 Sept 2025</p>
            </div>
        </footer>
    );
};

export default Footer;