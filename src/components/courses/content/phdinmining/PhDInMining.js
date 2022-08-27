import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";
const PhDInMining = () => {
  return (
    <>
    <Helmet>
    <title>ph.D Mining Engineering College | JK Cement&apos;s SPSU</title>
    <link rel="canonical" url="https://www.spsu.ac.in/phD-in-mining-engineering"/>
    </Helmet>
      <General />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default PhDInMining;
