import React, { Component } from 'react';
import Navbarstatic from '../navbarstatic/navbarstatic';
import About from '../about/about';
import Footer from '../footer/footer';
import Skills from '../skills/skills';
import styles from './main.css';

class main extends Component {

    render() {
        return (
            <div className='main-main'>
                <About></About>
                <Skills></Skills>   
                <Footer></Footer>


            </div>
        );
    }

}
export default main;