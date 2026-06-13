import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import Discover from "../page/Discover.tsx";
import ProductDetail from "../page/ProductDetail.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/discover" element={<Discover />} />
                <Route path="/Details" element={<ProductDetail />} />
            </Routes>

        </BrowserRouter>
    );
}