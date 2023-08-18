import React from 'react';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import HomePage from './HomePage'; // Import your page components
import CjenikPage from './CjenikPage';
import KalendarPage from './KalendarPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StickyFooter from './StickyFooter'; // Import the StickyFooter component

function App() {
  return (
<div className="App">
  <div className="Background">
      <Router>
        <ResponsiveAppBar />
        <div className="main-content">
          <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/cjenik" element={<CjenikPage />} />
            <Route path="/kalendar" element={<KalendarPage />} />
          </Routes>
        </div>
      </Router>
      <StickyFooter /> {/* Use the StickyFooter component */}
      </div>
    </div>
  );
}

export default App;