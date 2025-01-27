import ImgCard from "../DesktopSection/ImgCards/ImgCard";
import Styles from "./Mobile.module.css";
import img1 from "./MobileAssets/mobile_wallpaper1.png"
import img2 from "./MobileAssets/mobile_wallpaper2.png"
import img3 from "./MobileAssets/mobile_wallpaper3.png"
import img4 from "./MobileAssets/mobile_wallpaper4.png"
const Mobile = () => {
    return (
        <div>
            <h2>Mobile Devices</h2>
            <div className={Styles.imgCards}>
                <ImgCard imageSrc={img1} />
                <ImgCard imageSrc={img2} />
            </div>
            <div className={Styles.imgCards}>
                <ImgCard imageSrc={img3} />
                <ImgCard imageSrc={img4} />
            </div>
        </div>
    );
};
export default Mobile;