import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MalesTabagismo from "./pages/MalesTabagismo"
import Consequencias from "./pages/Consequencias"
import ComoParar from "./pages/ComoParar"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MalesTabagismo />} />
                <Route path="/consequencias" element={<Consequencias />} />
                <Route path="/como-parar" element={<ComoParar />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
