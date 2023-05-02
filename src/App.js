// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./main/components/Home";
import CCP from "./main/components/CCP";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ccp" element={<CCP />} />

            </Routes>
        </div>
    );
}

export default App;
