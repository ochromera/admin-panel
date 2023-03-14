import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChart";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInBrowserOutlinedIcon from "@mui/icons-material/OpenInBrowserOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PagesOutlinedIcon from "@mui/icons-material/PagesOutlined";
import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import TaskOutlined from "@mui/icons-material/TaskOutlined";

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={selected === title}
                  style={{color: colors.blueAccent[100]}}
                  onClick={() => setSelected(title)}
                  icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
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
            }}
        >
            <ProSidebar>
                <Menu>
                    {/*LOGO*/}
                    <Box sx={{
                        color:`${colors.whiteAccent[100]}`
                    }}>
                        <Box textAlign="start"
                             sx={{
                                 margin: "10px 0 0 20px",
                             }}
                        >
                            <Typography variant='h4' sx={{

                            }}>
                                Material
                            </Typography>
                            <Typography variant="h6"
                                        noWrap

                            >
                                admin extended dark
                            </Typography>
                        </Box>

                    {/*Buttons menu*/}
                    <Box sx={{
                        margin: "40px 0 0 16px"
                    }}>
                        {/*Button mail*/}
                        <IconButton>
                            <MailOutlineOutlined/>
                        </IconButton>
                        {/*Button notification*/}
                        <IconButton>
                            <NotificationsNoneOutlined/>
                        </IconButton>
                        {/*Button task*/}
                        <IconButton>
                            <TaskOutlined/>
                        </IconButton>
                    </Box>
                    </Box>
                    <Box sx={{
                        marginTop:"20px"
                    }}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon sx={{
                                color:`${colors.blueAccent[500]}`
                            }}
                            />
                            }
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Typography"
                            to="/typography"
                            icon={<HistoryEduOutlinedIcon sx={{
                                color:`${colors.pinkAccent[500]}`
                            }}/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Widgets"
                            to="/widgets"
                            icon={<WidgetsOutlinedIcon
                                sx={{
                                    color:`${colors.greenAccent[500]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Tables"
                            to="/tables"
                            icon={<TableChartOutlinedIcon
                                sx={{
                                    color:`${colors.yellowAccent[500]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Forms"
                            to="/forms"
                            icon={<FeedOutlinedIcon
                                sx={{
                                    color:`${colors.purpleAccent[500]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="User Interface"
                            to="/userInterface"
                            icon={<OpenInBrowserOutlinedIcon
                                sx={{
                                    color:`${colors.greenAccent[400]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Javascript Components"
                            to="/javascriptComponents"
                            icon={<TerminalOutlinedIcon
                                sx={{
                                    color:`${colors.pinkAccent[600]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Charts and Maps"
                            to="/graphics"
                            icon={<TrendingUpOutlinedIcon
                                sx={{
                                    color:`${colors.greenAccent[600]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Photo Gallery"
                            to="/photoGallery"
                            icon={<CollectionsOutlinedIcon
                                sx={{
                                    color:`${colors.blueAccent[300]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon
                                sx={{
                                    color:`${colors.greenAccent[400]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Sample Pages"
                            to="/samplePage"
                            icon={<PagesOutlinedIcon
                                sx={{
                                    color:`${colors.pinkAccent[400]}`
                                }}
                            />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
