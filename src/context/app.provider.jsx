// import React, { useContext, useEffect, useReducer } from "react";
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";

export const AppContext = React.createContext();
const { Provider } = AppContext;

const inViewConfig = {
  threshold: 0.4
};

const AppProvider = ({ children }) => {
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewConfig);
  console.log(aboutRef, aboutInView, aboutEntry);
  const [experienceRef, experienceInView, experienceEntry] = useInView(
    inViewConfig
  );
  const [educationRef, educationInView, educationEntry] = useInView(
    inViewConfig
  );
  const [projectsRef, projectsInView, projectsEntry] = useInView(inViewConfig);

  const state = {
    refs: {
      about: aboutRef,
      experience: experienceRef,
      education: educationRef,
      projects: projectsRef
    },
    entries: {
      about: aboutEntry,
      experience: experienceEntry,
      education: educationEntry,
      projects: projectsEntry
    },
    trackers: {
      about: aboutInView,
      experience: experienceInView,
      education: educationInView,
      projects: projectsInView
    }
  };

  // const [state, dispatch] = useReducer(AppReducer, inViewState);

  return <Provider value={{ state }}>{children}</Provider>;
};

export const useAppData = () => {
  const { state } = useContext(AppContext);
  return state;
};

export default AppProvider;
