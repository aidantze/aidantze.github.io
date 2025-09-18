import React, { useEffect } from 'react';

const VirtualPage = () => {
    useEffect(() => {
        // Redirect to the external GitHub portfolio
        window.location.replace("https://github.com/aidantze/projects.github.io");
    }, []);

    return (
        <div className="bg-primary-bg min-h-screen flex items-center justify-center md:text-4xl font-montserrat font-bold text-primary-text">
            <h3>Redirecting to Virtual Experiences Page...</h3>
        </div>
    );
};

export default VirtualPage;