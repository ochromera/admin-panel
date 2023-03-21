import React, { useContext } from 'react';
import {Box, IconButton, Avatar, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import User from "../../assets/avatar.jpg"


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*Search bar*/}
            <Box display='flex'
                 backgroundColor={colors.primary[500]}
                 borderRadius="3px"
            >
                {/*использовать use Ref*/}
                <InputBase
                    sx={{
                        ml: 2,
                        flex: 1,
                        width:"800px",
                    }}
                    placeholder="Search for people, files & report"/>
                <IconButton type="button" sx={{p: 1}}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box>
            {/*ICONS BUTTONS OPEN SIDEBAR */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon/>
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                {/*GRID VIEW MODAL ITEM*/}
                <IconButton type="button" sx={{p: 1}} >
                    <GridViewOutlinedIcon/>
                </IconButton>
                {/*SETTING OPEN RIGHT SIDEBAR  */}
                <IconButton type="button" sx={{p: 1}}>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <Box>
                    {/* open modal  portfolio  */}
                    <IconButton type="button"
                        sx={{
                        padding:'0'
                    }}>
                        <Avatar alt="Remy Sharp" src={User}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;
