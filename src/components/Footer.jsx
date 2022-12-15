import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
import "./componentCSS/Footer.css";

export default function Info() {
    return (
        <footer className="footer">
            <div className="icon-container">
                <FontAwesomeIcon icon={faSquareFacebook} />
                <FontAwesomeIcon icon={faSquareGithub} />
                <FontAwesomeIcon icon={faSquareInstagram}/>
                <FontAwesomeIcon icon={faSquareTwitter}/>
            </div>
        </footer>
    )
}