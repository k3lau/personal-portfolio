import React from "react";
import { InfoSection, Projects } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
import { projectData } from "../../components/Projects/Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Projects heading="Projects" data={projectData} />
    </>
  );
};

export default Home;
