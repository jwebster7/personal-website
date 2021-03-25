import React from "react";
// import React, { useEffect } from "react";
// import { withRouter } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Profile from "../../views/profile/profile.component";
import Education from "../../views/education/education.component";
import Experience from "../../views/experience/experience.component";
import Landing from "../../views/landing/landing.component";
import Navigation from "../navigation/navigation.component";
import Portfolio from "../../views/portfolio/portfolio.component";
import Footer from "../footer/footer.component";
import { Layout } from "./app-container.styles";

const inViewConfig = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4
};

const AppContainer = () => {
  const [profileRef, profileInView, profileEntry] = useInView(inViewConfig);
  // console.log(profileEntry?.isIntersecting);
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

  // useEffect(() => {
  //   const routesInViewMap = new Map([
  //     [profileInView, "profile"],
  //     [experienceInView, "experience"],
  //     [projectsInView, "projects"],
  //     [educationInView, "education"]
  //   ]);
  //   const currentRoute = routesInViewMap.get(true);
  //   if (!!currentRoute) {
  //     const currentPath = history.location.pathname;
  //     if (!currentPath.includes(currentRoute)) {
  //       history.push(currentRoute);
  //     }
  //   }
  // }, [
  //   profileInView,
  //   experienceInView,
  //   projectsInView,
  //   educationInView,
  //   history
  // ]);

  const scrollToRef = (entry) => {
    entry.target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Navigation scrollTo={scrollToRef} {...entries} {...inViewTrackers} />
      <Landing />
      <Profile id="profile" ref={profileRef} />
      <Experience id="experience" ref={experienceRef} />
      <Portfolio id="projects" ref={projectsRef} />
      <Education id="education" ref={educationRef} />

      {/* <Landing />
      <Profile id="profile" ref={profileRef} />
      <Experience id="experience" ref={experienceRef} />
      <Portfolio id="projects" ref={projectsRef} />
      <Education id="education" ref={educationRef} /> */}
      <Footer />
    </Layout>
  );
};

// export default withRouter(AppContainer);
export default AppContainer;
