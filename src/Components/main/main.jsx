import React, { Component } from 'react';
import About from '../about/about';
import Footer from '../footer/footer';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import './main.css';
import { Helmet } from 'react-helmet';
import logo from './main.ico';
class main extends Component {

    render() {
        return (

            <div className='main-main'>
                <Helmet>
                    <title>Hoja de vida - Main</title>
                    <link rel="icon" type="image/png" href={logo} />
                </Helmet>
                <About></About>
                <Experience></Experience>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>

            </div>
        );
    }

}
export default main;