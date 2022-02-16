import React from "react";
import "../Styles/Pages/Home.scss";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Portafolio from "../Components/Portafolio";
import Contact from "../Components/Contact";
// import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="root">
      <Header />
      <Hero />
      {/* <Portafolio /> */}
      {/* <Contact /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
