import {FontStyles} from "./assets/fonts";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import SetupTutorAvailability from "./pages/SetupTutorAvailability";
import SetupTutoredAvailability from "./pages/SetupTutoredAvailability";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <FontStyles/>
            <GoogleOAuthProvider clientId="910646973872-96rfc0oggtrqsi4i3u0f9g5ricd11p1n.apps.googleusercontent.com">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/documentation" element={<Documentation/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </GoogleOAuthProvider>

        </>
    );
}

export default App;
