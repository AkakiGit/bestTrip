import React from 'react';
import { Link } from 'react-router-dom';
import bestTripLogo from '../images/trip-logo.svg';
import './Style.css';

const Header = (props) => {
    console.log(props)
    const linkStyle = {
        textDecoration: "none",
        color: "#3d3c3c"
    }

    return <div className="header">
            <div className="logoContainer">
                <img className="logo" src={bestTripLogo} alt="" />
            </div>
            <nav className="navigation">
                <ul>
                    <li className="nav-li">
                        <Link style={ linkStyle } to="/" >მთავარი</Link>
                    </li>
                    <li className="nav-li">
                        <Link style={ linkStyle } to="/topUsers" >Top მომხმარებლები</Link>
                    </li>
                    <li className="nav-li">
                    {
                        props.isAuthorized ? <Link style={ linkStyle } to="/account" >მომხმარებელი</Link> : <Link style={ linkStyle } to="/registration" >რეგისტრაცია</Link>
                    }
                        
                    </li>
                </ul>
            </nav>
    </div>
}

export default Header;