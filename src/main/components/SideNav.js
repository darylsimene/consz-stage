import { BsChat, BsTelephone, BsEnvelopeAt, BsGear } from "react-icons/bs";
import { MdSettings, MdLogout } from "react-icons/md";

import React from "react";

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="top-box">
                <img src="sz-circleIcon.png" className="icon-30px" alt="LEAP-logo" />
            </div>

            <div className="botsidenav gridflexgap20px">
                <MdSettings className="icon-30px" />
                <MdLogout className="icon-30px" />
            </div>
        </div>
    );
};

export default SideNav;
