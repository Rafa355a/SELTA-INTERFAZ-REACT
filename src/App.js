// src/App.js
import React from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Diseño from './components/Diseño';

function App() {
  return (
    <div className="App">
      <Header />
      <HowItWorks />
      <Diseño /> {/* Agregamos el componente Diseño justo debajo de HowItWorks */}
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
