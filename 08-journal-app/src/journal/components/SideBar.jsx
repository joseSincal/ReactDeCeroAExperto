import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    Grid2,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Jose Sincal
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text} />
                                    <ListItemText
                                        secondary={
                                            "Neque porro quisquam est qui dolorem ipsum"
                                        }
                                    />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
};
