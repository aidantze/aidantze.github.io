import React from 'react';
import ResumeSection from '../components/ResumeSection';
import useInView from '../hooks/useInView';
import { FaHeadphones, FaDice, FaPalette, FaHandsHelping } from 'react-icons/fa';
import '../index.css';

const InterestsPage = () => {
    // Summary Section
    const [summaryTilesRef, summaryTilesInView] = useInView();

    // Music Section
    const [musicTitleRef, musicTitleInView] = useInView();
    const [compositionRef, compositionInView] = useInView();
    const [guitarRef, guitarInView] = useInView();
    const [fluteRef, fluteInView] = useInView();

    // Gaming Section
    const [gamingTitleRef, gamingTitleInView] = useInView();
    const [boardGamesRef, boardGamesInView] = useInView();
    const [escapeRoomsRef, escapeRoomsInView] = useInView();
    const [videoGamesRef, videoGamesInView] = useInView();

    // Multimedia Section
    const [multimediaTitleRef, multimediaTitleInView] = useInView();
    const [graphicDesignRef, graphicDesignInView] = useInView();
    const [animationRef, animationInView] = useInView();

    // Faith Section
    const [faithRef, faithInView] = useInView();

    const animateIn = "opacity-100 translate-y-0";
    const animateOut = "opacity-0 translate-y-10";
    const getClasses = (inView) =>
        `transition-all duration-700 ease-out ${ inView ? animateIn : animateOut }`;

    const summaryTiles = [
        {
            title: "Music",
            text: "Hear what I enjoy making, playing and listening to",
            icon: <FaHeadphones />,
            bgImage: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756990239/music-2_car8we.png",
            href: "#music"
        },
        {
            title: "Gaming",
            text: "Play the fun games that keep me competitive",
            icon: <FaDice />,
            bgImage: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989584/gaming_jrh8lq.png",
            href: "#gaming"
        },
        {
            title: "Multimedia",
            text: "See how I keep myself engaged in the media space",
            icon: <FaPalette />,
            bgImage: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140437/ui-ux-minimalistic_n6rmac.jpg",
            href: "#multimedia"
        },
        {
            title: "Faith",
            text: "Find out about what shapes my beliefs and values",
            icon: <FaHandsHelping />,
            bgImage: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989987/faith_v6tvla.png",
            href: "#faith"
        }
    ];

    return (
        <div className="bg-primary-bg">
            {/* Hero Section */ }
            <div
                className="relative h-screen pt-20 bg-cover bg-center bg-fixed flex items-center justify-center text-center"
                style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989711/gaming-3_d9phzl.png')` } }
            >
                <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-text mb-4">
                        My Interests
                    </h1>
                </div>
            </div>

            {/* Main content with solid background for summary tiles */ }
            <div className="py-24 bg-primary-bg">
                <div className="container mx-auto px-8">
                    {/* Summary Section */ }
                    <div ref={ summaryTilesRef } className={ `${ getClasses(summaryTilesInView) } grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto` }>
                        { summaryTiles.map((tile, index) => (
                            <a key={ index } href={ tile.href } className="relative block rounded-lg overflow-hidden shadow-lg h-64 transform transition-transform hover:scale-105 duration-300">
                                <img src={ tile.bgImage } alt={ `${ tile.title } background` } className="absolute inset-0 w-full h-full object-cover z-0" />
                                <div className="absolute inset-0 bg-primary-bg opacity-70 z-10"></div>
                                <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 text-center text-primary-text">
                                    <div className="text-4xl text-accent-green mb-4">{ tile.icon }</div>
                                    <h4 className="text-2xl font-montserrat font-bold mb-2">{ tile.title }</h4>
                                    <p className="text-base font-inter">{ tile.text }</p>
                                </div>
                            </a>
                        )) }
                    </div>
                </div>
            </div>

            {/* Music Section */ }
            <div id="music">
                <div className="relative h-64 bg-cover bg-center bg-fixed flex items-center justify-center text-center" style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756990239/music-2_car8we.png')` } }>
                    <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                    <div ref={ musicTitleRef } className={ `${ getClasses(musicTitleInView) } relative z-10 p-8` }>
                        <h2 className="text-4xl font-montserrat font-bold text-primary-text">Music</h2>
                    </div>
                </div>
            </div>
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* Music Composition Subsection: Image Left on large, Image Below on small */ }
                    <section ref={ compositionRef } className={ `${ getClasses(compositionInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4"> {/* On small screens, text is order-1 (default), image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989602/music_ehcnza.png" alt="Music Composition" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Composing and Mixing</h3>
                            <p className="text-lg font-inter text-primary-text">I don’t just listen to music, I also make music. I don’t sell any (yet), because I just do this for fun. I love making pop, EDM, lo-fi and even classical music, and it keeps my creative juices flowing. I’m always generating new ideas for songs, even while I’m in the shower!</p>
                        </div>
                    </section>
                    {/* Guitar Subsection: Image Right on large, Image Below on small */ }
                    <section ref={ guitarRef } className={ `${ getClasses(guitarInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-1 md:order-1 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Contemporary Music</h3>
                            <p className="text-lg font-inter text-primary-text">I’ve played the guitar for a long time. Since I was in kindergarten I was taking lessons, then stopped for a bit and then picked it up again in year 7 to start playing guitar in the church band. Over the years my guitar playing has helped me to write a few songs, and enabled me to sing and play at the same time to lead the band in worship music.</p>
                        </div>
                        <div className="md:w-1/2 order-2 md:order-2 px-4"> {/* On small screens, image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140678/music-hobby_poinqr.jpg" alt="Playing guitar" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                    </section>
                    {/* Flute Subsection: Image Left on large, Image Below on small */ }
                    <section ref={ fluteRef } className={ `${ getClasses(fluteInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4"> {/* On small screens, text is order-1 (default), image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989603/orchestra_ksok7u.png" alt="Orchestra" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Orchestral Music</h3>
                            <p className="text-lg font-inter text-primary-text">I’ve played the flute since year 4, taking lessons until year 12 where I played the flute for HSC performances. All through my school days I’ve played the flute in various concert bands and orchestras. Now at uni, I play in the UNSW Wind Symphony (think Symphony orchestra without the strings!) and really enjoy performing contemporary classical music to live audiences.</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Gaming Section */ }
            <div id="gaming">
                <div className="relative h-64 bg-cover bg-center bg-fixed flex items-center justify-center text-center" style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989584/gaming_jrh8lq.png')` } }>
                    <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                    <div ref={ gamingTitleRef } className={ `${ getClasses(gamingTitleInView) } relative z-10 p-8` }>
                        <h2 className="text-4xl font-montserrat font-bold text-primary-text">Gaming</h2>
                    </div>
                </div>
            </div>
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* Board Games Subsection: Image Left on large, Image Below on small */ }
                    <section ref={ boardGamesRef } className={ `${ getClasses(boardGamesInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-2 px-4 flex justify-center"> {/* On small screens, text is order-1 (default), image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989601/secreth_vg8ueg.png" alt="Secret Hitler board game" className="w-3/5 h-auto rounded-lg" /> {/* Adjusted size */ }
                        </div>
                        <div className="md:w-1/2 order-1 md:order-1 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Board Games</h3>
                            <p className="text-lg font-inter text-primary-text">When I was younger my family would get together to play board games together. We may not have the largest collection, but there are some board games I still enjoy today. These include the social deduction games (OneNight Werewolf, Secret Hitler, Coup) and other games (Catan, Tokaido, Power Grid). I hangout with my friends often playing these games, and we’re always looking for more fun board games to play.</p>
                        </div>
                    </section>
                    {/* Escape Rooms Subsection: Image Right on large, Image Below on small */ }
                    <section ref={ escapeRoomsRef } className={ `${ getClasses(escapeRoomsInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-1 md:order-2 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Escape Rooms</h3>
                            <p className="text-lg font-inter text-primary-text">As a strategist into puzzles and board games it makes sense to also be into escape rooms (but not the scary ones). Even though I only do them semi-infrequently, I still enjoy being trapped in a room trying to think outside the box to solve the puzzles and escape. But even when we don’t escape, it’s still tonnes of fun to play them with friends.</p>
                        </div>
                        <div className="md:w-1/2 order-2 md:order-1 px-4"> {/* On small screens, image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989599/escaperoom_i4oczz.png" alt="Escape Room" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                    </section>
                    {/* Video Games Subsection: Image Left on large, Image Below on small */ }
                    <section ref={ videoGamesRef } className={ `${ getClasses(videoGamesInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-2 px-4"> {/* On small screens, text is order-1 (default), image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989584/gaming-2_vg3ktc.jpg" alt="Video Games" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-1 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Video Games</h3>
                            <p className="text-lg font-inter text-primary-text">Most of the video games I play now are common mobile games which I won’t elaborate on much now, because all the kids play it and I keep telling myself to move on from them! But I’ve played them because my parents wouldn’t let me play too many PC games. The only PC games I ever played were Minecraft with some friends, and Warzone 2100, a nostalgic 90s war game. Still, I find it’s good to play them once in a while when I’m bored.</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Multimedia Section */ }
            <div id="multimedia">
                <div className="relative h-64 bg-cover bg-center bg-fixed flex items-center justify-center text-center" style={ { backgroundImage: `url('https://res.cloudinary.com/dg6nuqapw/image/upload/v1755140437/ui-ux-minimalistic_n6rmac.jpg')` } }>
                    <div className="absolute inset-0 bg-primary-bg opacity-70"></div>
                    <div ref={ multimediaTitleRef } className={ `${ getClasses(multimediaTitleInView) } relative z-10 p-8` }>
                        <h2 className="text-4xl font-montserrat font-bold text-primary-text">Multimedia</h2>
                    </div>
                </div>
            </div>
            <div className="py-16" style={ { background: 'linear-gradient(to bottom, #171825, #1b2933)' } }>
                <div className="container mx-auto px-8">
                    {/* Graphic Design Subsection: Image Left on large, Image Below on small */ }
                    <section ref={ graphicDesignRef } className={ `${ getClasses(graphicDesignInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-2 md:order-1 px-4"> {/* On small screens, text is order-1 (default), image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989584/graphic-design_eqdyrk.png" alt="Graphic Design" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Graphic Design</h3>
                            <p className="text-lg font-inter text-primary-text">My school let me use Adobe photoshop in year 9 which kicked off my graphic design arc. I made designs of posters, flyers, powerpoint slides and templates. I loved playing around with powerpoint transitions when I was younger. Now without my photoshop license, I still find ways to make the designs I want, mostly in Canva but other times using other... we'll say low-level apps.</p>
                        </div>
                    </section>
                    {/* Video Editing and Animation Subsection: Image Right on large, Image Below on small */ }
                    <section ref={ animationRef } className={ `${ getClasses(animationInView) } mb-24 flex flex-col md:flex-row items-center gap-12` }>
                        <div className="md:w-1/2 order-1 md:order-1 px-4"> {/* On small screens, text is order-1 (default). On md, text is order-2 */ }
                            <h3 className="text-2xl font-montserrat font-bold text-accent-blue mb-4">Video Editing and Animation</h3>
                            <p className="text-lg font-inter text-primary-text">In 2023 I needed a new hobby, and went down a rabbit hole looking into movie and video editing. After my first video edit, which was just a funny compilation of my brother, I decided to experiment with animation by making a simple countdown timer for the youth group. Later this turned into video editing of youth group footage and more engaging animated videos. Now I can say I have a niche skill of animating and video editing with low-level apps!</p>
                        </div>
                        <div className="md:w-1/2 order-2 md:order-2 px-4"> {/* On small screens, image is order-2 (default). On md, image is order-1 */ }
                            <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989600/graphic-design-2_mdcuoj.png" alt="Animation" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                    </section>
                </div>
            </div>

            {/* Faith Section */ }
            <div id="faith" className="py-24 bg-primary-bg">
                <section ref={ faithRef } className={ `${ getClasses(faithInView) } text-center max-w-4xl mx-auto px-8` }>
                    <h2 className="text-3xl font-montserrat font-bold text-primary-text mb-4">My Faith</h2>
                    <p className="text-lg font-inter text-primary-text">
                        I’m a Christian and as a Christian I believe in a God that’s full of love and justice. This shapes my values and my motivations in life. So no matter who you are, I hope that in everything I do, including in the workforce, you can see what my identity is in and what good I can bring.
                    </p>
                </section>
            </div>

            {/* Resume/Portfolio Section */ }
            <ResumeSection
                backgroundImage="https://res.cloudinary.com/dg6nuqapw/image/upload/v1756989711/gaming-3_d9phzl.png"
            />
        </div>
    );
};

export default InterestsPage;