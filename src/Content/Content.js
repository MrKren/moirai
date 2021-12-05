import { Box } from "@mui/system";

import { Route, Routes } from "react-router-dom";
import About from '../About';
import Home from '../Home';

function Content() {
    return (
        <Box sx={{
            paddingRight: "30px",
            marginLeft: "125px", // must be updated if size of NavBar changes
        }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Box>
    )
}

export default Content;