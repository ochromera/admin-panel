import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material";

export const tokens = (mode) => ({
    ...(mode === 'dark'
            ? {
        //основной цвет
                primary: {
                    100: "#d2d4d6",
                    200: "#a5aaad",
                    300: "#787f83",
                    400: "#4b555a",
                    500: "#1e2a31",
                    600: "#182227",
                    700: "#12191d",
                    800: "#0c1114",
                    900: "#06080a"
                },
                darkGreenAccent: {
                    100: "#d3d6d8",
                    200: "#a7adb0",
                    300: "#7a8389",
                    400: "#4e5a61",
                    500: "#22313a",
                    600: "#1b272e",
                    700: "#141d23",
                    800: "#0e1417",
                    900: "#070a0c"
                },

                whiteAccent: {
                    100: "#f9ffff",
                    200: "#f3ffff",
                    300: "#eeffff",
                    400: "#e8ffff",
                    500: "#e2ffff",
                    600: "#b5cccc",
                    700: "#889999",
                    800: "#5a6666",
                    900: "#2d3333"
                },
                blueAccent: {
                    100: "#d3e9fd",
                    200: "#a7d3fb",
                    300: "#7abcf8",
                    400: "#4ea6f6",
                    500: "#2290f4",
                    600: "#1b73c3",
                    700: "#145692",
                    800: "#0e3a62",
                    900: "#071d31"
                },
                blackAccent: {
                    100: "#d9d6d7",
                    200: "#b3adaf",
                    300: "#8d8388",
                    400: "#675a60",
                    500: "#413138",
                    600: "#34272d",
                    700: "#271d22",
                    800: "#1a1416",
                    900: "#0d0a0b"
                },
                greenAccent: {
                    100: "#d4e5db",
                    200: "#a8cbb6",
                    300: "#7db292",
                    400: "#51986d",
                    500: "#267e49",
                    600: "#1e653a",
                    700: "#174c2c",
                    800: "#0f321d",
                    900: "#08190f"
                },
                yellowAccent: {
                    100: "#ece6d5",
                    200: "#d9cdaa",
                    300: "#c5b480",
                    400: "#b29b55",
                    500: "#9f822b",
                    600: "#7f6822",
                    700: "#5f4e1a",
                    800: "#403411",
                    900: "#201a09"
                },
                purpleAccent: {
                    100: "#dcdaea",
                    200: "#b9b5d4",
                    300: "#9791bf",
                    400: "#746ca9",
                    500: "#514794",
                    600: "#413976",
                    700: "#312b59",
                    800: "#201c3b",
                    900: "#100e1e"
                },
                brownDarkAccent: {
                    100: "#d9d6d7",
                    200: "#b3adaf",
                    300: "#8d8388",
                    400: "#675a60",
                    500: "#413138",
                    600: "#34272d",
                    700: "#271d22",
                    800: "#1a1416",
                    900: "#0d0a0b"
                },
                pinkAccent: {
                    100: "#e8d4da",
                    200: "#d0a9b5",
                    300: "#b97f8f",
                    400: "#a1546a",
                    500: "#943536",
                    600: "#962551",
                    700: "#531929",
                    800: "#37101c",
                    900: "#1c080e"
                },
            } : {
                primary: {
                    100: "#06080a",
                    200: "#0c1114",
                    300: "#12191d",
                    400: "#182227",
                    500: "#1e2a31",
                    600: "#4b555a",
                    700: "#787f83",
                    800: "#a5aaad",
                    900: "#d2d4d6",
                },

                whiteAccent: {
                    100: "#f9ffff",
                    200: "#f3ffff",
                    300: "#eeffff",
                    400: "#e8ffff",
                    500: "#e2ffff",
                    600: "#b5cccc",
                    700: "#889999",
                    800: "#5a6666",
                    900: "#2d3333"
                },
                blueAccent: {
                    100: "#d3e9fd",
                    200: "#a7d3fb",
                    300: "#7abcf8",
                    400: "#4ea6f6",
                    500: "#2290f4",
                    600: "#1b73c3",
                    700: "#145692",
                    800: "#0e3a62",
                    900: "#071d31"
                },


                yellowAccent: {
                    100: "#201a09",
                    200: "#403411",
                    300: "#5f4e1a",
                    400: "#7f6822",
                    500: "#9f822b",
                    600: "#b29b55",
                    700: "#c5b480",
                    800: "#d9cdaa",
                    900: "#ece6d5",
                },
            }
    )
});
// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                // palette values for dark mode
                primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.blackAccent[700],
                        main: colors.blackAccent[500],
                        light: colors.blackAccent[100],
                    },
                    background: {
                        default: colors.primary[500],
                    }
                } : {
                // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.blackAccent[700],
                        main: colors.blackAccent[500],
                        light: colors.blackAccent[100],
                    },
                    background: {
                        default: colors.whiteAccent[500],
                    },
                }),
            typography: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 12,
                h1: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 40,
                },
                h2: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 32,
                },
                h3: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 24,
                },
                h4: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 20,
                },
                h5: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 16,
                },
                h6: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 14,
                },
            }
        }
    };

};

//screen sizes and breakpoints

export const BreakPointTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})



//context for color  mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});
export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode]
};
