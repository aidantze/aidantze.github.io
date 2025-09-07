import React from 'react';
import useInView from '../hooks/useInView';

const ResumeSection = ({ backgroundImage }) => {
    // Hooks for animation, now encapsulated within this component
    const [sectionRef, sectionInView] = useInView();
    const [resumeButton1Ref, resumeButton1InView] = useInView();
    const [resumeButton2Ref, resumeButton2InView] = useInView();

    const animateIn = "opacity-100 translate-y-0";
    const animateOut = "opacity-0 translate-y-10";
    const getClasses = (inView) =>
        `transition-all duration-700 ease-out ${ inView ? animateIn : animateOut }`;

    return (
        <section
            ref={ sectionRef }
            className="relative py-24 text-center bg-cover bg-center bg-fixed"
            style={ { backgroundImage: `url('${ backgroundImage }')` } }
        >
            <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
            <div className={ `relative z-10 max-w-3xl mx-auto ${ getClasses(sectionInView) }` }>
                <h2 className="text-3xl font-montserrat font-bold text-primary-text mb-8">View my Resume and Project Portfolio</h2>
                <div className="flex justify-center space-x-6">
                    {/* Download CV Button */ }
                    <div ref={ resumeButton1Ref } className={ `${ getClasses(resumeButton1InView) }` }>
                        <a
                            href="/resume.pdf"
                            download="aidantze_resume.pdf"
                            className="bg-accent-green hover:bg-opacity-80 transition-colors duration-300 text-primary-bg font-montserrat font-bold py-3 px-8 rounded-full inline-block"
                            alt="Download my resume"
                        >
                            Download CV
                        </a>
                    </div>
                    {/* View Portfolio Button */ }
                    <div ref={ resumeButton2Ref } className={ `${ getClasses(resumeButton2InView) }` }>
                        <a
                            href="https://github.com/aidantze/projects.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full inline-block"
                            alt="View my GitHub portfolio"
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;