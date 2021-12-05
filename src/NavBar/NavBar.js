import { Grid } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";


import { Route, Routes, Link } from "react-router-dom";
import About from '../About';
import Home from '../Home';

function NavBar() {
    return(
        <div style={{ display: "flex", flexDirection: "row"}}>
            <Box>
            <List>
                <ListItem>
                    <ListItemButton component={Link} to="/">
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/timeline">
                        <ListItemText primary="Timeline" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/maps">
                        <ListItemText primary="Maps" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/about">
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
            <Grid 
                container 
                spacing={2} 
                direction="column" 
                alignItems="center" 
                justify="center" 
            >
                <Grid item>
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    </Routes>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavBar;