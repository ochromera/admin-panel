import React from "react";
import {Box, Button, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {tokens} from "../../theme";
import Header from "../../components/header/Header";


const NotFound = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
        sx={{
            m:"20px",
        }}
        >
            <Header title='Welcome to Not Found' subtitle=""/>

            <Box sx={{
                position: "absolute",
                top: "40%",
                left: "40%",
            }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "32px",
                        width: "500px",
                        height: "300px",
                    }}
                >
                    <Typography variant="h1">404</Typography>
                    <Typography variant="p" component="h2">Sorry, we couldn't find this page.</Typography>
                    <Box sx={{
                        display: "flex",
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
            </Box>
        </Box>

    )
}

export default NotFound;
