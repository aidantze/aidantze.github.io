import React, { useEffect } from 'react';

const ProjectsPage = () => {
    useEffect(() => {
        // Redirect to the external GitHub portfolio
        window.location.replace("https://github.com/aidantze/projects.github.io");
    }, []);

    return (
        <div className="bg-primary-bg min-h-screen flex items-center justify-center md:text-4xl font-montserrat font-bold text-primary-text">
            <h3>Redirecting to Projects Page...</h3>
        </div>
    );
};

export default ProjectsPage;