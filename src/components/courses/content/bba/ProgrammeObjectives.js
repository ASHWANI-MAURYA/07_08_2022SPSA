import { useState } from "react";
import lightgreenbox from "../../../../images/light-green-box.png";
import rightarrowblue from "../../../../images/greater-than.png";
import "../btechincse/Btech.css";

const ProgrammeObjectives = () => {
  const [toggleState, setToggleState] = useState("MORE");
  const [readmoreState, setReadMoreState] = useState(false);

  const onReadToggle = () => {
    if (toggleState === "MORE") {
      setToggleState("LESS");
    } else {
      setToggleState("MORE");
    }
    setReadMoreState(!readmoreState);
  };

  return (
    <div className="program-objectives-section-bba">
      <img src={lightgreenbox} className="specialization-green-box" />
      <div className="specialization-general-cse-section-title">
        PROGRAMME OBJECTIVES
      </div>
      <div className="specialization-general-cse-section-desc">
        To prepare potential managers by inculcating in them qualities required
        to occupy top positions in the management hierarchy.
        <br />
        <br />
        To equip students with technical proficiency in domestic as well as
        global business through the study of major functional areas of
        management.
        <br />
        <br />
        To demonstrate the use of appropriate techniques &amp; problem solving skills to effectively manage business challenges.
      </div>
      {readmoreState && (
        <div className="cloud-technology-read-more-section">
          <div className="cloud-technology-read-more-section-header">
            CAREER OPPORTUNITIES
          </div>
          <div className="cloud-technology-read-more-section-industry-partners-section">
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Digital Strategist</div>
              <div>Digital Business Marketer</div>
              <div>Search Engine Marketing Manager</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Big Data Engineer</div>
              <div>Data Scientist</div>
              <div>Financial Analyst</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Catering Manager</div>
              <div>Event Manager</div>
              <div>Customer Service Manager</div>
            </div>
          </div>
        </div>
      )}
      {readmoreState && (
        <div className="cloud-technology-read-more-section">
          <div className="cloud-technology-read-more-section-header">
            TOP COMPANIES HIRING
          </div>
          <div className="program-objectives-bba-top-companies-section">
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Ernst &amp; Young</div>
              <div>Hewlett-Packard (HP)</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>McKinsey &amp; Company</div>
              <div>Microsoft</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Goldman Sachs</div>
              <div>IBM</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Deloitte</div>
              <div>Banks</div>
            </div>
          </div>
        </div>
      )}
      <div className="read-more" onClick={onReadToggle}>
        READ {toggleState}
        <img src={rightarrowblue} className="specialization-right-arrow" />
      </div>
    </div>
  );
};
export default ProgrammeObjectives;
