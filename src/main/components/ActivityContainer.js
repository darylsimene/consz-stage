import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdDialpad } from "react-icons/md";

import StatusDropdown from "../mini-components/StatusDropdown";
import "../css/ActivityContainer.css";
import { AppContext } from "../../App";
import QuickContacts from "../mini-components/QuickContacts";

const ActivityContainer = () => {
    const { userStatus } = useContext(AppContext);

    return (
        <div className="activity-container">
            <div className="top-box">
                <div className="status-box">
                    <div className="flex">
                        <BsPersonCircle className={`icon-30px ${userStatus.toLowerCase()}`} />
                        <div className="nameNstatus-box">
                            <div className="status-badge">
                                <StatusDropdown />
                                <p className={`status-duration ${userStatus.toLowerCase()} `}>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <QuickContacts />
                    </div>
                </div>
            </div>
            <div className="conversation-box h100per ">
                <div className="status-box-text h100per ">
                    {userStatus === "Offline" && (
                        <div className="text-box">
                            <img src="offline.png" alt="You-are-offline" className="img-w300px" />
                            <div>
                                <h5>You're currently unavailable</h5>
                                <p>Set your status to available to start accepting new contacts</p>
                            </div>
                        </div>
                    )}
                    {userStatus === "Online" && (
                        <div className="text-box">
                            <img src="online.png" alt="You-are-online" className="img-w300px" />
                            <div>
                                <h5>You can start a call now.</h5>
                                <button className="primarybtn">
                                    <MdDialpad />
                                    <h5>Outbound Call</h5>
                                </button>
                            </div>
                        </div>
                    )}
                    {userStatus === "Break" && (
                        <div className="text-box">
                            <img src="break.png" alt="You-are-on-break" className="img-w300px" />
                            <h5>You are on break.</h5>
                        </div>
                    )}
                    {userStatus === "Lunch Break" && (
                        <div className="text-box">
                            <img src="lunch-break.png" alt="You-are-online" className="img-w300px" />
                            <h5>Enjoy your lunch!</h5>
                        </div>
                    )}
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
