import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import Discover from "../page/Discover.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/discover" element={<Discover />} />
            </Routes>

        </BrowserRouter>
    );
}