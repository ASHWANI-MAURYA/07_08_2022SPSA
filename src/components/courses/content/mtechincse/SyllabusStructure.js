import download from "../../../../images/download.svg";

import "../btechincse/Btech.css";
const SyllabusStructure = () => {
  return (
    <div className="syllabus-section">
      {/* <div className="container"> */}
        <h5 className="heading">Syllabus & Fee Structure</h5>
        <br />
        <div className="syllabus top-line">
          <span>Fee Structure</span>
          <a href="/Admissions/FeesStructure"><img alt="" src={download} /></a>
        </div>
        <div className="syllabus">
          <span>Syllabus: Computer Science & Engineering - Data Mining</span>
          <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/MTech-CSE_Data%20Mining.pdf"><img alt="" src={download} /></a>
        </div>
        <div className="syllabus">
          <span>
            Syllabus: Computer Science & Engineering - Computer Networking
          </span>
          <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/MTech-CSE_Computer_Networks.pdf"><img alt="" src={download} /></a>
        </div>
        <div className="syllabus">
          <span>Syllabus: Computer Science & Engineering - Data Science</span>
          <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/MTech-CSE_Data%20Science.pdf"><img alt="" src={download} /></a>
        </div>
      {/* </div> */}
    </div>
  );
};
export default SyllabusStructure;
