import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "../css/ActivityContainer.css";

import { BsPersonCircle } from "react-icons/bs";

function StatusDropdown() {
    return (
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Online
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Break</Dropdown.Item>
                <Dropdown.Item>Lunch Break</Dropdown.Item>
                <Dropdown.Item>Offline</Dropdown.Item>
                <Dropdown.Item>Coaching</Dropdown.Item>
                <Dropdown.Item>Outbound</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

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
                        <StatusDropdown />
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
