import ImgCard from "./ImgCards/ImgCard";
import img1 from "./DesktopAssets/img_1.png";
import img2 from "./DesktopAssets/img_2.png";
import img3 from "./DesktopAssets/img_3.png";
import img4 from "./DesktopAssets/img_4.png";
import Styles from "./Desktop.module.css";
const Desktop = () => {
    return (
        <div className={Styles.gallery} >
            <h2>Desktop Devices</h2>
            <div className={Styles.gallery}>
                {/* <div className={Styles.imgCards}>
                    <ImgCard imageSrc={img1} />
                    <ImgCard imageSrc={img2} />
                </div> */}
                {/* <div className={Styles.imgCards}>
                    <ImgCard imageSrc={img3} />
                    <ImgCard imageSrc={img4} />
                </div> */}
            </div>
        </div>
    );
};
export default Desktop;