import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";

const DownloadForm = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="DOWNLOAD"
        bluetext="APPLICATION FORM"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        Download Form
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "left", marginBottom: "40px" }}>
        <b style={{ color: "blue" }}>Instructions to fill the form</b>
        <ul>
          <li>Download the Application Form and get a print of it</li>
          <li>Fill up the form carefully</li>
          <li>
            Enclose a DD/Cheque of Rs 1175/- in favor of Sir Padampat Singhania
            University, Udaipur
          </li>
          <li>
            Send the duly filled form along with DD/Cheque to the university address
            i.e.
          </li>
        </ul>
        <p>
            Head Admission<br/>
            Sir Padampat Singhania University<br/>
            Bhatewar, Udaipur 313 601, Rajasthan<br/><br/>
            Helpline - 18008896555<br/>
        </p>
        <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/Application-Form-2021-22.pdf"><button className="blue-button">DOWNLOAD FORM</button></a>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default DownloadForm;
