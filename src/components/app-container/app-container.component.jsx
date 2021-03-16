import React from "react";
import { useInView } from "react-intersection-observer";

import Profile from "../../views/profile/profile.component";
import Education from "../../views/education/education.component";
import Experience from "../../views/experience/experience.component";
import Footer from "../footer/footer.component";
import Landing from "../../views/landing/landing.component";
import Navigation from "../navigation/navigation.component";
import Projects from "../../views/projects/projects.component";

import { Layout } from "./app-container.styles";

const inViewConfig = {
  threshold: 0.6
};

const AppContainer = () => {
  const [profileRef, profileInView, profileEntry] = useInView(inViewConfig);
  const [experienceRef, experienceInView, experienceEntry] = useInView(
    inViewConfig
  );
  const [educationRef, educationInView, educationEntry] = useInView(
    inViewConfig
  );
  const [projectsRef, projectsInView, projectsEntry] = useInView(inViewConfig);

  const entries = {
    profileEntry,
    experienceEntry,
    educationEntry,
    projectsEntry
  };

  const inViewTrackers = {
    profileInView,
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
      <Landing />
      <Profile ref={profileRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Education ref={educationRef} />
      <Footer />
    </Layout>
  );
};

export default AppContainer;
