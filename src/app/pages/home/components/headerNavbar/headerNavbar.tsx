import React, { useState } from "react";
import { AboutMe } from "../../../../tabs/aboutMe";
import { Music } from "../../../../tabs/music";
import './style.css';



export const HeaderNavbar = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    
    return (
        <>
            <ul>
                <li
                    className={activeTab === "tab1" ? "active" : ""}
                    onClick={handleTab1}
                >
                    <h5>Home</h5>
                </li>
                <li
                    className={activeTab === "tab2" ? "active" : ""}
                    onClick={handleTab2}
                >
                    <h5>Music</h5>
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <AboutMe /> : <Music />}
            </div>
        </>

    );
};

export default HeaderNavbar;
