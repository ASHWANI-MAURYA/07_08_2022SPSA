import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUsFooter from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";
import "./Others.css";

const ExamResult = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="EXAMINATION"
        bluetext="RESULTS"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        Examination Results
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "justify" }}>
        <div className="exam-results-form">
          <label aria-required>Enrollment Number</label>
          <input required placeholder="Enter your Enrollment No." />
          <label aria-required>Date Of Birth</label>
          <input type="date" />
          <button className="blue-btn">Submit</button>
        </div>
      </div>
      <ContactUsFooter />
      <Copyright />
    </>
  );
};

export default ExamResult;
