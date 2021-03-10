/**
 * Theme
 *  #336666 - myrtle green
 *  #121113 - rich black
 *  #FFF5EE - seashell
 *  #5B9999 - cadet blue
 */

// frequently repeated styling attributes
const primaryFontColor = "#fff5ee";
const primaryFontFamily = `"Ubuntu", sans-serif`;
// const bodyfontSize = "1.25rem";
// const bodyfontHeight = "1.5";
// const bodyfontSpacing = "0.1em";

const theme = {
  background: {
    primaryColor: "#121113",
    secondaryColor: "#336666"
  },
  typography: {
    primary: {
      body: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontHeight: "1.5",
        fontSpacing: "0.1em",
        fontSize: "1.25rem"
      },
      heading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "1.5rem",
        fontSpacing: "0.1em",
        fontWeight: "500"
      },
      sectionHeading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "2rem",
        fontSpacing: "0.75rem"
      },
      subHeading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "1.25rem",
        fontSpacing: "0.1em",
        fontWeight: "300"
      }
    },
    secondary: {
      body: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontHeight: "1.25",
        fontSize: "1rem"
      },
      heading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "1.15rem",
        fontSpacing: "0.1em"
      },
      sectionHeading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "1.5rem",
        fontSpacing: "0.5rem"
      },
      subHeading: {
        fontColor: primaryFontColor,
        fontFamily: primaryFontFamily,
        fontSize: "1rem",
        fontSpacing: "0.1em"
      }
    }
  }
};

export default theme;
