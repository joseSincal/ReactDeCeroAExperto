import PropTypes from "prop-types";
import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                padding: 4,
            }}
        >
            <Grid2
                className="box-shadow"
                size={9}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>

                {/* Children */}
                {children}
            </Grid2>
        </Grid2>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};
