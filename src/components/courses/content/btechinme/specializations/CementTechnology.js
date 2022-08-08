import darkgreenbox from "../../../../../images/dark-green-box.png";
import rightarrowblue from "../../../../../images/greater-than.png";
import flsmidth from "../../../../../images/FLSmidth.png";
import beaumergroup from "../../../../../images/Beumer Group.png";
import jkcement from "../../../../../images/jk-cement (2).png";
import { useState } from "react";
import "./Specialization.css";

const CementTechnology = () => {
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
    <div className="specialization-cloud-techology-section specialization-cement-techology-section">
      <div className="specialization-cloud-techology-left">
        <img src={darkgreenbox} className="specialization-green-box" />
        <div className="specialization-cloud-techology-section-title">
        CEMENT TECHNOLOGY IN COLLABORATION WITH FLSMIDTH AND JK CEMENT
        </div>
        <div className="specialization-cloud-technology-section-desc">
          <li>Cement technology <b style={{ color: "red" }}>in collaboration with FLSmidth and JK Cement</b> deals with the production and use of cement and related materials in construction industry</li>
          <li>Cement technology combines aspects of mechanical, civil, &amp; electrical engineering to provide a well-rounded education to students</li>
          <li>India has many leading cement producers (JK Cements, Shree Cement, etc.) that employ cement-tech graduates</li>
        </div>
       
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              INDUSTRY PARTNERS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={flsmidth}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                
                <ul>
                  <li>
                  FLSmidth is providing curriculum support for application-oriented learning
                  </li>
                  <li>
                  FLSmidth will deliver 24 classroom sessions to students on cement technology
                  </li>
                  <li>
                  5-day on-site visits will be provided to students
                  </li>
                  <li>
                  The FLS instructors are professional Engineers experienced from Design, Installation &amp; commissioning and Training at cement plants.
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={beaumergroup}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                <ul>
                  <li>
                  Beumer is setting up a digital lab at SPSU for application-oriented learning
                  </li>
                  <li>
                  Curriculum development support in cement technology will be provided
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={jkcement}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                <ul>
                  <li>
                  JK Cement will provide support in experiential learning and career opportunities to students
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src="https://ghhrocks.com/wp-content/themes/ghh-theme/img/logo.png"
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                
                <ul>
                  <li>
                  SPSU engineering students will have an opportunity to participate in a 9 week practical training session in GHH premises near Zawar Mines Complex 
                  </li>
                  <li>
                  Students will learn to understand and analyze hydraulic and electric systems of heavy mobile machinery in order to optimize troubleshooting and fault finding
                  </li>
                  <li>Students will receive certificates from ATT (Advanced Training Technologies, a dedicated training company in SK Group and partner of GHH), GHH and Indo-German Chamber of Commerce</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              SUBJECTS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Pyro process Operation &amp; Maintenance</div>
                <div>Process Measurements &amp; Calculations</div>
                <div>Crossbar Cooler Operation &amp; Maintenance</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Kiln Process &amp; Operation</div>
                <div>Cement Quality</div>
                <div>Atox Mill Operation &amp; Maintenance</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Ball Mill Operation &amp; Maintenance</div>
                <div>Hydraulic Equipment Maintenance</div>
                <div>OK Mill Operation &amp; Maintenance</div>
              </div>
            </div>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              CAREER OPPORTUNITIES
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Senior Lead Engineer, Plant Layout</div>
                <div>Sr. Engineer - Mechanical Maintenance</div>
                <div>Field Engineer</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Production Head</div>
                <div>Service Engineer</div>
                <div>Process Engineer</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Product Engineer</div>
                <div>Research Engineer Hydrogen Studies</div>
                <div>General Manager Detail Engineering</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Assistant Manager QA QC</div>
                <div>Chief Designer/Checker</div>
                <div>Manufacturing Head</div>
              </div>
            </div>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              TOP COMPANIES HIRING
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>JK Cement</div>
                <div>Aditya Birla Group</div>
                <div>FLSmidth</div>
                <div>Beumer Group</div>
                <div>UltraTech Cement</div>
                <div>KJS Cement</div>
                <div>Prism Johnson Cement</div>
                <div>ACC Cement</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Ambuja Cement</div>
                <div>Shree Cement</div>
                <div>Star Cement</div>
                <div>Wonder Cement</div>
                <div>Nuvoco Cement</div>
                <div>Sanghi Cement</div>
                <div>Heidelberg Cement</div>
                <div>Asian Fine Cement</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Sagar Cement</div>
                <div>Dalmia Cement</div>
              </div>
            </div>
          </div>
        )}
        <div className="read-more" onClick={onReadToggle}>
          READ {toggleState}
          <img src={rightarrowblue} className="specialization-right-arrow" />
        </div>
      </div>
      
    </div>
  );
};

export default CementTechnology;
