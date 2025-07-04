import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EventSchedule from './pages/EventSchedule';
import AboutEvent from './pages/AboutEvent';
import Workshops from './pages/Workshops';
import Booths from './pages/Booths';
import MeetTheTeam from './pages/MeetTheTeam';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-black via-primary-navy to-primary-purple">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<EventSchedule />} />
          <Route path="/about" element={<AboutEvent />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/booths" element={<Booths />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;