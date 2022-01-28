import { Box } from "@mui/system";

import { Route, Routes } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import ContentEditor from "../ContentEditor";

function PageLoader() {
  return (
    <Box
      sx={{
        paddingRight: "30px",
        marginLeft: "185px", // must be updated if size of NavBar changes
        width: "100%",
      }}
    >
      <Routes>
        {/* You must reboot local server when adding new routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content-editor" element={<ContentEditor />} />
      </Routes>
    </Box>
  );
}

export default PageLoader;
