import ImgCard from "./ImgCards/ImgCard";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import img3 from "../../assets/img_3.png";
import img4 from "../../assets/img_4.png";
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
