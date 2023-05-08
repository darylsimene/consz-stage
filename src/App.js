// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./main/components/Home";
import CCP from "./main/components/CCP";
import Login from "./main/components/Login";
import Testing from "./main/components/Testing";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ccp" element={<CCP />} />
                <Route path="/testing" element={<Testing />} />

            </Routes>
        </div>
    );
}

export default App;
