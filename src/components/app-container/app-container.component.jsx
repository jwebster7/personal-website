import React from "react";
import About from "../about/about.component";
import Footer from "../footer/footer.component";
import Journey from "../journey/journey.component";
import Landing from "../landing/landing.component";

import { Content, Layout } from "./app-container.styles";

const AppContainer = () => {
  return (
    <Layout>
      <Content>
        <Landing />
        <About />
        <Journey />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppContainer;
