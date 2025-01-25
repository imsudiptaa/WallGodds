import ImgCard from "./DesktopSection/ImgCards/ImgCard";
import img1 from "./DesktopSection/DesktopAssets/img_1.png";
import img2 from "./DesktopSection/DesktopAssets/img_2.png";
import img3 from "./DesktopSection/DesktopAssets/img_3.png";
import img4 from "./DesktopSection/DesktopAssets/img_4.png";
import Styles from "./Gallery.module.css";

const Gallery = () => {
    return (
        <div className={Styles.gallery}>
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

export default Gallery;
