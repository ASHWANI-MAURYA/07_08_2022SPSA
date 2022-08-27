import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const PhDInME = () => {
  return (
    <>
    <Helmet>
    <title>ph.D Mechanical Engineering College | JK Cement&apos;s SPSU</title>
    <link rel="canonical" url="https://www.spsu.ac.in/phD-in-mechanical-engineering"/>
    </Helmet>
      <General />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default PhDInME;
