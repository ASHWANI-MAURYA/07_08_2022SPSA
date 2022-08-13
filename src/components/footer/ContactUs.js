import "./Footer.css";
import spsufooterlogo from "../../images/spsu-footer-logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linked-in.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import chaticon from "../../images/chat-icon.png";
import { useState } from "react";

const ContactUs = () => {
  const [chatstatus, setChatStatus] = useState(false);
  const onInitiateChat = () => {
    if (chatstatus === false) {
      setChatStatus(true);
      document.getElementById("chatbot-component").style.height = "545px";
    } else {
      setChatStatus(false);
      document.getElementById("chatbot-component").style.height = "0px";
    }
  };
  return (
    <div className="contactuspane">
      {/* <div className="form">
        <div>
          <div style= {{ marginTop: 10 }} className="npf_wgts" data-height="430px" data-w="a357c3a0cf88207b20e906c2e6a4db32"></div>
        </div>
      </div> */}
      <div className="container">
        <div className="copyrightbar contactus-container">
          <div className="contactus-left-section">
            <div className="contactus-left-section-subclass">
              <img
                alt="spsufooterlogo"
                src={spsufooterlogo}
                className="spsufooterlogo"
              />
              <div className="contactus-address">
                Sir Padampat Singhania University <br />
                Bhatewar Udaipur 313 601, Rajasthan India
                <br />
                1800 8896 555
              </div>
            </div>

            <div className="contactus-social-media-logos">
              <a href="https://www.facebook.com/spsuudaipurindia">
                <img
                  alt="facebook"
                  src={facebook}
                  className="social-media-logo"
                />
              </a>
              <a href="https://twitter.com/Spsu_Udaipur/">
                <img
                  alt="twitter"
                  src={twitter}
                  className="social-media-logo"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCtfSS5zZLa3SHQoBcCdHCcg">
                <img
                  alt="youtube"
                  src={youtube}
                  className="social-media-logo"
                />
              </a>
              <a href="https://www.instagram.com/spsuofficial">
                <img
                  alt="instagram"
                  src={instagram}
                  className="social-media-logo"
                />
              </a>
              <a href="https://www.linkedin.com/school/spsuofficial">
                <img
                  alt="linkedin"
                  src={linkedin}
                  className="social-media-logo"
                />
              </a>
            </div>
          </div>
          <div className="contactus-right-section">
            <div className="contactus-col">
              <div className="contactus-right-section-boxes">
                <div className="contactus-right-section-boxes-title">Media</div>
                {/* <a
                  className="footer-links"
                  href="/Gallery"
                >
                  <div className="contactus-right-section-boxes-item">
                    Gallery
                  </div>
                </a> */}
                <a
                  className="footer-links"
                  href="/NAACVisit"
                >
                  <div className="contactus-right-section-boxes-item">
                    Video
                  </div>
                </a>
              </div>
              <br />
              <div className="contactus-right-section-boxes">
                <div className="contactus-right-section-boxes-title">
                  Download
                </div>
                <a
                  className="footer-links"
                  href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf"
                >
                  <div className="contactus-right-section-boxes-item">
                    Prospectus
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/file/AQAR-2019-20.pdf"
                >
                  <div className="contactus-right-section-boxes-item">
                    AQAR 2019-20
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/file/SOP_%20SPSU_Udaipur_Latest.pdf"
                >
                  <div className="contactus-right-section-boxes-item">
                    COVID SOP
                  </div>
                </a>
                <a className="footer-links" href="/IEEE">
                  <div className="contactus-right-section-boxes-item">IEEE</div>
                </a>
              </div>
            </div>
            <div className="contactus-col">
              <div className="contactus-right-section-boxes">
                <div className="contactus-right-section-boxes-title">
                  Admissions
                </div>
                <a
                  className="footer-links"
                  href="/Admissions/FeesStructure"
                >
                  <div className="contactus-right-section-boxes-item">
                    Fee Structure
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Admissions/AdmissionProcess"
                >
                  <div className="contactus-right-section-boxes-item">
                    Admission Process
                  </div>
                </a>
                <a className="footer-links" href="/Admissions/FAQs">
                  <div className="contactus-right-section-boxes-item">FAQs</div>
                </a>
                <a
                  className="footer-links"
                  href="/ContactUs"
                >
                  <div className="contactus-right-section-boxes-item">
                    Contact for Admission
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/ExamResult"
                >
                  <div className="contactus-right-section-boxes-item">
                    Results
                  </div>
                </a>
              </div>
            </div>
            <div className="contactus-col">
              <div className="contactus-right-section-boxes">
                <div className="contactus-right-section-boxes-title">
                  Other Links
                </div>
                {/* <a className="footer-links" href="https://blog.spsu.ac.in/">
                  <div className="contactus-right-section-boxes-item">Blog</div>
                </a> */}
                <a
                  className="footer-links"
                  href="/Academics/AcademicRegulations"
                >
                  <div className="contactus-right-section-boxes-item">
                    Academic Regulations
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Academics/AcademicCalendar"
                >
                  <div className="contactus-right-section-boxes-item">
                    Academic Calendar
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Academics/OurFaculty"
                >
                  <div className="contactus-right-section-boxes-item">
                    Our Faculty
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Academics/Mentorship"
                >
                  <div className="contactus-right-section-boxes-item">
                    Mentorship
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Academics/ProjectEndeavour"
                >
                  <div className="contactus-right-section-boxes-item">
                    Project Endeavour
                  </div>
                </a>
                <a
                  className="footer-links"
                  href="/Academics/SWAYAM"
                >
                  <div className="contactus-right-section-boxes-item">
                    SWAYAM
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
        <img src={chaticon} className="chat-icon" onClick={onInitiateChat} />

      </div>
    </div>

  );
};
const s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s);
export default ContactUs;
