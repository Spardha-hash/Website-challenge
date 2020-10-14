import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import Navbar from "./Navbar"

const App =() => {
    return (
        <>
            <Navbar />
            <Home />
            
        </>
    );
};

export default App;
