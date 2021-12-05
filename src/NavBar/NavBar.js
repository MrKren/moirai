import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
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
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/timeline">
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Timeline" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/maps">
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary="Maps" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/about">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default NavBar;