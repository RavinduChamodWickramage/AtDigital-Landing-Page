import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
