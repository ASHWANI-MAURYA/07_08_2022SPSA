import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const MTechInME = () => {
  return (
    <>
    <Helmet>
        <title>Best Mechanical Engineering College in Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="Check out Admission In M.Tech Mechanical Engineering From India's Top Ranked University In Rajasthan, India - JK Cement's SPSU. Visit to check Course Details, Eligibility criteria, Fees." />
        <meta
          name="keywords"
          content="best mechanical engineering colleges in rajasthan"
        />
      </Helmet>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default MTechInME;
