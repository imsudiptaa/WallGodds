import React from "react";
import { Link } from "react-router-dom"; // For navigation
import Mobile from "./img/Mobile.svg";
import Tablet from "./img/Tablet.svg";
import Desktop from "./img/Desktop.svg";
import styles from "./SideBar.module.css"; // Correct path for styles

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.mainContainer}>
                <div className={styles.listContainer}>
                    <ul className={styles.verticalList}>
                        {/* Link to respective gallery pages */}
                        <li>
                            <Link to="/gallery/mobile">
                                <img src={Mobile} alt="Mobile" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery/tablet">
                                <img src={Tablet} alt="Tablet" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery/desktop">
                                <img src={Desktop} alt="Desktop" />
                            </Link>
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
