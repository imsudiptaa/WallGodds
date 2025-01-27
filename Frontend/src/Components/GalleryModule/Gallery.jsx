import React from "react"
import ImgCard from "./DesktopSection/ImgCards/ImgCard"
import img1 from "./DesktopSection/DesktopAssets/img_1.png"
import img2 from "./DesktopSection/DesktopAssets/img_2.png"
import img3 from "./DesktopSection/DesktopAssets/img_3.png"
import img4 from "./DesktopSection/DesktopAssets/img_4.png"
import Styles from "./Gallery.module.css"
import NavBar from "../CommonModule/NavBarModule/NavBar"
import { Routes, Route } from "react-router-dom"
import Mobile from "./MobileSection/Mobile"
import Tablet from "./TabletSection/Tablet"
import Desktop from "./DesktopSection/Desktop"
import SideBar from "./SideBarModule/SideBar"

const Gallery = () => {
    return (
        <div>
            <NavBar />
            <div className={Styles.mainContent}>
                <SideBar />
                <div className={Styles.galleryContent}>
                    <Routes>
                        <Route path="mobile" element={<Mobile />} />
                        <Route path="tablet" element={<Tablet />} />
                        <Route path="desktop" element={<Desktop />} />
                        <Route
                            path=""
                            element={
                                <div className={Styles.gallery}>
                                    <div className={Styles.imgCards}>
                                        <ImgCard imageSrc={img1} />
                                        <ImgCard imageSrc={img2} />
                                    </div>
                                    <div className={Styles.imgCards}>
                                        <ImgCard imageSrc={img3} />
                                        <ImgCard imageSrc={img4} />
                                    </div>
                                    <div className={Styles.imgCards}>
                                        <ImgCard imageSrc={img1} />
                                        <ImgCard imageSrc={img2} />
                                    </div>
                                    <div className={Styles.imgCards}>
                                        <ImgCard imageSrc={img3} />
                                        <ImgCard imageSrc={img4} />
                                    </div>
                                </div>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Gallery

