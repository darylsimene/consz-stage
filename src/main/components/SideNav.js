import { BsChat, BsTelephone, BsEnvelopeAt, BsGear } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

import React from "react";

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="topsidenav">
                <div className="top-box">
                    <img src="sz-circleIcon.png" className="icon-30px top-box" alt="LEAP-logo" />
                </div>
                <div className="gridflexgap20px">
                    <BsChat className="icon-30px" />
                    <BsTelephone className="icon-30px" />
                    <BsEnvelopeAt className="icon-30px" />
                </div>
            </div>
            <div className="botsidenav gridflexgap20px">
                <MdLogout className="icon-30px" />
                <BsGear className="icon-30px" />
            </div>
        </div>
    );
};

export default SideNav;
