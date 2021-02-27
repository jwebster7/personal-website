import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../theme";

import About from "../about/about.component";
import Footer from "../footer/footer.component";
import Navigation from "../navigation/navigation.component";
import Journey from "../journey/journey.component";
import Landing from "../landing/landing.component";

import { Layout } from "./app-container.styles";

const inViewConfig = {
  threshold: .76
};

const AppContainer = () => {
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewConfig);
  const [journeyRef, journeyInView, journeyEntry] = useInView(inViewConfig);

  const entries = {
    aboutEntry,
    journeyEntry
  };

  const inViewTrackers = {
    aboutInView,
    journeyInView
  };

  const scrollToRef = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation scrollTo={scrollToRef} {...entries} {...inViewTrackers} />
        <Landing />
        <About ref={aboutRef} />
        <Journey ref={journeyRef} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default AppContainer;
