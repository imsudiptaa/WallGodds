import React from "react";
import { Link } from "react-router-dom"; // For routing links
import Logo from "/Logo.svg";
import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={Style.navbarWrapper}>
            {/* Logo Section */}
            <div className={Style.logoContainer}>
                <img className={Style.logo} src={Logo} alt="Logo" />
            </div>
            {/* Navigation Menu */}
            <nav className={Style.navbar}>
                <div className={Style.MainContainer}>
                    <div className={Style.navItems}>
                        <ul className={Style.menu}>
                            <li className={Style.menuItem}>
                                <Link to="/" className={Style.menuLink}>Home</Link> {/* Home link */}
                            </li>
                            <li className={Style.menuItem}>
                                <Link to="/gallery" className={Style.menuLink}>Gallery</Link> {/* Gallery link */}
                            </li>
                            <li className={Style.menuItem}>
                                <Link to="/upload" className={Style.menuLink}>Upload</Link> {/* Upload link */}
                            </li>
                            <li className={Style.menuItem}>
                                <Link to="/aboutus" className={Style.menuLink}>About Us</Link> {/* About Us link */}
                            </li>
                        </ul>
                    </div>
                    <div className={Style.searchContainer}>
                        <input
                            className={Style.searchInput}
                            type="text"
                            placeholder="Search your wallpaper"
                        />
                        <button className={Style.searchButton}>
                            <img src={Search} alt="Search" />
                        </button>
                    </div>
                    <div className={Style.profileContainer}>
                        <button className={Style.profileButton}>
                            <img src={Profile} alt="Profile" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
