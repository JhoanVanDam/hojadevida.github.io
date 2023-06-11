import React, { Component } from 'react';
import Navbarstatic from '../navbarstatic/navbarstatic';
import About from '../about/about';
import styles from './main.css';

class main extends Component {

    render() {
        return (
            <div className='main-main'>
                <Navbarstatic></Navbarstatic>
                <About></About>
            </div>
        );
    }

}
export default main;