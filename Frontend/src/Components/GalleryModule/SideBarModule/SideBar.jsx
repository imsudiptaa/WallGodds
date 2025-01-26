import React from "react";
import Logo from "/Logo.svg";
import Mobile from "./img/Mobile.svg";
import Tablet from "./img/Tablet.svg";
import Desktop from "./img/Desktop.svg";
import NavBar from "../../CommonModule/NavBarModule/NavBar";
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.navWithLogo}>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <NavBar></NavBar>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.listContainer}>
                    <ul className={styles.verticalList}>
                        <li>
                            <img src={Mobile} alt="Mobile" />
                        </li>
                        <li>
                            <img src={Tablet} alt="Tablet" />
                        </li>
                        <li>
                            <img src={Desktop} alt="Desktop" />
                        </li>
                    </ul>
                </div>
                <div className={styles.copyright}>
                    <p>@CopyRight</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
