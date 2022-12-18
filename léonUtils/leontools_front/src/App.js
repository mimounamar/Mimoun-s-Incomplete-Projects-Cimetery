import React from 'react';
import {FontStyles} from "./assets/fonts/fonts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import TermsOfService from "./pages/TermsOfService";
import Dashboard from "./pages/Dashboard";

function App() {
        return (
            <>
                <FontStyles/>

                <Router>
                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/CGU" element={<TermsOfService/>}></Route>
                        <Route path="/dashboard" element={<Dashboard/>}></Route>
                    </Routes>
                </Router>
            </>
        );
}

export default App;