import EligibilityCriteria from "./EligibilityCriteria";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";

const PhDInCSE = () => {
  return (
    <>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
    </>
  );
};

export default PhDInCSE;
