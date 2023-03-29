import React from "react";
import {Link} from "react-router-dom";
import {tokens} from "../../theme";
import {
    Box,
    CssBaseline,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme
} from "@mui/material";
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
import Header from "../../components/header/Header";


export const dataItems = [
    {
        id: 0,
        title: "Dashboard",
        path: "/",
        icon: <HomeOutlinedIcon/>,
    },
    {
        id: 1,
        title: "Typography",
        path: "/typography",
        icon: <HistoryEduOutlinedIcon/>,
    },
    {
        id: 2,
        title: "Widgets",
        path: "/widgets",
        icon: <WidgetsOutlinedIcon/>,
    },
    {
        id: 3,
        title: "Tables",
        path: "/tables",
        icon: <TableChartOutlinedIcon/>,
    },
    {
        id: 4,
        title: "Forms",
        path: "/forms",
        icon: <FeedOutlinedIcon/>,
    },
    {
        id: 5,
        title: "User Interface",
        path: "/userInterface",
        icon: <OpenInBrowserOutlinedIcon/>,
    },
    {
        id: 6,
        title: "Javascript Components",
        path: "/javascriptComponents",
        icon: <TerminalOutlinedIcon/>,
    },
    {
        id: 7,
        title: "Charts and Maps",
        path: "/graphics",
        icon: <TrendingUpOutlinedIcon/>,
    },
    {
        id: 8,
        title: "Photo Gallery",
        path: "/photoGallery",
        icon: <CollectionsOutlinedIcon/>,
    },
    {
        id: 9,
        title: "Calendar",
        path: "/calendar",
        icon: <CalendarTodayOutlinedIcon/>,
    },
    {
        id: 10,
        title: "Sample Pages",
        path: "/samplePage",
        icon: <PagesOutlinedIcon/>,
    }
]


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                width: "260px",
                height: "100%"
            }}
        >
            <CssBaseline/>
            <Box textAlign="start"
                 sx={{
                     margin: "10px 0 0 20px",
                 }}
            >
                <Header title='Material' subtitle="admin extended dark"/>

                {/*Buttons sidebar menu*/}
                <Box sx={{
                    margin: "40px 0 0 16px"
                }}
                >
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
                {dataItems.map((item, index) => {
                        const {icon, link, id} = item;
                        return (
                            <List  key={item.id}>
                            <ListItem button
                                      component={Link}
                                      to={item.path}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                        <ListItemText>
                                            {item.title}
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            </List>
                        );
                    }
                )}
        </Box>
    );
};

export default Sidebar;


/*'Dashboard',
         'Typography',
          'Widgets',
           'Tables',
           'Forms',
           'User Interface',
           'Javascript Components',
           'Charts and Maps',
           'Photo Gallery',
           'Calendar',
           'Sample Pages'


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
           */
