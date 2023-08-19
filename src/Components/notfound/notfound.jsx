import React, { Component } from "react";
import './notfound.css';
import notfoundico2 from './error-404.webp';
import Footer from '../footer/footer';
class notfound extends Component {
    render() {
        return (
            <div className="not-found-main">
                <label>Not found</label>
                <img alt="logo" src={notfoundico2} />
                <Footer />
            </div>

        );
    }
}
export default notfound;