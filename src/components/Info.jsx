import React from "react";
import headshot from "../assets/headshot.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "./componentCSS/Info.css";

export default function Info() {
    return (
        <section role="personalInfo" className="info">
            <img className="headshot" src={headshot}/>
            <h1>Francis W. Bell</h1>
            <p className="subheading">Web Developer</p>
            <p className="github-url"><a href="https://github.com/fbell884">https://github.com/fbell884</a></p>
            <div className="url-container">
                <a href="mailto:fbell884@gmail.com" className="email"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email</a>
                <a href="https://www.linkedin.com/in/francis-bell/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn</a>
            </div>
        </section>
    )
}