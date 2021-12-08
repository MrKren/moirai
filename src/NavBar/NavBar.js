import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box } from "@mui/system";

import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () =>  {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <Box position="fixed">
            <List>
                <ListItem>
                    <ListItemButton 
                        component={Link}   
                        to="/"
                        selected={selectedIndex === 0}
                        onClick={() => setSelectedIndex(0)}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton 
                        component={Link}   
                        to="/timeline"
                        selected={selectedIndex === 1}
                        onClick={() => setSelectedIndex(1)}
                    >
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Timeline" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton 
                        component={Link}   
                        to="/maps"
                        selected={selectedIndex === 2}
                        onClick={() => setSelectedIndex(2)}
                    >
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary="Maps" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton 
                        component={Link}   
                        to="/about"
                        selected={selectedIndex === 3}
                        onClick={() => setSelectedIndex(3)}
                    >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        component={Link}
                        to="/content"
                        selected={selectedIndex === 4}
                        onClick={() => setSelectedIndex(4)}
                    >
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Content" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default NavBar;