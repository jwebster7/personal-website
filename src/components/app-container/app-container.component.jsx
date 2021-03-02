import React from "react";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../theme";

import About from "../about/about.component";
import Education from "../education/education.component";
import Experience from "../experience/experience.component";
import Footer from "../footer/footer.component";
import Landing from "../landing/landing.component";
import Navigation from "../navigation/navigation.component";

import { Content, Layout } from "./app-container.styles";

const inViewConfig = {
  threshold: 0.65,
  delay: 150
};

const AppContainer = () => {
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewConfig);
  const [experienceRef, experienceInView, experienceEntry] = useInView(
    inViewConfig
  );
  const [educationRef, educationInView, educationEntry] = useInView(
    inViewConfig
  );
  const [skillsRef, skillsInView, skillsEntry] = useInView(inViewConfig);

  const entries = {
    aboutEntry,
    experienceEntry,
    educationEntry,
    skillsEntry
  };

  const inViewTrackers = {
    aboutInView,
    experienceInView,
    educationInView,
    skillsInView
  };

  const scrollToRef = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation scrollTo={scrollToRef} {...entries} {...inViewTrackers} />
        <Content>
          <Landing />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Education ref={educationRef} />
          <Footer />
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default AppContainer;
