import React from 'react';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {Menu, ProSidebar} from 'react-pro-sidebar';

import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../../theme";


const MSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{
            backgroundColor: `${colors.darkGreenAccent[500]} !important`,
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


            <ProSidebar>
                <Menu>
                    <Box>
                        <Box>
                            <Typography>MESSAGES</Typography>
                            <IconButton>
                                <KeyboardBackspaceOutlinedIcon/>
                            </IconButton>
                            <IconButton>
                                <AddCircleOutlineOutlinedIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default MSidebar;
