import darkgreenbox from "../../../../../images/dark-green-box.png";
// import rightarrowblue from "../../../../../images/greater-than.png";
// import { useState } from "react";
import "./Specialization.css";

const HospitalityManagement = () => {
  // const [toggleState, setToggleState] = useState("MORE");
  // const [readmoreState, setReadMoreState] = useState(false);

  // const onReadToggle = () => {
  //   if (toggleState === "MORE") {
  //     setToggleState("LESS");
  //   } else {
  //     setToggleState("MORE");
  //   }
  //   setReadMoreState(!readmoreState);
  // };

  return (
    <div className="specialization-business-analytics">
      <img src={darkgreenbox} className="specialization-green-box" />
      <div className="specialization-cloud-techology-section-title">
      HOSPITALITY MANAGEMENT &amp; ADMINISTRATION
      </div>
      <div>
      Pursue BBA with specialization in Hospitality Management &amp; Administration at Lake City, India&apos;s No. 1 tourist destination. Get opportunites to work with some of the best hotels &amp; resorts in the world.
      </div>
      {/* {readmoreState && (
        <div className="cloud-technology-read-more-section">
          <div className="cloud-technology-read-more-section-header">
            INDUSTRY PARTNERS
          </div>
          <div className="cloud-technology-read-more-section-industry-partners-section">
            <div className="cloud-technology-read-more-section-industry-partner">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/SAS_logo_horiz.svg/500px-SAS_logo_horiz.svg.png"
                className="cloud-technology-read-more-section-industry-partner-logo"
              />
              <div className="cloud-technology-read-more-section-industry-partner-summary">
                SAS (Global leader in business analytics solution)
              </div>
              <ul>
                <li>Students will be awarded the SAS Global Certification</li>
                <li>
                  SAS experts will help drive the Business
                  Analytics-specialization in the MBA program
                </li>
                <li>
                  SAS solutions are licensed and implemented at over 5,000
                  educational institutions worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>
      )} */}
      {/* {readmoreState && (
        <div className="cloud-technology-read-more-section">
          <div className="cloud-technology-read-more-section-header">
            CAREER OPPORTUNITIES
          </div>
          <div className="cloud-technology-read-more-section-industry-partners-section">
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Management Analysts</div>
              <div>Business Insight and Analytics Manager</div>
              <div>Marketing Manager</div>
              <div>Supply Chain Analyst</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Senior Business Analyst</div>
              <div>Business Systems Analyst</div>
              <div>Financial Analyst</div>
              <div>Business Analytics Specialist</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Personal Financial Advisor</div>
              <div>Operations Analyst</div>
              <div>Business Development Manager</div>
              <div>Management Consultant</div>
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
              <div>Boston Consulting Group (BCG)</div>
              <div>McKinsey and Company</div>
              <div>KPMG</div>
              <div>Accenture</div>
              <div>Deloitte</div>
              <div>Morgan Stanley</div>
              <div>American Express</div>
              <div>Microsoft</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Amazon</div>
              <div>Google</div>
              <div>Facebook</div>
              <div>Wipro</div>
              <div>Infosys</div>
              <div>HCL</div>
              <div>Tata Group</div>
              <div>Larsen &amp; Toubro</div>
            </div>
            <div className="cloud-technology-read-more-section-industry-partner">
              <div>Reliance</div>
              <div>JK Cement</div>
            </div>
          </div>
        </div>
      )} */}
      {/* <div className="read-more" onClick={onReadToggle}>
        READ {toggleState}
        <img src={rightarrowblue} className="specialization-right-arrow" />
      </div> */}
    </div>
  );
};

export default HospitalityManagement;
