import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";

import StatusDropdown from "../mini-components/StatusDropdown";
import "../css/ActivityContainer.css";
import { AppContext } from "../../App";

const ActivityContainer = () => {
    const { userStatus, setUserStatus } = useContext(AppContext);

    return (
        <div className="activity-container">
            <div className="top-box">
                <div className="status-box">
                    <BsPersonCircle className="icon-30px" />
                    <div className="nameNstatus-box">
                        <div className="status-badge">
                            <StatusDropdown />
                            <p className="status-duration">5 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conversation-box h100per ">
                <div className="on-break-box h100per ">
                    <div className="text-box">
                        <img src="offline.png" alt="You-are-offline" className="img-w300px" />
                        <h5>You are offline</h5>
                    </div>
                </div>
            </div>
            {/* <div className="logs-container">
                <div className="call-logs-container">
                    <div className="contacts-search-container"></div>
                </div>
            </div> */}
        </div>
    );
};

export default ActivityContainer;
