import React from "react";
import { InfoSection, Projects } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
import { projectData } from "../../components/Projects/Data";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <>
      <Element id="Home">
        <InfoSection {...homeObjOne} />
      </Element>
      <Element id="Projects">
        <Projects heading="Projects" data={projectData} />
      </Element>
    </>
  );
};

export default Home;
