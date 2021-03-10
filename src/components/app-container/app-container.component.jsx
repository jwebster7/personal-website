import React from "react";
import { useInView } from "react-intersection-observer";

import About from "../../views/about/about.component";
import Education from "../../views/education/education.component";
import Experience from "../../views/experience/experience.component";
import Footer from "../footer/footer.component";
import Landing from "../../views/landing/landing.component";
import Navigation from "../navigation/navigation.component";
import Projects from "../../views/projects/projects.component";

import { Content, Layout } from "./app-container.styles";

const inViewConfig = {
  threshold: 0.4,
};

const AppContainer = () => {
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewConfig);
  const [experienceRef, experienceInView, experienceEntry] = useInView(
    inViewConfig
  );
  const [educationRef, educationInView, educationEntry] = useInView(
    inViewConfig
  );
  const [projectsRef, projectsInView, projectsEntry] = useInView(inViewConfig);

  const entries = {
    aboutEntry,
    experienceEntry,
    educationEntry,
    projectsEntry
  };

  const inViewTrackers = {
    aboutInView,
    experienceInView,
    educationInView,
    projectsInView
  };

  const scrollToRef = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Navigation scrollTo={scrollToRef} {...entries} {...inViewTrackers} />
      <Content>
        <Landing />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Education ref={educationRef} />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppContainer;
