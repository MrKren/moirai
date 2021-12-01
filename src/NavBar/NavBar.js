import { Route, Routes, Link } from "react-router-dom";
import About from '../About';
import Home from '../Home';

function NavBar() {
    return(
        <div>
            <div>
                <nav>
                <ul id="navigation">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                </nav>
            </div>
            <div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </div>
    )
}

export default NavBar;