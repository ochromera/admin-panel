import React from "react";
import {Box, Grid, useTheme} from "@mui/material";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {tokens} from "../../theme";
import Image from "mui-image";
import ImageGoldenGate from "../../assets/golden-gate.jpg";




/*Подключение библиотечки highcharts
* method fetch()
* create 7 block chartsMaps and maps
*с использованием api
* и несколько статичных
* и создать функцию которая сама генерирует рандомные данные .
*
*  */

const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3, 20, 21, 30 , 22, 1 , 33, 40 ]
    }]
}


// использовать метод fetch()  для подключения api  и вывода данных в график
// использовать  метод map() для генерации рандомных чисел и вывода данных в график
// использовать mockData

const Chart = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Grid
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridColumnGap: "10px",
                    gridRowGap: "10px",
                }}
            >
                <Grid>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </Grid>
                <Grid>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </Grid>
            </Grid>
            <Box sx={{
               marginTop:"10px",
            }}>
                <Grid
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows:"repeat(2, 1fr)",
                        gridColumnGap: "10px",
                        gridRowGap: "10px",
                    }}
                >
                    <Grid>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </Grid>
                    <Grid>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </Grid>
                    <Grid>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </Grid>
                    <Grid>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </Grid>
                    <Grid>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </Grid>
                    <Grid>
                        <Image alt="Golden Gate"
                               src={ImageGoldenGate}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Chart;
