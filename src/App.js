import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Slider } from './Slider';
import { Caractrese } from './Caractrese';
import { Reviews } from './Reviews';
import { HowToDownload } from './HowToDownload';
import { Footer } from './Footer';
import { Link } from 'react-scroll';
import { ContactUs } from './ContactUs';

function App() {
  return (
    <div className="App">

      <div id="page-wrap">

        {/* header */}
        <Header />

        <Slider />

        <Caractrese />


        <Reviews />
        <HowToDownload />
        <ContactUs />
        <Footer />






      </div>

    </div>
  );
}

export default App;
