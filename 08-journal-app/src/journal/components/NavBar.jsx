import PropTypes from "prop-types";

import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Grid2,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h6" noWrap component="div">
                            JournalApp
                        </Typography>
                        <IconButton color="error">
                            <LogoutOutlined />
                        </IconButton>
                    </Grid2>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

NavBar.propTypes = {
    drawerWidth: PropTypes.number,
};
