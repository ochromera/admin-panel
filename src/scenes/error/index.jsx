import React from "react";
import {Box, Button, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {tokens} from "../../theme";
// import Header from "../../components/header/Header";


const Error = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                gap: "32px",
                position: "absolute",
                width: "500px",
                height: "300px",
                left: "calc(100% - 55%)",
                top: "calc(100% - 80%)",

            }}
        >

            <Typography variant="h1">404</Typography>
            <Typography variant="p" component="h2">Sorry, we couldn't find this page.</Typography>
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography variant="p" component="h2">Start from:</Typography>
                    <Button
                        type="button"
                            component={Link}
                            to="/"
                            sx={{
                                backgroundColor: `${colors.whiteAccent[500]}`,
                            }}
                    >
                        Go Home
                    </Button>
            </Box>
        </Box>

    )
}

export default Error;
