<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
// import SideBarWithNav from "./Components/CommonModule/SideBarModule/SideBar";
import SideBarWithNav from "./Components/GalleryModule/SideBarModule/SideBar";
>>>>>>> ef04ae1d0e872aa41412e2bee78c6217ccf8cad0
import Gallery from "./Components/GalleryModule/Gallery";
import "./App.css";
import Home from "./Components/HomeModule/Home";
import Upload from "./Components/UploadModule/Upload";
import Aboutus from "./Components/AboutModule/Aboutus";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/*" element={<Gallery />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
        </Router>
    );
}

export default App;
