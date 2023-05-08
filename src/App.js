import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./main/components/Home";
import CCP from "./main/components/CCP";
import Login from "./main/components/Login";
import Testing from "./main/components/Testing";

// import AwsConnectLogin from "./main/components/AwsConnectLogin";

export const AppContext = createContext();

function App() {
    const [userStatus, setUserStatus] = useState("");

    return (
        <div className="App">
            <AppContext.Provider value={{ userStatus, setUserStatus }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ccp" element={<CCP />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/testing" element={<Testing />} />

                    {/* <Route path="/aws-connect" element={<AwsConnectLogin />} /> */}
                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
