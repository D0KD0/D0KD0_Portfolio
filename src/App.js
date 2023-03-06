import './App.css';
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';

function App() {
    return (
      <div>
        <Header />
        <PortfolioContainer />
        <Footer />
      </div>
    );
  }

export default App;
