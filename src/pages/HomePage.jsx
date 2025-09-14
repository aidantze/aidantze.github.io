import React from 'react';
import { Link } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import useInView from '../hooks/useInView';
import '../index.css';

const HomePage = () => {
    // Relevant Projects Section
    const [projectsTitleRef, projectsTitleInView] = useInView();
    const [projectsTextRef, projectsTextInView] = useInView();
    const [projectsButtonRef, projectsButtonInView] = useInView();
    const [projectsImageRef, projectsImageInView] = useInView();

    // Work Experience Section
    const [workTitleRef, workTitleInView] = useInView();
    const [workTextRef, workTextInView] = useInView();
    const [workButtonRef, workButtonInView] = useInView();
    const [workImageRef, workImageInView] = useInView();

    // Hobbies and Interests Section
    const [interestsTitleRef, interestsTitleInView] = useInView();
    const [interestsTextRef, interestsTextInView] = useInView();
    const [interestsButtonRef, interestsButtonInView] = useInView();
    const [interestsImageRef, interestsImageInView] = useInView();

    const animateIn = "opacity-100 translate-y-0";
    const animateOut = "opacity-0 translate-y-10";

    const getClasses = (inView) =>
        `transition-all duration-700 ease-out ${ inView ? animateIn : animateOut }`;

    return (
        <div>
            {/* Hero Section with full screen height */ }
            <div
                className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-center"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980513/vr-2_jyclpi.png')` } }
            >
                <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                <div className="relative z-10 p-8 pt-20">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-text mb-4">
                        My Tech Portfolio
                    </h1>
                    <h3 className="text-lg md:text-xl font-montserrat font-bold text-primary-text">
                        Building the future, one project at a time.
                    </h3>
                </div>
            </div>

            {/* Main content with gradient background */ }
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* About Me Section */ }
                    <section className="mb-24 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-montserrat font-bold text-primary-text mb-4">About Me</h2>
                        <p className="text-lg font-inter text-primary-text mb-6">
                            I'm a 5th year UNSW student studying Software Engineering and Commerce. I have worked for 6 months at CBA in Sydney, Australia and 2 weeks in PT. MTM in Jakarta, Indonesia. I love music, graphic design and board games, and volunteer at my local church. I also work as a casual maths tutor.
                        </p>
                        <Link to="/about">
                            <button className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full" alt="Button to view my full story">
                                My Story
                            </button>
                        </Link>
                    </section>

                    {/* Relevant Projects Section */ }
                    <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <h2 ref={ projectsTitleRef } className={ `${ getClasses(projectsTitleInView) } text-3xl font-montserrat font-bold text-primary-text mb-4` }>Relevant Projects</h2>
                            <p ref={ projectsTextRef } className={ `${ getClasses(projectsTextInView) } text-lg font-inter text-primary-text mb-6` }>
                                Find out more about the projects I've done, both for uni and in my spare time
                            </p>
                            <div ref={ projectsButtonRef } className={ `${ getClasses(projectsButtonInView) }` }>
                                <Link to="/projects">
                                    <button className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full" alt="Button to view all projects">
                                        View Projects
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div ref={ projectsImageRef } className={ `md:w-1/2 order-1 md:order-2 ${ getClasses(projectsImageInView) }` }>
                            <div className="relative w-4/5 mx-auto">
                                <img
                                    src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755145259/robot-vector-isometric_zaomsc.png"
                                    alt="Isometric vector of a robot"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Work Experience Section */ }
                    <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
                        <div ref={ workImageRef } className={ `md:w-1/2 order-1 ${ getClasses(workImageInView) }` }>
                            <div className="relative w-4/5 mx-auto">
                                <img
                                    src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755145259/work-vector-isometric_qcq6di.png"
                                    alt="Isometric vector of a briefcase and desk"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div ref={ workTitleRef } className="md:w-1/2 order-2 px-4">
                            <h2 className={ `${ getClasses(workTitleInView) } text-3xl font-montserrat font-bold text-primary-text mb-4` }>Work Experience</h2>
                            <p ref={ workTextRef } className={ `${ getClasses(workTextInView) } text-lg font-inter text-primary-text mb-6` }>
                                See the contributions I have made as part of my work and volunteer experience
                            </p>
                            <div ref={ workButtonRef } className={ `${ getClasses(workButtonInView) }` }>
                                <Link to="/work">
                                    <button className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full" alt="Button to view my work experience">
                                        View Experience
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Hobbies and Interests Section */ }
                    <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <h2 ref={ interestsTitleRef } className={ `${ getClasses(interestsTitleInView) } text-3xl font-montserrat font-bold text-primary-text mb-4` }>Hobbies and Interests</h2>
                            <p ref={ interestsTextRef } className={ `${ getClasses(interestsTextInView) } text-lg font-inter text-primary-text mb-6` }>
                                Learn more about the interesting things I enjoy doing outside of work and uni
                            </p>
                            <div ref={ interestsButtonRef } className={ `${ getClasses(interestsButtonInView) }` }>
                                <Link to="/interests">
                                    <button className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full" alt="Button to view my hobbies and interests">
                                        View Interests
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div ref={ interestsImageRef } className={ `md:w-1/2 order-1 md:order-2 ${ getClasses(interestsImageInView) }` }>
                            <div className="relative w-4/5 mx-auto">
                                <img
                                    src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755145259/music-vector-isometric_zxshqg.png"
                                    alt="Isometric vector of a music equalizer"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Resume/Portfolio Section */ }
            <ResumeSection
                backgroundImage="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980513/vr-2_jyclpi.png"
            />
        </div>
    );
};

export default HomePage;