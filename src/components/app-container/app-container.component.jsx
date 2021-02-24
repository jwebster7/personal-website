import React, { useRef } from "react";
import About from "../about/about.component";
import Footer from "../footer/footer.component";
import Navigation from "../navigation/navigation.component";
import Journey from "../journey/journey.component";
import Landing from "../landing/landing.component";

import { Content, Layout } from "./app-container.styles";

const AppContainer = () => {
  const aboutRef = useRef();
  const journeyRef = useRef();
  const ref = [aboutRef, journeyRef];

  return (
    <Layout>
      <Navigation />
      <Content>
        <Landing />
        <About ref={aboutRef} />
        <Journey ref={journeyRef} />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppContainer;
