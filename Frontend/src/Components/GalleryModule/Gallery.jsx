import ImgCard from "./ImgCards/ImgCard";
import Styles from "./Gallery.module.css";

const Gallery = () => {
    return (
        <div className={Styles.gallery}>
            <div className={Styles.imgCards}>
                <ImgCard />
                <ImgCard />
            </div>
            <div className={Styles.imgCards}>
                <ImgCard />
                <ImgCard />
            </div>
        </div>
    );
};

export default Gallery;