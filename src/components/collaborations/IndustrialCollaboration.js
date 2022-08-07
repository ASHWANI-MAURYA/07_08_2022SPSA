import "./Collaborations.css";
import silverbar from "../../images/silverbar.png";
import img1 from "../../images/aws-academy.png";
import img2 from "../../images/intel-logo.png";
import img3 from "../../images/gainwell-logo.png";
import img4 from "../../images/Xebia.png";
import img5 from "../../images/Beumer Group.png";
import img6 from "../../images/FLSmidth.png";
import img7 from "../../images/microsoft (2).png";
import img8 from "../../images/tcs-ion.png";
import img10 from "../../images/GHH_new.png";
import img11 from "../../images/sas_new.svg";

const IndustrialCollaboration = (props) => {
  return (
    <div className="collaboration-industrial-tiles-section">
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img1} className="collaboration-aws-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum support for Cloud Computing
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img2} className="collaboration-intel-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and set up of high powered computing IoT lab with certification opportunity
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img3} className="collaboration-gainwell-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum support and live project support for Advanced Mining course
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img5} className="collaboration-beumer-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum support for Cement Technology course
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img4} className="collaboration-xebia-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and co-delivery of AI/ML Specialization with certification opportunity
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img6} className="collaboration-flsmidth-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and co-delivery of Cement Technology specialization
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img8} className="collaboration-aws-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and co-delivery of Cloud computing with provision for remote internship opportunity
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img7} className="collaboration-intel-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and certification for Cloud Computing
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={"https://media.glassdoor.com/sqll/303029/hindustan-zinc-limited-squarelogo.png"} style={{ width: "62px" }} className="collaboration-gainwell-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Curriculum development and live project support for Advance Mining course
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img10} className="collaboration-beumer-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Certification in Mechanical Engineering
        </div>
      </div>
      <div className="collaboration-industrial-tiles-section-tile">
        <div className="collaboration-industrial-tiles-section-tile-company-logo-div">
          <img src={img11} className="collaboration-xebia-logo" />
        </div>
        <img
          src={silverbar}
          className="collaboration-industrial-tiles-section-tile-silverbar"
        />
        <div className="collaboration-industrial-tiles-section-tile-summary">
        Co-delivery MBA program with specialization in Business Analytics with certification opportunity
        </div>
      </div>
      
    </div>
  );
};

export default IndustrialCollaboration;
