import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-primary-bg min-h-screen flex flex-col font-inter">
            <Header />
            <main className="flex-grow">
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;