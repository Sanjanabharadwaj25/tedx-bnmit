import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/layout/Footer";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
function Landing(){
    return <>
    <Navbar/>
    <Hero/>
    <About/>
    <Events/>
    <Gallery/>
    <Footer/>

    </>
}

export default Landing;