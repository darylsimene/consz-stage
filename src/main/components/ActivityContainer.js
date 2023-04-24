import React from "react";

import "../css/ActivityContainer.css";

import { BsPersonCircle } from "react-icons/bs";

const ActivityContainer = () => {
    return (
        <div className="activity-container">
            <div className="status-box top-box">
                <BsPersonCircle className="icon-30px" />
                <div className="nameNstatus-box">
                    {/* <div>
                        <p className="name-text">John Daryl Simene</p>
                    </div> */}
                    <div className="status-badge">
                        <p className="status-text">Online</p>
                        <p className="status-duration">5 minutes</p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div className="logs-container">
                <div className="call-logs-container">
                    <div className="contacts-search-container"></div>
                </div>
            </div>
        </div>
    );
};

export default ActivityContainer;
