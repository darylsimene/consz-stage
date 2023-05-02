// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./main/components/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
