import download from "../../../../images/download.svg";

import "../btechincse/Btech.css";
const SyllabusStructure = () => {
  return (
    <div className="syllabus-section">
      <div className="container">
        <h5 className="heading">Syllabus & Fee Structure</h5>
        <br />
        <div className="syllabus top-line">
          <span>Fee Structure</span>
          <a href="/Admissions/FeesStructure"><img alt="" src={download} /></a>
        </div>
        <div className="syllabus">
          <span>Syllabus: Mine Planning</span>
          <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/MTech_Mine_Planning_2021-23.pdf"><img alt="" src={download} /></a>
        </div>
        <div className="syllabus">
          <span>
            Syllabus: Mine Environment
          </span>
          <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/MTech_Mine_Environment_2021-23.pdf"><img alt="" src={download} /></a>
        </div>
      </div>
    </div>
  );
};
export default SyllabusStructure;
