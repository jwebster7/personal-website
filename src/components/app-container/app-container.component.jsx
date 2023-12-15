import React from "react";
import { useInView } from "react-intersection-observer";

import Profile from "../../views/profile/profile.component";
import Education from "../../views/education/education.component";
import Experience from "../../views/experience/experience.component";
import Landing from "../../views/landing/landing.component";
import Footer from "../footer/footer.component";
import Navigation from "../navigation/navigation.component";

import { Layout } from "./app-container.styles";

const inViewConfig = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4
};

const AppContainer = () => {
  const profile = useInView(inViewConfig);
  const experience = useInView(inViewConfig);
  const education = useInView(inViewConfig);

  return (
    <Layout>
      <Navigation {...{ profile, experience, education }} />
      <Landing />
      <Profile id="profile" ref={profile?.ref} />
      <Experience id="experience" ref={experience?.ref} />
      <Education id="education" ref={education?.ref} />
      <Footer />
    </Layout>
  );
};

export default AppContainer;
