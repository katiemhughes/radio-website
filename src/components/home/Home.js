import React from 'react';
import HeroSection from "../heroSection/HeroSection";
import Cards from '../cards/Cards';
import Schedule from "../schedule/Schedule";
import About from "../about/About";
import {homeObjOne} from "./Data";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div id="home">
            <HeroSection {...homeObjOne} />
            {/* <Cards /> */}
            <Schedule />
            <About />
            <Footer />
        </div>
    )
}

export default Home;