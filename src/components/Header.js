import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => {
    return (
        <header className="header">
            <ul className="header__mainHeader">
                <li>
                    <div className="logo">
                        <Link to="/">
                            <img src="/LAVIE-removebg-logo.png" alt="LAVIE Logo" className="logo-img" />
                        </Link>
                    </div>
                </li>
                <li>
                <ul className="listNav GeneralNav">
                        {props.props_nav.map(
                            props_nav => {
                                if( props_nav.isGeneralNavigation)
                                return(
                                    <button>
                                        <Link to = {props_nav.path}>{props_nav.nav_name}</Link>
                                    </button>
                                    )
                                }
                            )
                        }
                    </ul>
                </li>
            </ul>
            <ul className="header__subtitleHeader">
                <ul className="listNav UserNav">
                    {
                    props.props_nav.map(
                        props_nav => {
                            if( !props_nav.isGeneralNavigation)
                            return(
                                <button >
                                    <Link to={props_nav.path}>{props_nav.nav_name}</Link>
                                </button>
                            )
                        }
                    )
                    }
                </ul>
            </ul>
        </header>
    );
};

export default Header;
  