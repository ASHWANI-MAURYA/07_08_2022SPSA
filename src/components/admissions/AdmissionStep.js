import borderyellow from "../../images/yellow-bottom-line.png";
import bordergreen from "../../images/green-bottom.png";
import "./Admissions.css";
const AdmissionStep = () => {
  return (
    <div className="admission-step-section">
      <div className="container">
        <div className="admission-step">
          <h3 className="admission-step-title">SPSAT Admission Steps</h3>
          <div className="admission-step-tab-buttons">
          </div>
          <div className="spsat-cards">
            <div className="spsat-card">
              <h6 className="sno">01</h6>
              <img alt="" src={borderyellow} className="bottom-border" />
              <p className="spsat-desc">Start the application</p>
            </div>
            <div className="spsat-card">
              <h6 className="sno">02</h6>
              <img alt="" src={borderyellow} className="bottom-border" />
              <p className="spsat-desc">Submission of application with supporting documents</p>
            </div>
            <div className="spsat-card">
              <h6 className="sno">03</h6>
              <img alt="" src={borderyellow} className="bottom-border" />
              <p className="spsat-desc">Issuance of offer letter</p>
            </div>
            <div className="spsat-card">
              <h6 className="sno">04</h6>
              <img alt="" src={bordergreen} className="bottom-border" />
              <p className="spsat-desc">
              Application Fee Payment 
              </p>
            </div>
            <div className="spsat-card">
              <h6 className="sno">05</h6>
              <img alt="" src={bordergreen} className="bottom-border" />
              <p className="spsat-desc">
              Registration and commencement of classes
              </p>
            </div>
            {/* <div className="spsat-card">
              <h6 className="sno">06</h6>
              <img alt="" src={bordergreen} className="bottom-border" />
              <p className="spsat-desc">
                Appear for online proctored SPSAT to avail scholarship
              </p>
            </div> */}
          </div>
          <a href="https://admissions.spsu.ac.in/">
            <button className="blue-btn">REGISTER FOR SPSAT NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AdmissionStep;
