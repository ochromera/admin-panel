import React from "react";
import { Grid, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Image from "mui-image";
import Gate from "../../assets/golden-gate.jpg";

/*Подключение библиотечки highcharts
* method fetch()
* create 7 block chart and maps
*с использованием api
* и несколько статичных
* и создать функцию которая сама генерирует рандомные данные .
*
*  */


const Chart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Grid>
            <Grid
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridColumnGap: "10px",
                    gridRowGap: "10px",
                    height: "200px"
                }}

            >
                <Grid xs={8}>
                    <Typography>BTC</Typography>
                </Grid>
                <Grid xs={8}>
                    <Typography>XRP</Typography>
                </Grid>
            </Grid>


            <Grid sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gridColumnGap: "10px",
                gridRowGap: "10px",
            }}
            >
                <Grid xs={4}>
                    <Typography>Views</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography>Impressions</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography>Sales</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography>Real time visitors</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography>Geography</Typography>
                </Grid>
                <Grid xs={4}>
                        <Image alt="Golden Gate"
                               src={Gate}
                               width={600}
                               height={200}
                        />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Chart;
