import { React } from 'react';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import CheapFlightsPage from './pages/CheapFlightsPage';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/cheap-flights" element={<CheapFlightsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    );
  }
}

export default App;
