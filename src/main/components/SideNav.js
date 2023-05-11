import React, { useEffect, useContext, createContext } from "react";
import { AppContext } from "../../App";

import { MdOutlineCallEnd, MdPhone, MdSettings, MdLogout } from "react-icons/md";

const SideNav = () => {
    const { isCalling, setIsCalling } = useContext(AppContext);

    useEffect(() => setIsCalling(false), []);

    const handleIsCalling = () => {
        setIsCalling(!isCalling);
        isCalling ? console.log(`someone calling`) : console.log(`idle`);
    };

    return (
        <div className="side-nav">
            <div className="top-box">
                <img src="sz-circleIcon.png" className="icon-30px" alt="LEAP-logo" />
            </div>

            {isCalling ? (
                <MdOutlineCallEnd onClick={() => handleIsCalling()} className="icon-30px" />
            ) : (
                <MdPhone onClick={() => handleIsCalling()} className="icon-30px" />
            )}

            <div className="botsidenav gridflexgap20px">
                <MdSettings className="icon-30px" />
                <MdLogout className="icon-30px" />
            </div>
        </div>
    );
};

export default SideNav;
