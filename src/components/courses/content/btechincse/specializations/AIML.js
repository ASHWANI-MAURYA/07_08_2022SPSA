import { useState } from "react";
import aiml from "../../../../../images/ai-ml.png";
import bluebox from "../../../../../images/blue-box.png";
import rightarrowblue from "../../../../../images/greater-than.png";
import xebia from "../../../../../images/Xebia.png";
import intel from "../../../../../images/intel-logo.png";
import "./Specialization.css";

const AIML = () => {
  const [toggleState, setToggleState] = useState("MORE");
  const [readmoreState, setReadMoreState] = useState(false);

  const onReadToggle = () => {
    if (toggleState === "MORE") {
      setToggleState("LESS");
      document.getElementById("aiml-section").classList.add("aiml-section-open");
      document.getElementById("aiml-section").classList.remove("aiml-section-close");
    } else {
      setToggleState("MORE");
      document.getElementById("aiml-section").classList.remove("aiml-section-open");
      document.getElementById("aiml-section").classList.add("aiml-section-close");
    }
    setReadMoreState(!readmoreState);
  };

  return (
    <div id="aiml-section" className="specialization-general-cse-section aiml-section">
      <img src={aiml} className="specialization-general-cse" />
      <div className="specialization-aiml-section-right">
        <img src={bluebox} className="specialization-green-box" />
        <div className="specialization-aiml-section-title">
          ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING IN COLLABORATION WITH XEBIA AND INTEL
        </div>
        <div className="specialization-general-cse-section-desc">
          Artificial Intelligence &amp; Machine Learning <b style={{ color: "red" }}>in collaboration with Xebia and Intel</b> are new-age topics in Computer Science that use advanced
          statistical tools and programming languages.
          <br />
          Artificial Intelligence &amp; Machine Learning specializations and certifications are among the most in-demand
          certifications across the world. <br />
          AI-ML engineers are employed in leading tech companies (Microsoft,
          Google, etc.) &amp; have high starting salaries (upwards of INR 8 LPA)
        </div>
      </div>
      <div className="specialization-aiml-section-full">
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              INDUSTRY PARTNERS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section aiml-section-logo-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={xebia}
                  className="cloud-technology-read-more-section-industry-partner-logo aiml-section-xebia-logo"
                />
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src={intel}
                  className="cloud-technology-read-more-section-industry-partner-logo aiml-section-intel-logo"
                />
              </div>
            </div>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              BENEFITS
            </div>
            <ul>
              <li>High-end computing lab for experiential learning</li>
              <li>Internship opportunities and access to project portal</li>
              <li>
                Offline delivery of 7-8 courses, along with curriculum support
              </li>
              <li>
                Intel-FICE will also support curriculum development through
                workshops
              </li>
            </ul>
          </div>
        )}
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              SUBJECTS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Data Analytics</div>
                <div>Machine Learning</div>
                <div>Edge Computing</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Deep Learning</div>
                <div>HPC</div>
                <div>Vision processing</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Capstone Project</div>
                <div>Foundation of AI &amp; ML</div>
                <div>Agile Practices</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Python Programming &amp; Supervised Learning</div>
                <div>Unsupervised Learning &amp; Neural Network</div>
                <div>Advance Neural Network</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Natural Language Processing &amp; Search Algorithms</div>
                <div>Computer Vision &amp; Image Processing</div>
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
                <div>AI Research Scientist</div>
                <div>Language Processing Specialist</div>
                <div>Machine Learning Engineer</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Business Intelligence Developer</div>
                <div>Big Data Engineer/ Architect</div>
                <div>Data Scientist</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>NLP Scientist</div>
                <div>Human-Centered Machine Learning Designer</div>
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
                <div>Amazon</div>
                <div>NVIDIA</div>
                <div>Microsoft</div>
                <div>Intel</div>
                <div>IBM</div>
                <div>Accenture</div>
                <div>Facebook</div>
                <div>Samsung</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Lenovo</div>
                <div>Adobe</div>
                <div>MoTekTechnologies</div>
                <div>Uber</div>
                <div>PCOInnovation</div>
                <div>Rakuten Marketing</div>
                <div>Wells Fargo</div>
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

export default AIML;
