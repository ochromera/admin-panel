import React from "react";
import { Routes, Route } from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard"
import Typography from "./scenes/typography";
import Widgets from "./scenes/widgets";
import Tables from "./scenes/tables";
import Forms from "./scenes/forms";
import UserInterface from "./scenes/ui";
import  JavascriptComponents from "./scenes/jscomponents";
import Graphics from "./scenes/graphics";
import PhotoGallery from "./scenes/gallery";
import Calendar from "./scenes/calendar";
import SamplePage from "./scenes/pages";

import './App.css';


function App() {
    const [theme, colorMode] = useMode();

    return (<ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                        <Sidebar/>
                   <main className="content">
                       <Topbar/>
                       <Routes>
                           <Route path="/" element={<Dashboard />}/>
                           <Route path="/typography" element={<Typography />}/>
                           <Route path="/widgets" element={<Widgets />}/>
                           <Route path="/tables" element={<Tables />}/>
                           <Route path="/forms" element={<Forms />}/>
                           <Route path="/userInterface" element={<UserInterface />}/>
                           <Route path="/javascriptComponents" element={<JavascriptComponents />}/>
                           <Route path="/graphics" element={<Graphics />}/>
                           <Route path="/photoGallery" element={<PhotoGallery />}/>
                           <Route path="/calendar" element={<Calendar />}/>
                           <Route path="/samplePage" element={<SamplePage />}/>
                       </Routes>
                   </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
