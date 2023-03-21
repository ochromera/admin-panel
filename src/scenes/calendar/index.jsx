import React from 'react';
import {Box, useTheme} from "@mui/material";
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react'
import Header from "../../components/header/Header";
import {  tokens  } from "../../theme";


const events = [
    { title: 'Meeting', start: new Date() }
]



export default function  MuiCalendar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
             <Header title='Calendar' subtitle="Full Calendar Interactive Page"/>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                eventContent={renderEventContent}
            />
        </Box>
    );
};

function renderEventContent(eventInfo) {
    return (
        <Box>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </Box>
    )
}

