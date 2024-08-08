import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drift from './components/Drift';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Founders from './pages/Founders';
import OurTeam from './pages/OurTeam';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScheduleMeeting from './pages/ScheduleMeeting'; 
import TurnkeyProjects from './pages/TurnkeyProjects.js'
import ProjectPage from './pages/ProjectPage.js';
import ProjectDetail from './pages/ProjectDetail';
import ProjectList from './components/ProjectList.js'
import Slider from './components/ImageSlider.js';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/turnkey-projects" element={<TurnkeyProjects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/schedule-a-meeting" element={<ScheduleMeeting />} /> 
          <Route path="/projects/:slug" element={<ProjectDetail/>} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
        <Drift/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

