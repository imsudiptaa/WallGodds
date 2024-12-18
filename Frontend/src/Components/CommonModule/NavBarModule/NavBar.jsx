import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={Style.navbar}>
            <div className={Style.MainContainer}>
                <div className={Style.navItems}>
                    <ul className={Style.menu}>
                        <li className={Style.menuItem}>Home</li>
                        <li className={Style.menuItem}>Gallery</li>
                        <li className={Style.menuItem}>Upload</li>
                        <li className={Style.menuItem}>About Us</li>
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
    );
};

export default NavBar;
