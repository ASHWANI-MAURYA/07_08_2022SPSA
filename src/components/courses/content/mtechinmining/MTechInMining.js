import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const MTechInMining = () => {
  return (
    <>
    <Helmet>
        <title>Best Mining Engineering College In Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="Check out Admission In M.Tech Mining Engineering From India's Top Ranked Colleges/ University In Rajasthan, India - JK Cement's SPSU. Visit for Course Details Fees, Admission & SPSAT." />
        <meta
          name="keywords"
          content="mining engineering colleges in rajasthan"
        />
        <link rel="canonical" href="https://www.spsu.ac.in/mtech-degree-in-mining-engineering" />
      </Helmet>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default MTechInMining;
