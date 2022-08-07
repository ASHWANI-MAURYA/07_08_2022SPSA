import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";

const IEEE = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="IEEE"
        bluetext="Institute Of Electrical and Electronics Engineers"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        About IEEE
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "justify", marginBottom: "40px" }}>
        <img
          src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/ieee.jpg"
          style={{ width: "100%", marginBottom: "40px" }}
        />
        IEEE is the world&apos;s largest professional association dedicated to
        advancing technological innovation and excellence for the benefit of
        humanity. IEEE and its members inspire a global community through its
        highly cited publications, conferences, technology standards, and
        professional and educational activities. IEEE Sir Padampat Singhania
        University Student branch was established in 2020 and it aims to expand
        the professional vision of its members, organizes technical and social
        organizations in 6 different committees. In IEEE SPSU student branch
        there are 16 active participants with their respective positions and
        also there are active volunteers of non IEEE members.
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default IEEE;
