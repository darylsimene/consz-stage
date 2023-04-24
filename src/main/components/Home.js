import React from "react";
import SideNav from "./SideNav";

import "../css/SideNav.css";
import ActivityContainer from "./ActivityContainer";

const Home = () => {
    return (
        <div className="main-container">
            <SideNav />
            <ActivityContainer />
        </div>
    );
};

export default Home;
