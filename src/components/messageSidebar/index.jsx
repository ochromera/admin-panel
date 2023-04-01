import React,{useState}  from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Menu, ProSidebar,MenuItem,} from 'react-pro-sidebar';

import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../../theme";
import Header from "../header/Header";


const MSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                backgroundColor: `${colors.darkGreenAccent[500]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: `transparent !important`
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: `${colors.blueAccent[500]} !important`
            },
        }}>


            <ProSidebar
                sx={{
                display: 'flex',
                    height: "100vh"
            }}

            >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:`${colors.primary[500]}`,
                }}>
                    {/*button comeback*/}
                    <IconButton>
                        <KeyboardBackspaceOutlinedIcon/>
                    </IconButton>
                    <Header title='MESSAGES' subtitle="Unread messages"/>
                    {/*button closed */}
                    <IconButton>
                        <AddCircleOutlineOutlinedIcon/>
                    </IconButton>
                </Box>
                <Menu>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default MSidebar;
