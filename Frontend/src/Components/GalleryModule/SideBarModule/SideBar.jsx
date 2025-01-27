import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import Mobile from "./img/Mobile.svg";
import Tablet from "./img/Tablet.svg";
import Desktop from "./img/Desktop.svg";
import styles from "./SideBar.module.css"; // Correct path for styles

const SideBar = () => {
    // State to track the active list item
    const [activeItem, setActiveItem] = useState("");

    // Function to handle item click
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.mainContainer}>
                <div className={styles.navWithLogo}>
                    {/* Add your logo component here if needed */}
                </div>
                <div className={styles.listContainer}>
                    <ul className={styles.verticalList}>
                        <li
                            className={`${styles.listItem} ${activeItem === "mobile" ? styles.active : ""}`}
                            onClick={() => handleItemClick("mobile")}
                        >
                            <Link to="/gallery/mobile">
                                <img src={Mobile} alt="Mobile" />
                            </Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${activeItem === "tablet" ? styles.active : ""}`}
                            onClick={() => handleItemClick("tablet")}
                        >
                            <Link to="/gallery/tablet">
                                <img src={Tablet} alt="Tablet" />
                            </Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${activeItem === "desktop" ? styles.active : ""}`}
                            onClick={() => handleItemClick("desktop")}
                        >
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
