import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./main/components/Home";

export const AppContext = createContext();

function App() {
    const [userStatus, setUserStatus] = useState("");
    const [isCalling, setIsCalling] = useState("");

    return (
        <div className="App">
            <AppContext.Provider value={{ userStatus, setUserStatus, isCalling, setIsCalling }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/aws-connect" element={<AwsConnectLogin />} /> */}
                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
