import React from "react";
import './Navbar.css'

function Navbar() {
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="logo">
                    <a>HiPeng</a>
                </div>
            </div>
            <div className="rightSide">
                <div className="links">
                    <a href="#">Project</a>
                    <a href="#">About Me</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar