import darkgreenbox from "../../../../../images/dark-green-box.png";
import rightarrowblue from "../../../../../images/greater-than.png";
import gainwell from "../../../../../images/gainwell-logo.png";
import { useState } from "react";
import "./Specialization.css";
import "../../btechincse/Btech.css";

const AdvanceMiningTechnology = () => {
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
        ADVANCE MINING TECHNOLOGY IN COLLABORATION WITH GAINWELL
        </div>
        Advance Mining Technology <b style={{ color: "red" }}>in collaboration with Gainwell</b> is a specialized course being offered with our Mining Engineering program
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              INDUSTRY PARTNERS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={gainwell}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                
                <ul>
                  <li>
                  Gainwell will organize guest lectures and curriculum workshops for students &amp; faculty
                  </li>
                  <li>
                  Curriculum development support in advanced mining will also be provided
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src="https://www.hzlindia.com/wp-content/uploads/HZL-home_Logo_new-new.png"
                  className="cloud-technology-read-more-section-industry-partner-logo" style={{ width: "81px" }}
                />
                <ul>
                  <li>
                  HZL will provide curriculum support to SPSU, along with lectures &amp; workshops
                  </li>
                  <li>
                  HZL has deep expertise in mining activities and is India&apos;s only zinc miner
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
                  SPSU engineering students will have  an opportunity to participate in a 9 week practical training session in GHH premises near Zawar Mines Complex 
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
                <div>Mineral Exploration &amp; prospect Evaluation</div>
                <div>Pit Slope Design &amp; stability Analysis</div>
                <div> Subsurface Rock Engineering and Tunneling</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Geospatial Technology in Mining</div>
                <div>Environmental Management and Control in Mines</div>
                <div>Computer Aided Mine Planning/ mining industry business model innovation</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Dimension stone Mining</div>
                <div>Ergonomics/ Rock slope Engineering</div>
                <div>Simulation and Modeling of Mining systems</div>
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
                <div>Mining Engineer</div>
                <div>Engineering Manager</div>
                <div>Project Manager</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Research Engineers</div>
                <div>Deputy Chief Mechanical in Metals &amp; Mining</div>
                <div>Assistant Engineer in Mining</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Service Maintenance Engineer</div>
                <div>Industrial Production Engineer</div>
                <div>Production Manager</div>
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
                <div>Steel Authority of India Ltd</div>
                <div>Coal Authority of India Ltd</div>
                <div>Uranium Corporation of India Ltd</div>
                <div>Central Mine Planning and Design Institute Ranchi etc</div>
                <div>ONGC</div>
                <div>Hindustan Zinc</div>
                <div>Gainwell</div>
                <div>GAIL</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Adani Mining Pvt Ltd etc</div>
                <div>EDR Technologies Pvt Ltd</div>
                <div>Tata Steels</div>
                <div>Infosys</div>
                <div>Accenture</div>
                <div>NMDC</div>
                <div>JK Cement</div>
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

export default AdvanceMiningTechnology;
