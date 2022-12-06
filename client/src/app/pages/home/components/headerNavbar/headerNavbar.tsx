import React, { useState } from "react";
import { AboutMe } from "../../../../tabs/aboutMe";
import { Music } from "../../../../tabs/music";
import { Contact } from "../../../../tabs/contact";

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
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("tab3");
    };

    // switch(activeTab){
    //     case 'tab1': {
    //       <AboutMe />
    //       break;
    //     }
    //     case 'tab2': {
    //       <Music />
    //       break;
    //     }
    //     case 'tab3': {
    //       <Contact />
    //       break;
    //     }
    // }
    
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
                <li
                    className={activeTab === "tab3" ? "active" : ""}
                    onClick={handleTab3}
                >
                    <h5>Contact</h5>
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <AboutMe /> : ''}
                {activeTab === "tab2" ? <Music /> : ''}
                {activeTab === "tab3" ? <Contact /> : ''}
            </div>
        </>

    );
};

export default HeaderNavbar;
