import generalcse from "../../../../images/general-cse.png";
import lightgreenbox from "../../../../images/light-green-box.png";
import "../btechincse/Btech.css";
const ProgrammeObjectives = () => {
  return (
    <div className="specialization-general-cse-section">
      <img src={generalcse} className="specialization-general-cse" />
      <div className="specialization-general-cse-section-right">
        <img src={lightgreenbox} className="specialization-green-box" />
        <div className="specialization-general-cse-section-title">
          PROGRAMME OBJECTIVES
        </div>
        <div className="specialization-general-cse-section-desc">
          Students will be able to use the principles of design and production engineering to solve complex engineering problems.
          <br />
          <br />
          Students will be able carryout interdisciplinary research.
          <br />
          <br />
          To make them understand the impact of engineering solutions in a global, economic, environmental and societal context.
        </div>
      </div>
    </div>
  );
};
export default ProgrammeObjectives;
