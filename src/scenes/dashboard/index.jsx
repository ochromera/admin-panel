import React from 'react';
import {Box, useTheme} from "@mui/material";
import Header from "../../components/header/Header";
import {tokens} from "../../theme";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Box display="flex"
                 justifyContent="space-between"
                 alignItem="center"
                 sx={{color:`${colors.blueAccent[100]}`}}
            >
            <Header title='DASHBOARD' subtitle="Welcome to the unique Material Admin Extended Dark web app experience!"/>
            </Box>
        </Box>
    );
};

export default Dashboard;
