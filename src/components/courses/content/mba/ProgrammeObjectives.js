import lightgreenbox from "../../../../images/light-green-box.png";
import "../btechincse/Btech.css";

const ProgrammeObjectives = () => {
  return (
    <div className="program-objectives-section-bba">
      <img src={lightgreenbox} className="specialization-green-box" />
      <div className="specialization-general-cse-section-title">
        PROGRAMME OBJECTIVES
      </div>
      <div className="specialization-general-cse-section-desc">
        To equip students with necessary working skills in various functional areas of management so as to prepare them for a successful career in their chosen area of management.
        <br />
        <br />
        To develop an in-depth understanding of topics related to business, various sectors of the Indian economy and the international business environment.
        </div>
    </div>
  );
};
export default ProgrammeObjectives;
