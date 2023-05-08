import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import { CSSTransition } from "react-transition-group";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const StatusDropdown = () => {
    const { userStatus, setUserStatus } = useContext(AppContext);
    const [statusList, setStatusList] = useState(false);
    // Define a state variable for the user's status

    // Define a function to handle selecting a new user status
    const handleSelectStatus = (newStatus) => {
        setUserStatus(newStatus);
    };

    // Define an array of all possible statuses
    const allStatuses = ["Online", "Offline", "Break", "Lunch Break"];

    // Filter out the current user status from the array of all statuses
    const otherStatuses = allStatuses.filter((status) => status !== userStatus);

    // Render the dropdown component
    return (
        <div className="dropdown-container">
            <button className="dropdown-btn" onClick={() => setStatusList(!statusList)}>
                {userStatus === "" && setUserStatus("Online")}
                <p>{userStatus}</p>
                {statusList ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </button>

            <CSSTransition
                in={statusList}
                timeout={200}
                classNames={{
                    enter: "dropdown-enter",
                    enterActive: "dropdown-enter-active",
                    exit: "dropdown-exit",
                    exitActive: "dropdown-exit-active",
                }}
                unmountOnExit
            >
                <div className={`dropdown-ul-container`}>
                    <ul className="dropdown-ul ">
                        {otherStatuses.map((status) => (
                            <li key={status} onClick={() => handleSelectStatus(status)}>
                                <p>{status}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
};

export default StatusDropdown;
