import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const PhDInCSE = () => {
  return (
    <>
    <Helmet>
    <title>ph.D Computer-Science Engineering College | JK Cement&apos;s SPSU</title>
    <link rel="canonical" url="https://www.spsu.ac.in/phD-in-computer-science-engineering"/>
    </Helmet>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default PhDInCSE;
