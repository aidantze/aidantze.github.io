import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const NotFoundPage = () => {
    return (
        <div className="bg-[#070508] min-h-screen py-32 flex items-center justify-center font-inter">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
                {/* Image on the left */ }
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755480590/404notfound_ejiamh.png"
                        alt="A stylized 404 error graphic with a broken webpage"
                        className="max-w-xs md:max-w-sm"
                    />
                </div>
                {/* Text and Button on the right */ }
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
                    <h2 className="text-6xl font-montserrat font-bold text-accent-blue">Oops!</h2>
                    <p className="text-xl text-primary-text max-w-md">
                        The page you are trying to find doesn't seem to exist, or may have been removed. You could try again, or head back to the Home page.
                    </p>
                    <Link to="/">
                        <button className="bg-accent-green hover:bg-opacity-80 transition-colors duration-300 text-primary-bg font-inter font-semibold py-3 px-8 rounded-md" alt="Button to navigate back to the home page">
                            Back to Safety
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;