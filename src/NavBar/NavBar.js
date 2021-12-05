import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";

const NavBar = () =>  {
    return(
        <Box sx={{
            position: "fixed",
        }}>
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
    )
}

export default NavBar;