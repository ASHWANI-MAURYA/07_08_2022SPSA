import BannerSubPage from "../banner/BannerSubPage";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import academiccollaborationsbanner from "../../images/academic-collaborations-banner.png";
import industrialcollaborationsbanner from "../../images/industrial-collaborations-banner.png";
import { useEffect, useState } from "react";
import IndustrialCollaboration from "./IndustrialCollaboration";
import AcademicCollaboration from "./AcademicCollaboration";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import "../courses/Courses.css";
import "./Collaborations.css";

const Collaboration = (props) => {
  const [bannerimage, setBannerImage] = useState("");
  const [greentext, setGreenText] = useState("");
  const [bluetext, setBlueText] = useState("");
  const [pagecontenttitle, setPageContentTitle] = useState("");
  const [contentcomponent, setContentComponent] = useState(<></>);

  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const collaborationtype = urlParts[urlParts.length - 1];

    if (collaborationtype === "AcademicCollaborations") {
      setBannerImage(academiccollaborationsbanner);
      setGreenText("ACADEMIC");
      setPageContentTitle("Chiba University of Commerce, Japan");
      setContentComponent(<AcademicCollaboration />);
    } else if (collaborationtype === "IndustrialCollaborations") {
      setBannerImage(industrialcollaborationsbanner);
      setGreenText("INDUSTRIAL");
      setContentComponent(<IndustrialCollaboration />);
    }
    setBlueText("COLLABORATIONS");
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={bannerimage}
        greentext={greentext}
        bluetext={bluetext}
      />
      <div className="aboutus-content">
        <div className="aboutus-content-page industrial-collaboration-grid-section">
          <div className="container">
            <div className="coursepage-title">{pagecontenttitle}</div>
            {contentcomponent}
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Collaboration;
