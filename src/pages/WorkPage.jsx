import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import { FaSuitcase, FaHandshake } from 'react-icons/fa';
import '../index.css';

const WorkPage = () => {
    // Summary Section
    const [summaryWorkRef, summaryWorkInView] = useInView();
    const [summaryVolunteerRef, summaryVolunteerInView] = useInView();

    // Work Experience Section
    const [workTitleRef, workTitleInView] = useInView();
    const [ptmtmRef, ptmtmInView] = useInView();
    const [cbaRef, cbaInView] = useInView();
    const [tutorRef, tutorInView] = useInView();

    // Volunteer Experience Section
    const [volunteerTitleRef, volunteerTitleInView] = useInView();
    const [worshipRef, worshipInView] = useInView();
    const [youthRef, youthInView] = useInView();

    // Resume/Portfolio Section
    const [resumeTitleRef, resumeTitleInView] = useInView();
    const [resumeButton1Ref, resumeButton1InView] = useInView();
    const [resumeButton2Ref, resumeButton2InView] = useInView();

    const animateIn = "opacity-100 translate-y-0";
    const animateOut = "opacity-0 translate-y-10";
    const getClasses = (inView) =>
        `transition-all duration-700 ease-out ${ inView ? animateIn : animateOut }`;

    return (
        <div className="bg-primary-bg">
            {/* Hero Section */ }
            <div
                className="relative h-screen pt-20 bg-cover bg-center bg-fixed flex items-center justify-center text-center"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756971328/cba_i3dmxb.png')` } }
            >
                <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-text mb-4">
                        My Experience
                    </h1>
                </div>
            </div>

            {/* Main content with solid background for summary tiles */ }
            <div className="py-16 bg-primary-bg">
                <div className="container mx-auto px-8">
                    {/* Summary Section */ }
                    <section className="py-16 text-center max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            {/* Work Experience Tile */ }
                            <a href="#work-experience" ref={ summaryWorkRef } className={ `${ getClasses(summaryWorkInView) } flex-1 max-w-md relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300` }>
                                <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756971315/cba-2_alzvz9.jpg" alt="Work experience background" className="absolute inset-0 w-full h-full object-cover z-0" />
                                <div className="absolute inset-0 bg-primary-bg opacity-70 z-10"></div>
                                <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 py-8 text-center">
                                    <FaSuitcase className="text-4xl text-accent-green mb-4" />
                                    <h4 className="text-2xl font-montserrat font-bold text-primary-text mb-2">Work Experience</h4>
                                    <p className="text-base font-inter text-primary-text">Showcase my previous and current work placements and jobs and what I’ve learnt from them all</p>
                                </div>
                            </a>
                            {/* Volunteer Experience Tile */ }
                            <a href="#volunteer-experience" ref={ summaryVolunteerRef } className={ `${ getClasses(summaryVolunteerInView) } flex-1 max-w-md relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300` }>
                                <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980503/youth_qixvlt.png" alt="Volunteer experience background" className="absolute inset-0 w-full h-full object-cover z-0" />
                                <div className="absolute inset-0 bg-primary-bg opacity-70 z-10"></div>
                                <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 py-8 text-center">
                                    <FaHandshake className="text-4xl text-accent-green mb-4" />
                                    <h4 className="text-2xl font-montserrat font-bold text-primary-text mb-2">Volunteer Experience</h4>
                                    <p className="text-base font-inter text-primary-text">Showcase the volunteering (unpaid work) I do for a good cause and what keeps me motivated to do more</p>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            {/* Work Experience Section with title and background */ }
            <div id="work-experience">
                <div className="relative h-64 bg-cover bg-center bg-fixed flex items-center justify-center text-center" style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756971315/cba-2_alzvz9.jpg')` } }>
                    <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                    <div ref={ workTitleRef } className={ `${ getClasses(workTitleInView) } relative z-10 p-8` }>
                        <h2 className="text-4xl font-montserrat font-bold text-primary-text">Work Experience</h2>
                    </div>
                </div>
            </div>

            {/* Main content with gradient background for work subsections */ }
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* PT MTM Jakarta Subsection */ }
                    <section ref={ ptmtmRef } className={ `${ getClasses(ptmtmInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756982186/mtm_kmgskl.png" alt="PT MTM logo" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4">
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">PT. MTM, Jakarta, Indonesia</h3>
                            <h4 className="text-xl font-montserrat font-bold text-accent-green mb-4">Cybersecurity Marketing Consultant</h4>
                            <p className="text-lg font-inter text-primary-text mb-6">I was involved in a 3-member consulting team working at PT. MTM, a cybersecurity firm in Jakarta. The project involved developing a marketing proposal to increase their existing B2B customer base whilst venturing into new B2C customer bases. This experience was organised by the UNSW Global Business Practicum (GBP).</p>
                            <p className="text-lg font-inter text-primary-text mb-6">My role involved critiquing the company website and its observability platform, currently in development. Others in the group did the social media analysis and strategic marketing for new ventures. This work experience lasted 5 weeks, 2 and a half of which was in person with the company.</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Challenges</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Communicating observability concepts to the rest of my group (with less technical knowledge than me) was a challenge</li>
                                    <li>The company had no idea what strategy to take after their previous strategy failed, so we had no basis to go off of</li>
                                    <li>Limited information available in the internet in the Jakarta region made researching also a challenge</li>
                                    <li>Not all group members work the same away. I persevered through internal conflict and issues with delivery of our presentation</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Key reflections</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Learning the basics of Capture the Flag (Red VS Blue Team) cybersecurity competitions</li>
                                    <li>Learning fundamental marketing concepts with the motivation that the strategies we present may be applied in the real world</li>
                                    <li>Applying my presenting skills to deliver an engaging presentation despite the conflicts</li>
                                    <li>Adapting to the culture of working in Jakarta in a corporate office, promoting common values of harmony and humbleness</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Commbank Subsection */ }
                    <section ref={ cbaRef } className={ `${ getClasses(cbaInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Commbank, Sydney, Australia</h3>
                            <h4 className="text-xl font-montserrat font-bold text-accent-green mb-4">Software Engineering Intern</h4>
                            <p className="text-lg font-inter text-primary-text mb-6">I was involved in a 10-member database team at CBA in Sydney, Australia, making improvements to the management and security of customer-sensitive data related to mortgage insurance. This experience was organised by the UNSW Coop Office, and also involved submitting 4 reflections and an end-of-internship presentation to the Coop Office.</p>
                            <p className="text-lg font-inter text-primary-text mb-6">Many initiatives were ongoing while working, but my role included developing an interface for the frontend of a new management system for internal staff only, deploying two new APIs to cloud using TeamCity, migrating the team’s APIs to a new observability platform as part of a company-wide initiative, and delivering a growth mindset presentation to my chapter. I also attended 6 networking events to overcome my social weakness. This internship lasted 6 months</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Challenges</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Thriving in the banking work environment, as this was my very first proper corporate work experience</li>
                                    <li>Learning frontend over the first few weeks with limited access to CBA services and little support from the team (since this was a new initiative)</li>
                                    <li>Understanding the importance of observability in banking and communicating this to other teams as they undertake the same migration</li>
                                    <li>Going outside my comfort zone to network and connect with colleagues more than I initially expected</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Key reflections</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Learning the basics of API development, testing and deployment in stages, then applying this to deploy a new API for the first time</li>
                                    <li>Applying fundamental agile, scrum and Jira task management principles, but adopting this to CBA’s “Pace” approach</li>
                                    <li>Understanding how GitHub Copilot can be a helpful tool to accelerate productivity in development, but also its flaws</li>
                                    <li>Adapting to the culture of my team colleagues, which were primarily based in India. This included understanding their language, work style, and celebrating Diwali</li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4">
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756982456/cba-3_z8qhxw.jpg" alt="Commbank building" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                    </section>

                    {/* Casual Maths Tutor Subsection */ }
                    <section ref={ tutorRef } className={ `${ getClasses(tutorInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980501/tutoring_ivsbmm.jpg" alt="Tutoring graphic" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4">
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Casual Maths Tutor</h3>
                            <h4 className="text-xl font-montserrat font-bold text-accent-green mb-4">Self-Employed</h4>
                            <p className="text-lg font-inter text-primary-text mb-6">I have been teaching students in years 3-12 over 5 years to boost their mathematical capabilities, resulting in higher grades and some students promoting to extension maths classes. My teaching style is personal and tailored for each student, unlike most coaching colleges, meaning I create my own worksheets and give them specific tips and guidance to understanding problems</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Challenges</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Communicating and teaching students mathematical concepts in a way that’s easy for them to understand</li>
                                    <li>Maintaining consistent organisation of resources (worksheets) and being timely with scheduling regular lessons</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Key reflections</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Developing problem solving and communication skills by teaching students</li>
                                    <li>Tweaking existing strategies of teaching to make it more engaging for my students</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Volunteer Experience Section with title and background */ }
            <div id="volunteer-experience">
                <div className="relative h-64 bg-cover bg-center bg-fixed flex items-center justify-center text-center" style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980503/youth_qixvlt.png')` } }>
                    <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                    <div ref={ volunteerTitleRef } className={ `${ getClasses(volunteerTitleInView) } relative z-10 p-8` }>
                        <h2 className="text-4xl font-montserrat font-bold text-primary-text">Volunteer Experience</h2>
                    </div>
                </div>
            </div>

            {/* Main content with gradient background for volunteer subsections */ }
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* Music/Worship leader Subsection */ }
                    <section ref={ worshipRef } className={ `${ getClasses(worshipInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Marsfield Community Church</h3>
                            <h4 className="text-xl font-montserrat font-bold text-accent-green mb-4">Band Leader</h4>
                            <p className="text-lg font-inter text-primary-text mb-6">I have been part of a band playing worship music at my local church for a long time, but only over the last 3 or so years starting to lead the band. The leadership skills I have gained have helped me to lead well so the band members can play and sing in a simple way that helps the church to engage more and be closer as a community.</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Challenges</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Approaching leadership of a band with respect, even during times of conflict and disagreement</li>
                                    <li>Identifying the best way to play a song that’s easy for the musicians but also easy for the congregation to sing along to</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Key reflections</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Developing problem solving and leadership skills by “calling the shots” for the band and being accountable for all members of the group</li>
                                    <li>Applying my musical knowledge to help up-skill members in the band, but also being reserved and humble so I can approach helping others in a nice way</li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4">
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980511/worship_zoh18f.png" alt="Worship band graphic" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                    </section>

                    {/* Youth group leader Subsection */ }
                    <section ref={ youthRef } className={ `${ getClasses(youthInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4">
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756980501/youth-2_p72mpe.jpg" alt="Youth group graphic" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4">
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Marsfield Community Church</h3>
                            <h4 className="text-xl font-montserrat font-bold text-accent-green mb-4">Youth Leader</h4>
                            <p className="text-lg font-inter text-primary-text mb-6">I was involved in serving at a youth group for 4 years, hanging out with and discipling teens from years 6-12. Some of the youth I’ve had the opportunity of leading have decided to lead youth after graduating, while others have moved on. Part of this involves organising events with the youth, giving bible talks and revamping some existing digital media like powerpoint templates and flyers.</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Challenges</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Organising events and digital media even whilst tackling technical issues</li>
                                    <li>Facilitating discussions in a meaningful and respectful manner, and being accountable for the youth I lead, which was tiresome and challenging to some extent</li>
                                    <li>Ensuring the leaders abide by safe ministry policies to protect the youth we serve</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-montserrat font-bold text-accent-green mb-2">Key reflections</h4>
                                <ul className="text-lg font-inter text-primary-text list-disc list-inside">
                                    <li>Giving bible talks to boost my confidence in public speaking and engaging presentation skills</li>
                                    <li>Having fun hanging out with the youth and organising fun games and events has helped me understand the importance of community and belonging</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Resume/Portfolio Section with fixed background */ }
            <section
                ref={ resumeTitleRef }
                className="relative py-24 text-center bg-cover bg-center bg-fixed"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756971328/cba_i3dmxb.png')` } }
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

export default WorkPage;