import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import InterestsPage from './pages/InterestsPage';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/about" element={ <AboutPage /> } />
                    <Route path="/projects" element={ <ProjectsPage /> } />
                    <Route path="/work" element={ <WorkPage /> } />
                    <Route path="/interests" element={ <InterestsPage /> } />
                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;