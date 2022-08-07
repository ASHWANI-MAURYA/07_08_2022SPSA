import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const MTechInECE = () => {
  return (
    <>
    <Helmet>
        <title>M.Tech Electronics Communications Engineering College | JK Cement&apos;s SPSU</title>
        <meta name="description" content="M.Tech Electronics & Communication Engineering, from India's Top Ranked University In Rajasthan, India - JK Cement's SPSU. Visit to check Course Details." />
        <meta
          name="keywords"
          content="M.Tech Electronics Communications Engineering"
        />
      </Helmet>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default MTechInECE;
