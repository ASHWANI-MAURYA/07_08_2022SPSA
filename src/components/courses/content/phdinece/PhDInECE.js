import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";
const PhDInECE = () => {
  return (
    <>
    <Helmet>
    <title>ph.D Electronics-and-Communication Engineering College | JK Cement&apos;s SPSU</title>
    <link rel="canonical" url="https://www.spsu.ac.in/phD-in-electronics-and-communication-engineering"/>
    </Helmet>
      <General />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default PhDInECE;
