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
          SPSU offers all its academic programmes in the Semester System with
          Choice Based Credit System. 
          <br/>
          <br/>
          All PhD scholars are required to complete
          a course work involving both Major and Minor disciplines before taking
          up full-fledged research. The course work is designed to enhance the
          scholar’s capability to match the proposed research work under each
          discipline.
        </div>
      </div>
    </div>
  );
};
export default ProgrammeObjectives;
