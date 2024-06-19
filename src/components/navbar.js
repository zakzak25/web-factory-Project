import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ReactComponent as Logo} from '../svg/logo.svg';

const Navbar = () => {
    return (
        <div className="navigation">
            <Logo width="100" height="100" />
            <nav>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SERVICE</a>
                <a href="#">CONTACT</a>
                <a href="#">BLOG</a>
            </nav>
            <nav>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <input type="text" />
            </nav>
        </div>
    );
};



export default Navbar;