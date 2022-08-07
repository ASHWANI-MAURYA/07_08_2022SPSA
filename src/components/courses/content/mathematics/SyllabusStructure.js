import download from "../../../../images/download.svg";

import "../btechincse/Btech.css";
const SyllabusStructure = () => {
  return (
    <div className="syllabus-section">
      <div className="container">
        <div className="syllabus top-line">
          <span>Fee Structure</span>
          <a href="/Admissions/FeesStructure"><img alt="" src={download} /></a>
        </div>
      </div>
    </div>
  );
};
export default SyllabusStructure;
