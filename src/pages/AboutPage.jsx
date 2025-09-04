import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import { FaLightbulb, FaComment, FaBrain } from 'react-icons/fa';
import '../index.css';
import '../styles/scrollingText.css';

const AboutPage = () => {
    // State for toggling the animation
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

    // Career Profile Section
    const [careerProfileTitleRef, careerProfileTitleInView] = useInView();
    const [careerProfileTilesRef, careerProfileTilesInView] = useInView();

    // Skills Section
    const [skillsTitleRef, skillsTitleInView] = useInView();
    const [skillsSectionRef, skillsSectionInView] = useInView();

    // Degree Section
    const [degreeTitleRef, degreeTitleInView] = useInView();
    const [seSubtitleRef, seSubtitleInView] = useInView();
    const [seText1Ref, seText1InView] = useInView();
    const [seText2Ref, seText2InView] = useInView();
    const [seList1TitleRef, seList1TitleInView] = useInView();
    const [seList1Ref, seList1InView] = useInView();
    const [seList2TitleRef, seList2TitleInView] = useInView();
    const [seList2Ref, seList2InView] = useInView();
    const [seImageRef, seImageInView] = useInView();

    const [commerceSubtitleRef, commerceSubtitleInView] = useInView();
    const [commerceText1Ref, commerceText1InView] = useInView();
    const [commerceText2Ref, commerceText2InView] = useInView();
    const [commerceList1TitleRef, commerceList1TitleInView] = useInView();
    const [commerceList1Ref, commerceList1InView] = useInView();
    const [commerceList2TitleRef, commerceList2TitleInView] = useInView();
    const [commerceList2Ref, commerceList2InView] = useInView();
    const [commerceImageRef, commerceImageInView] = useInView();

    // Qualifications Section
    const [qualificationsTitleRef, qualificationsTitleInView] = useInView();
    const [qualificationsTilesRef, qualificationsTilesInView] = useInView();

    // Resume/Portfolio Section
    const [resumeTitleRef, resumeTitleInView] = useInView();
    const [resumeButton1Ref, resumeButton1InView] = useInView();
    const [resumeButton2Ref, resumeButton2InView] = useInView();

    const animateIn = "opacity-100 translate-y-0";
    const animateOut = "opacity-0 translate-y-10";

    const getClasses = (inView) =>
        `transition-all duration-700 ease-out ${ inView ? animateIn : animateOut }`;

    const qualifications = [
        {
            text: "78 WAM with 9 High Distinction subjects",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967007/unsw_r2psi7.jpg",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486949/unsw_yiov7i.png"
        },
        {
            text: "The Duke of Edinburgh Gold Award",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967436/duke-of-ed_q5bkaq.png",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486949/deas_uzoy2u.png"
        },
        {
            text: "97.9 HSC ATAR",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967003/unsw-3_cpaebu.jpg",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486948/hsc_h0ostc.png"
        },
        {
            text: "UNSW FINSOC Corporate Finance Analyst Competition (1st Place)",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967003/finance-analyst_y73i6x.png",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486948/finsoc_kf0nn0.png"
        },
        {
            text: "UNSW Global Business Practicum Certificate",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967011/jakarta_e9eqw5.png",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486949/unsw_yiov7i.png"
        },
        {
            text: "Premier's Volunteer Recognition Program Certificate",
            bg: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756967009/volunteering_zftqmj.png",
            icon: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755486949/nswgov_cnd8e7.png"
        }
    ];

    const techSkills = "python • java • c++ • node.js • react.js • C# • asp .net • css • sql • pandas • zsh • solidity •";
    const softSkills = "pace • agile • scrum • scope • jira • backlog • stories • epics • retrospective • standups •";
    const devopsSkills = "devops • ci/cd • aws • cloud • serverless • site reliability • monitoring • logging • alerting •";
    const aiSkills = "ai • machine learning • neural networks • llms • ar/vr • nlp • computer vision • analytics •";
    const designSkills = "api • crud • swagger • docker • uml • mongodb • tech stack • architecture •";
    const processSkills = "ui/ux • figma • usability tests • unit tests • integration tests • acceptance criteria • accessibility •";
    const fintechSkills = "fintech • blockchain • crypto • smart contract • robo advice • p2p lending • foreign exchange •";
    const leadershipSkills = "leadership • growth mindset • faith • courage • collaboration • commitment • entrepreneur •";

    return (
        <div className="bg-primary-bg">
            {/* Hero Section */ }
            <div
                className="relative h-screen pt-20 bg-cover bg-center bg-fixed flex items-center justify-center text-center"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140442/software-eng_joglik.png')` } }
            >
                <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-text mb-4">
                        About Me
                    </h1>
                </div>
            </div>

            {/* Main content with gradient background */ }
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* Career Profile Section */ }
                    <section className="mb-24 text-center max-w-6xl mx-auto">
                        <h2 ref={ careerProfileTitleRef } className={ `${ getClasses(careerProfileTitleInView) } text-3xl font-montserrat font-bold text-primary-text mb-12` }>Career Profile</h2>
                        <div ref={ careerProfileTilesRef } className={ `${ getClasses(careerProfileTilesInView) } flex flex-col md:flex-row justify-center items-center gap-8` }>
                            <div className="flex-1 max-w-xs p-6 bg-secondary-bg rounded-lg shadow-lg flex flex-col items-center text-center">
                                <FaLightbulb className="text-4xl text-accent-green mb-4" />
                                <p className="text-lg font-inter text-primary-text">
                                    Thrives generating innovative and creative solutions to real world problems
                                </p>
                            </div>
                            <div className="flex-1 max-w-xs p-6 bg-secondary-bg rounded-lg shadow-lg flex flex-col items-center text-center">
                                <FaComment className="text-4xl text-accent-green mb-4" />
                                <p className="text-lg font-inter text-primary-text">
                                    Shows initiative to motivate and influence team members positively
                                </p>
                            </div>
                            <div className="flex-1 max-w-xs p-6 bg-secondary-bg rounded-lg shadow-lg flex flex-col items-center text-center">
                                <FaBrain className="text-4xl text-accent-green mb-4" />
                                <p className="text-lg font-inter text-primary-text">
                                    Adapts leadership attributes of courage and growth mindset to overcome failure
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */ }
                    <section className="mb-24 bg-accent-green py-8 rounded-lg">
                        <h2 ref={ skillsTitleRef } className={ `${ getClasses(skillsTitleInView) } text-3xl text-center font-montserrat font-bold text-primary-bg mb-12` }>Skills</h2>
                        <div
                            ref={ skillsSectionRef }
                            className={ `${ getClasses(skillsSectionInView) } ${ isAnimationEnabled ? 'overflow-hidden' : 'overflow-x-auto md:overflow-hidden' }` }
                        >
                            <div className="w-max md:w-full space-y-4">
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-left' : '' }` }>{ techSkills } { techSkills } { techSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-right' : '' }` }>{ softSkills } { softSkills } { softSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-left' : '' }` }>{ devopsSkills } { devopsSkills } { devopsSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-right' : '' }` }>{ aiSkills } { aiSkills } { aiSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-left' : '' }` }>{ designSkills } { designSkills } { designSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-right' : '' }` }>{ processSkills } { processSkills } { processSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-left' : '' }` }>{ fintechSkills } { fintechSkills } { fintechSkills }</span>
                                </div>
                                <div className="bg-accent-green text-primary-bg font-montserrat font-extrabold whitespace-nowrap overflow-hidden">
                                    <span className={ `inline-block text-xl md:text-2xl py-2 ${ isAnimationEnabled ? 'scroll-right' : '' }` }>{ leadershipSkills } { leadershipSkills } { leadershipSkills }</span>
                                </div>
                            </div>
                        </div>
                        {/* Toggle Switch */ }
                        <div className="flex justify-center items-center mt-8">
                            <span className="mr-4 text-primary-bg font-montserrat font-bold text-sm">Toggle Animation</span>
                            <button
                                onClick={ () => setIsAnimationEnabled(!isAnimationEnabled) }
                                className={ `relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out focus:outline-none ${ isAnimationEnabled ? 'bg-primary-bg' : 'bg-gray-400' }` }
                                aria-label="Toggle skills animation"
                            >
                                <span
                                    className={ `inline-block w-4 h-4 transform bg-accent-green rounded-full transition-transform duration-300 ease-in-out ${ isAnimationEnabled ? 'translate-x-6' : 'translate-x-1' }` }
                                />
                            </button>
                        </div>
                    </section>
                </div>

                {/* Degree Section */ }
                <div className="container mx-auto px-8 py-16">
                    <section className="mb-24">
                        <h2 ref={ degreeTitleRef } className={ `${ getClasses(degreeTitleInView) } text-3xl text-center font-montserrat font-bold text-primary-text mb-12` }>Degree</h2>

                        {/* Software Engineering Subsection */ }
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                            <div className="md:w-1/2 order-1 md:order-2 px-4">
                                <h3 ref={ seSubtitleRef } className={ `${ getClasses(seSubtitleInView) } text-2xl font-montserrat font-bold text-accent-blue mb-4` }>Software Engineering</h3>
                                <p ref={ seText1Ref } className={ `${ getClasses(seText1InView) } text-lg font-inter text-primary-text mb-6` }>
                                    I have over 9 years of programming experiences, and am familiar with the art of using logical reasoning and processes to make something creative. The career path I have chosen is a valuable career opportunity that is in high demand and is always developing as new technology improves the way we live.
                                </p>
                                <p ref={ seText2Ref } className={ `${ getClasses(seText2InView) } text-lg font-inter text-primary-text mb-6` }>
                                    This website you are currently viewing was revamped from my very first attempt at frontend programming in Jan 2023, build using raw html/css. It has been upgraded to use React.js as of August 2025.
                                </p>
                                <div ref={ seList1TitleRef } className={ `${ getClasses(seList1TitleInView) } mb-4` }>
                                    <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">My goals include:</h4>
                                    <ul ref={ seList1Ref } className={ `${ getClasses(seList1InView) } text-lg font-inter text-primary-text list-disc list-inside` }>
                                        <li>Being proficient in every industry programming language and maximise my tech knowledge as a full stack engineer</li>
                                        <li>Thrive working and leading teams collaboratively to create a robust service</li>
                                        <li>Continuously test, seek feedback and iterate the service to improve its functionality</li>
                                    </ul>
                                </div>
                                <div ref={ seList2TitleRef } className={ `${ getClasses(seList2TitleInView) } mb-4` }>
                                    <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Desirable pathways:</h4>
                                    <ul ref={ seList2Ref } className={ `${ getClasses(seList2InView) } text-lg font-inter text-primary-text list-disc list-inside` }>
                                        <li>API development</li>
                                        <li>Frontend engineering</li>
                                        <li>DevOps and CI/CD</li>
                                        <li>AI engineering</li>
                                        <li>Cloud engineering</li>
                                        <li>Site reliability engineering</li>
                                        <li>Solutions architecture</li>
                                    </ul>
                                </div>
                            </div>
                            <div ref={ seImageRef } className={ `md:w-1/2 order-2 md:order-1 ${ getClasses(seImageInView) }` }>
                                <img
                                    src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756991452/site-reliability_lmk39q.png"
                                    alt="Software analytics graphic"
                                    className="w-4/5 mx-auto rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Commerce Subsection */ }
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 order-1 px-4">
                                <h3 ref={ commerceSubtitleRef } className={ `${ getClasses(commerceSubtitleInView) } text-2xl font-montserrat font-bold text-accent-blue mb-4` }>Commerce</h3>
                                <p ref={ commerceText1Ref } className={ `${ getClasses(commerceText1InView) } text-lg font-inter text-primary-text mb-6` }>
                                    I see Commerce as a bonus set of skills to complement my software skills. Being able to understand how businesses operate, and the strategies they employ to innovate success to gain a competitive advantage, will help me to not only develop an app, but pitch it to a target market that will greatly benefit from this app.
                                </p>
                                <p ref={ commerceText2Ref } className={ `${ getClasses(commerceText2InView) } text-lg font-inter text-primary-text mb-6` }>
                                    My commerce major is FinTech, which has made me realise how easily technology can disrupt traditional financial services. Technologies like e-payments and foreign exchange, insurTech, robo advice and blockchain/crypto are already revolutionising the global financial space as we speak, and I want to be part of it!
                                </p>
                                <div ref={ commerceList1TitleRef } className={ `${ getClasses(commerceList1TitleInView) } mb-4` }>
                                    <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">My goals include:</h4>
                                    <ul ref={ commerceList1Ref } className={ `${ getClasses(commerceList1InView) } text-lg font-inter text-primary-text list-disc list-inside` }>
                                        <li>Understand the processes of innovation and collaboration within businesses</li>
                                        <li>Ideate and pitch my valuable FinTech ideas with the aim of transforming the way money moves in Australia</li>
                                        <li>Become a co-founder or work in a startup that will build a product/service that benefits everyone sustainably</li>
                                    </ul>
                                </div>
                                <div ref={ commerceList2TitleRef } className={ `${ getClasses(commerceList2TitleInView) } mb-4` }>
                                    <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Desirable pathways:</h4>
                                    <ul ref={ commerceList2Ref } className={ `${ getClasses(commerceList2InView) } text-lg font-inter text-primary-text list-disc list-inside` }>
                                        <li>Financial market data analytics</li>
                                        <li>Money transfers and foreign exchange</li>
                                        <li>Robo advice for wealth management</li>
                                        <li>P2P lending</li>
                                        <li>insurTech</li>
                                        <li>Blockchain and Crypto</li>
                                    </ul>
                                </div>
                            </div>
                            <div ref={ commerceImageRef } className={ `md:w-1/2 order-2 ${ getClasses(commerceImageInView) }` }>
                                <img
                                    src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140466/data-analytics_bulkla.jpg"
                                    alt="Data analytics graphic"
                                    className="w-4/5 mx-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Qualifications Section */ }
            <div className="py-16">
                <div className="container mx-auto px-8">
                    <section className="mb-24 text-center">
                        <h2 ref={ qualificationsTitleRef } className={ `${ getClasses(qualificationsTitleInView) } text-3xl font-montserrat font-bold text-primary-text mb-12` }>Qualifications</h2>
                        <div ref={ qualificationsTilesRef } className={ `${ getClasses(qualificationsTilesInView) } flex flex-wrap justify-center gap-8` }>
                            { qualifications.map((item, index) => (
                                <div key={ index } className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs h-64 rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={ item.bg }
                                        alt={ item.text }
                                        className="absolute inset-0 w-full h-full object-cover z-0"
                                    />
                                    <div className="absolute inset-0 bg-primary-bg opacity-70 z-10"></div>
                                    <div className="relative z-20 flex flex-col items-center justify-center h-full p-4 text-center">
                                        <img
                                            src={ item.icon }
                                            alt={ `${ item.text } icon` }
                                            className="h-16 w-16 mb-4 object-contain"
                                        />
                                        <p className="text-lg font-montserrat font-bold text-primary-text">
                                            { item.text }
                                        </p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </section>
                </div>
            </div>

            {/* Resume/Portfolio Section with fixed background */ }
            <section
                ref={ resumeTitleRef }
                className="relative py-24 text-center bg-cover bg-center bg-fixed"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140442/software-eng_joglik.png')` } }
            >
                <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                <div className={ `relative z-10 max-w-3xl mx-auto ${ getClasses(resumeTitleInView) }` }>
                    <h2 className="text-3xl font-montserrat font-bold text-primary-text mb-8">View my Resume and Project Portfolio</h2>
                    <div className="flex justify-center space-x-6">
                        <div ref={ resumeButton1Ref } className={ `${ getClasses(resumeButton1InView) }` }>
                            <Link to="/downloadresume">
                                <button className="bg-accent-green hover:bg-opacity-80 transition-colors duration-300 text-primary-bg font-montserrat font-bold py-3 px-8 rounded-full" alt="Download my resume">
                                    Download CV
                                </button>
                            </Link>
                        </div>
                        <div ref={ resumeButton2Ref } className={ `${ getClasses(resumeButton2InView) }` }>
                            <a href="https://github.com/aidantze/projects.github.io" target="_blank" rel="noopener noreferrer">
                                <button className="bg-accent-blue hover:bg-opacity-80 transition-colors duration-300 text-primary-text font-montserrat font-bold py-3 px-8 rounded-full" alt="View my GitHub portfolio">
                                    View Portfolio
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;