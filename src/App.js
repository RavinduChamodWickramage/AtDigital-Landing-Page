import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Services from "./Components/ServiceSection/Services";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
