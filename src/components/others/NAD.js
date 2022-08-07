import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";

const NAD = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="Nodal NAD"
        bluetext="National Academic Depository Cell"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        National Academic Depository Cell
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "justify", marginBottom: "40px" }}>
        <table className="table table-striped table-hover table-bordered">
          <thead className="bg-white-f9">
            <tr>
              <th>S.NO</th>
              <th>NAME</th>
              <th>DESIGNATION</th>
              <th>ROLE</th>
              <th>CONTACT DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Dr. Om Prakash Suwalka</th>
              <th>Controller of Examination</th>
              <th>Nodal Officer</th>
              <th>coe@spsu.ac.in</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Dr. Yashovardhan Vyas</th>
              <th>Assistant Professor</th>
              <th>Member</th>
              <th></th>
            </tr>
            <tr>
              <th>3</th>
              <th>Mr. Aman Jain</th>
              <th>Assistant Professor</th>
              <th>Member</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
      <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/dlocker.jpg" style={{ width: "160px", marginRight: "20px" }} />
        <a href="https://nad.digitallocker.gov.in/students">NAD Website</a>
        
      <br/>
      <br/>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default NAD;
