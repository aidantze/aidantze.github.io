import React, { useEffect } from 'react';

const ProjectsPage = () => {
    useEffect(() => {
        // Redirect to the external GitHub portfolio
        window.location.replace("https://github.com/aidantze/projects.github.io");
    }, []);

    return (
        <div className="bg-primary-bg min-h-screen flex items-center justify-center text-primary-text font-inter">
            <p>Redirecting to Projects Page...</p>
        </div>
    );
};

export default ProjectsPage;