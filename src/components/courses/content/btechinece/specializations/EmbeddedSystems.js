import darkgreenbox from "../../../../../images/dark-green-box.png";
import rightarrowblue from "../../../../../images/greater-than.png";
import { useState } from "react";
import "./Specialization.css";

const EmbeddedSystems = () => {
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
    <div className="specialization-cloud-techology-section ece-iot-section">
      <div className="specialization-cloud-techology-left">
        <img src={darkgreenbox} className="specialization-green-box" />
        <div className="specialization-cloud-techology-section-title">
          EMBEDDED SYSTEMS &amp; IOT
        </div>
        <div className="specialization-cloud-technology-section-desc">
          Internet of Things (IoT) relates to physical and virtual objects that
          have unique identities and are connected to the internet to facilitate
          intelligent applications that make energy, logistics, industrial
          control, retail, agriculture and many other domains “smarter”.
          Internet of Things is a new revolution of the internet that rapidly
          gathering momentum driven by the advancements in sensor networks,
          mobile devices, wireless communications, networking and cloud
          technologies. As per the experts, the number of Internet-connected
          devices will exceed 50 billion by 2030. Specialization in Internet of
          Things shall help students discover the supporting skills such as
          embedded systems and wireless sensor networks. Top commercial
          officialdoms have underway concentrating on the prospects thrown up by
          Internet of Things like smart cities. Consequently, firms are in
          search of experts who have sound knowledge of IoT.
        </div>
       
        {readmoreState && (
          <div className="cloud-technology-read-more-section">
            <div className="cloud-technology-read-more-section-header">
              INDUSTRY PARTNERS
            </div>
            <div className="cloud-technology-read-more-section-industry-partners-section">
              <div className="cloud-technology-read-more-section-industry-partner">
                <img
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/nh6awsxaclmiqfahnx7x"
                  className="cloud-technology-read-more-section-industry-partner-logo"
                />
                <div className="cloud-technology-read-more-section-industry-partner-summary">
                Omnipresent Robot Tech
                </div>
                <ul>
                  <li>
                  Omnipresent is partnering with SPSU to provide expertise through faculty engagement, student projects, and expert lectures
                  </li>
                  <li>
                  Omnipresent is setting up a state-of-the-art robotics lab at SPSU
                  </li>
                  <li>
                  Omnipresent will provide curriculum support to SPSU
                  </li>
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
                <div>Advanced Microcontrollers</div>
                <div>Real-Time Operating System</div>
                <div>Wireless Sensor networks and IoT</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Wearable Technology</div>
                <div>Sensors Actuators and Interfacing</div>
                <div>IoT Edge Nodes and its Applications</div>
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
                <div>Embedded Software Engineer (firmware)</div>
                <div>System Software Engineer (kernel &amp; RTOS)</div>
                <div>Application Software Engineer (device drivers)</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Software Test Engineer</div>
                <div>Embedded Hardware Engineer</div>
                <div>Embedded System Trainers</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Marketing &amp; Sales Executive</div>
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
                <div>Texas Instruments</div>
                <div>NXP</div>
                <div>Wipro</div>
                <div>Samsung</div>
                <div>Tata teleservice</div>
                <div>LG</div>
                <div>Dell</div>
                <div>CISCO</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Reliance</div>
                <div>General Electric</div>
                <div>Bharat Electronics Ltd. (BEL)</div>
                <div>Bharat Heavy Electrical Ltd (BHEL)</div>
                <div>Hindustan Petroleum Corporation  Limited (HPCL)</div>
                <div>Apple</div>
                <div>Ola</div>
                <div>Motorola</div>
              </div>
              <div className="cloud-technology-read-more-section-industry-partner">
                <div>Honeywell</div>
                <div>HCL Technologies</div>
                <div>RBEI</div>
                <div>TATA</div>
                <div>National Thermal Power Corporation Ltd (NPTC)</div>
                <div>Siemens</div>
              </div>
            </div>
          </div>
        )}
        <div className="read-more" onClick={onReadToggle}>
          READ {toggleState}
          <img src={rightarrowblue} className="specialization-right-arrow" />
        </div>
      </div>
      <img
        src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/B-Tech-in-Electronics-_-Communication-Engineering.jpg"
        className="specialization-cloud-techology ece-iot-image"
      />
    </div>
  );
};

export default EmbeddedSystems;
