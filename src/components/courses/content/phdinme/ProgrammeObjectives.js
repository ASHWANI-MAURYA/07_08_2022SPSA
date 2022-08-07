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
          SPSU offers Master’s Programme in the following Specializations /
          Disciplines
          <br />
          <br />
          VLSI and Embedded Systems and Internet of Things (IoT) 
        </div>
      </div>
    </div>
  );
};
export default ProgrammeObjectives;
