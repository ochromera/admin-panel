import React from "react";
import {Route, Routes} from "react-router-dom";
import { ColorModeContext, useMode} from "./theme";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard"
import Typography from "./scenes/typography";
import Widgets from "./scenes/widgets";
import Tables from "./scenes/tables";
import Forms from "./scenes/forms";
import UserInterface from "./scenes/ui";
import JavascriptComponents from "./scenes/jscomponents";
import Graphics from "./scenes/graphics";
import Gallery from "./scenes/gallery";
import MuiCalendar from "./scenes/calendar";
import SamplePage from "./scenes/pages";
import NotFound from "./scenes/notFound";

import './App.css';


function App() {
    const [theme, colorMode] = useMode();

    return (
        <React.StrictMode>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box className="app">
                    <Sidebar/>
                    <Box className="content">
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/typography" element={<Typography/>}/>
                            <Route path="/widgets" element={<Widgets/>}/>
                            <Route path="/tables" element={<Tables/>}/>
                            <Route path="/forms" element={<Forms/>}/>
                            <Route path="/userInterface" element={<UserInterface/>}/>
                            <Route path="/javascriptComponents" element={<JavascriptComponents/>}/>
                            <Route path="/graphics" element={<Graphics/>}/>
                            <Route path="/photoGallery" element={<Gallery/>}/>
                            <Route path="/calendar" element={<MuiCalendar/>}/>
                            <Route path="/samplePage" element={<SamplePage/>}/>
                            <Route path='/*' element={<NotFound/>}/>
                        {/* Создать компонент страницы ошибок  с hok useRouteError  */}
                        </Routes>
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
        </React.StrictMode>

    );
}

export default App;
