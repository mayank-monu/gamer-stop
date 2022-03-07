import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/console.svg';

import './header.styles.scss';
import AppName from "./gamerstop.component";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to = "/">
            <Logo className = 'logo'/>
            <AppName />
        </Link>
        <span className="project-name">GAMER-STOP</span>
        <div className="options">
            <Link className="option" to ="/shop">
                SHOP
            </Link>
            <Link className="option" to ="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>SIGN-OUT</div>
            ):(
                <Link className="option" to = '/sign-in'>SIGN-IN</Link>
            )}
        </div>

    </div>
);

export default Header;