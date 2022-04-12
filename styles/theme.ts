import { createTheme } from '@mui/material';

const font = "'Raleway', sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: font
    },
    palette: {
        primary: {
            main: "#FBF3E9"
        },
        secondary: {
            main: "#427F8F"
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default theme