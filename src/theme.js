/**
 * Theme
 *  #336666 - myrtle green
 *  #121113 - rich black
 *  #FFF5EE - seashell
 *  #5B9999 - cadet blue
 */

const cadetBlue = "#5b9999";
const myrtleGreen = "#336666";
const richBlack = "#121113";
const seashell = "#fff5ee";
const primaryFontFamily = `"Ubuntu", "Helvetica", "Arial", sans-serif`;

const theme = {
  palette: {
    background: {
      primary: richBlack,
      secondary: myrtleGreen,
      tertiary: "rgba(18, 17, 19, 0.6)"
    },
    font: {
      primary: seashell,
      secondary: richBlack,
      active: cadetBlue,
      hover: cadetBlue
    },
    element: {
      primary: "rgba(18, 17, 19, 0.6)",
      secondary: "rgb(51, 102, 102)",
      hover: {
        primary: cadetBlue,
        secondary: richBlack,
        tertiary: "rgb(51, 102, 102, .15)"
      }
    }
  },
  typography: {
    primary: {
      letterSpacing: "0.1em",
      fontFamily: primaryFontFamily
    },
    sectionHeading: {
      fontFamily: primaryFontFamily,
      fontSize: {
        primary: "2rem",
        secondary: "1.5rem"
      },
      fontWeight: 400,
      letterSpacing: "0.3em"
    },
    subHeading: {
      fontFamily: primaryFontFamily,
      fontSize: {
        primary: "1.2rem",
        secondary: "1rem"
      },
      fontWeight: 300,
      letterSpacing: "0.1em"
    },
    heading: {
      fontFamily: primaryFontFamily,
      fontSize: {
        primary: "1.4rem",
        secondary: "1.2rem"
      },
      fontWeight: 500,
      letterSpacing: "0.1em"
    },
    body: {
      fontFamily: primaryFontFamily,
      fontSize: {
        primary: "1.2rem",
        secondary: "1rem"
      },
      fontWeight: 300,
      letterSpacing: "0.1em"
    }
  }
};

export default theme;
