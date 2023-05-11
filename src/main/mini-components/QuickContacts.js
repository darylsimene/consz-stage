import React, { useEffect, useState } from "react";

import { MdPersonSearch, MdContacts, MdOutlineDialpad, MdOutlineBackspace, MdClear } from "react-icons/md";
import { CSSTransition } from "react-transition-group";

const QuickContacts = () => {
    const [qContactsOptions, setQContactOptions] = useState(false);
    const [numpadPage, setNumpadPage] = useState(false);

    const handleClickQContactsBtn = () => {
        setQContactOptions(!qContactsOptions);
    };

    const changePage = () => {
        setNumpadPage(!numpadPage);
    };

    function Numpad() {
        const [currentValue, setCurrentValue] = useState("");

        const handleButtonClick = (buttonValue) => {
            const newValue = currentValue + buttonValue;
            setCurrentValue(newValue);
        };

        const handleDeleteClick = () => {
            const newValue = currentValue.slice(0, -1);
            setCurrentValue(newValue);
        };

        const handleClearClick = () => {
            setCurrentValue("");
        };

        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.code === "Backspace") {
                    event.preventDefault();
                    handleDeleteClick();
                }
            };
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }, [currentValue]);

        return (
            <div className="numpad-wrapper">
                <div className="input-wrapper">
                    <div className="input-cont">
                        <input type="text" value={currentValue} />
                        <div className="controls-cont">
                            <button onClick={handleDeleteClick}>
                                <MdOutlineBackspace className="icon-15px" />
                            </button>
                            <button onClick={handleClearClick}>
                                <MdClear className="icon-15px" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="numpad-container">
                    <div className="numpad-row flex">
                        <button onClick={() => handleButtonClick("1")}>1</button>
                        <button onClick={() => handleButtonClick("2")}>2</button>
                        <button onClick={() => handleButtonClick("3")}>3</button>
                    </div>
                    <div className="numpad-row flex">
                        <button onClick={() => handleButtonClick("4")}>4</button>
                        <button onClick={() => handleButtonClick("5")}>5</button>
                        <button onClick={() => handleButtonClick("6")}>6</button>
                    </div>
                    <div className="numpad-row flex">
                        <button onClick={() => handleButtonClick("7")}>7</button>
                        <button onClick={() => handleButtonClick("8")}>8</button>
                        <button onClick={() => handleButtonClick("9")}>9</button>
                    </div>
                    <div className="numpad-row flex">
                        <button onClick={() => handleButtonClick("#")}> #</button>
                        <button onClick={() => handleButtonClick("0")}>0</button>
                        <button onClick={() => handleButtonClick("+")}>+</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="q-contacts-cont">
            <MdPersonSearch className="icon-30px" onClick={() => handleClickQContactsBtn()} />
            <CSSTransition
                in={qContactsOptions}
                timeout={200}
                classNames={{
                    enter: "dropdown-enter",
                    enterActive: "dropdown-enter-active",
                    exit: "dropdown-exit",
                    exitActive: "dropdown-exit-active",
                }}
                unmountOnExit
            >
                <div className={`dropdown-qContacts-cont`}>
                    <div className="dropdown-qContacts-header">
                        <div className={`header-icon-cont ${!numpadPage ? "active-icon" : ""}`}>
                            <MdContacts className="icon-20px" onClick={() => changePage()} />
                        </div>
                        <div className={`header-icon-cont ${numpadPage ? "active-icon" : ""}`}>
                            <MdOutlineDialpad className="icon-20px" onClick={() => changePage()} />
                        </div>
                    </div>

                    {!numpadPage ? (
                        <div className="qContacts-wrapper">
                            <div className="input-wrapper">
                                <div className="input-cont">
                                    <input
                                        type="text"
                                        placeholder="Search Quick Contacts"
                                        // onChange={(e) => setSearch(e.target.value)}
                                        // className="input-field"
                                    />
                                    <MdPersonSearch className="icon-15px" id="search-icon" />
                                </div>
                            </div>
                            <div className="qContacts-cont">
                                <h5>Quick Contacts</h5>
                                <div className="qContacts-wrapper">
                                    <p>John Doe</p>
                                    <p>Jane Doe</p>
                                    <p>Daryl Deehan</p>
                                </div>
                                <div className="btn-container">
                                    <button className="tertiary smallprimary-btn">Cancel</button>
                                    <button className="primarybtn smallprimary-btn">Call</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="qContacts-wrapper">
                            <Numpad />
                        </div>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};

export default QuickContacts;
