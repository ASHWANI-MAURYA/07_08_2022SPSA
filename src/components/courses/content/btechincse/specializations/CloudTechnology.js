import cloudtechnology from "../../../../../images/cloud-technology.png";
import darkgreenbox from "../../../../../images/dark-green-box.png";
import rightarrowblue from "../../../../../images/greater-than.png";
import tcsion from "../../../../../images/tcs-ion.png";
import microsoft from "../../../../../images/microsoft (2).png";
import awsacademy from "../../../../../images/AWS_Academy.png";
import { useState } from "react";

const CloudTechnology = () => {
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
    <div className="specialization-cloud-techology-section">
      <div className="specialization-cloud-techology-left">
        <img src={darkgreenbox} className="specialization-green-box" />
        <div className="specialization-cloud-techology-section-title">
          CLOUD COMPUTING IN COLLABORATION WITH AWS AND TCS ION
        </div>
        <div className="specialization-cloud-technology-section-desc">
          Cloud Computing in collaboration with <b style={{ color: "red" }}>AWS and TCS iON</b> is a specialized field in Computer Science that deals
          with delivery of software services over the internet
          (&apos;cloud&apos;)
          <br />
          <br />
          Cloud computing services include software, analytics, data storage,
          and more. Leading global tech companies extensively employ cloud
          computing graduates at high starting salaries.
        </div>
        
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              INDUSTRY PARTNERS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={tcsion}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                {/* <div className="cloud-technology-read-more-section-industry-partner-summary">
                  TCS iON is a business unit of TCS that provides cloud-based
                  solutions
                </div> */}
                <ul>
                  <li>
                  TCS iON is a business unit of TCS that provides cloud-based
                  solutions
                  </li>
                  <li>
                  TCS iON will provide online certification courses, along with an access to their platform
                  </li>
                  <li>
                    Online internship opportunities will also be provided to
                    students
                  </li>
                  <li>
                    TCS iON provides digital lectures, learning resources and
                    practice assessments to students &amp; professionals
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={microsoft}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                {/* <div className="cloud-technology-read-more-section-industry-partner-summary">
                  Microsoft is among the world&apos;s largest companies
                  producing software &amp; related services
                </div> */}
                <ul>
                  <li>Microsoft is among the world&apos;s largest companies
                  producing software &amp; related services</li>
                  <li>
                    Certification courses in AI/Azure/Data for faculty at SPSU
                  </li>
                  <li>
                    Webinars on CloudThat platform and access to MS Learn
                    platform for students
                  </li>
                  <li>
                    Microsoft India also offers learning &amp; development
                    services through certifications and the MS Learn platform
                  </li>
                </ul>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={awsacademy}
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                {/* <div className="cloud-technology-read-more-section-industry-partner-summary">
                  AWS (Amazon Web Services) is the largest web-hosting platform
                  in the world
                </div> */}
                <ul>
                  <li>
                  AWS (Amazon Web Services) is the largest web-hosting platform
                  in the world
                  </li>
                  <li>
                    AWS will provide online trainings and certification vouchers
                    for students
                  </li>
                  <li>
                    AWS provides access to students for learning and completing
                    certifications on their website
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <ul>
              <li>
                Cloud course delivered with 3 leading partners for new-age
                skills and higher recognition in industry
              </li>
              <li>
                Access to online training platforms of Microsoft and TCS for
                practical learning and exposure
              </li>
              <li>
                Reputed course certifications for students in Azure, AI etc. by
                Microsoft, AWS, and TCS iON
              </li>
              <li>
                Online courses, expert lectures, and curriculum development
                through TCS iON
              </li>
            </ul>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              CAREER OPPORTUNITIES
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Cloud Architect</div>
                <div>Cloud Software Engineer</div>
                <div>Cloud Sales Engineer</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Cloud Services Developer</div>
                <div>Cloud Systems Administrator</div>
                <div>Cloud Consultant</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Cloud Network Engineer</div>
                <div>Cloud Product Manager</div>
                <div>Cloud Migration Engineer</div>
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
                <div>AWS</div>
                <div>Deloitte</div>
                <div>Perficient</div>
                <div>VMware</div>
                <div>Salesforce</div>
                <div>Accenture</div>
                <div>Microsoft</div>
                <div>EY</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Google</div>
                <div>IBM</div>
                <div>JPMorgan Chase &amp; Co.</div>
                <div>Oracle</div>
                <div>Cognizant</div>
                <div>Intel</div>
                <div>Apple</div>
                <div>Cisco</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Dell</div>
                <div>General Motors</div>
                <div>Adobe</div>
                <div>Zoom</div>
                <div>Goldman Sachs</div>
                <div>SAP</div>
              </div>
            </div>
          </div>
        )}
        <div className="read-more" onClick={onReadToggle}>
          READ {toggleState}
          <img src={rightarrowblue} className="specialization-right-arrow" />
        </div>
      </div>
      <img src={cloudtechnology} className="specialization-cloud-techology" />
    </div>
  );
};

export default CloudTechnology;
