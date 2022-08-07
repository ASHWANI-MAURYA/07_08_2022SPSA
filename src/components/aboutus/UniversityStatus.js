import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import BannerSubPage from "../banner/BannerSubPage";
import SideNavigation from "../sidenavigation/SideNavigation";
import "./AboutUs.css";
import aboutusbanner from "../../images/visionpagebanner.png";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import greenunderlinemobile from "../../images/green-underline-mobile.png";
import { useEffect } from "react";

const UniversityStatus = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="UNIVERSITY STATUS"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={4}
          listitems={[
            {
              item: "VISION AND MISSION",
              href: "/AboutUs/VisionAndMission"
            },
            {
              expandable: true,
              item: "ORGANIZATION",
              subitems: [
                {
                  title: "FOUNDER CHAIRPERSON MESSAGE",
                  href: "/AboutUs/Organization/FounderChairpersonMessage"
                },
                {
                  title: "CHAIRPERSON'S MESSAGE",
                  href: "/AboutUs/Organization/ChairpersonMessage"
                },
                {
                  title: "PRESIDENT'S MESSAGE",
                  href: "/AboutUs/Organization/PresidentMessage"
                },
                {
                  title: "BOARD OF MANAGEMENT",
                  href: "/AboutUs/Organization/BoardOfManagement"
                },
                {
                  title: "ADVISORY COUNCIL",
                  href: "/AboutUs/Organization/AdvisoryCouncil"
                }
              ]
            },
            {
              item: "ABOUT UNIVERSITY",
              href: "/AboutUs/AboutUniversity"
            },
            {
              item: "UNIVERSITY STATUS",
              href: "/AboutUs/UniversityStatus"
            }
          ]}
        />
        <div className="aboutus-content-page">
          <div className="container">
            <Breadcrumb
              activepage="Vision"
              level1="ABOUT SPSU"
              level2="UNIVERSITY STATUS"
            />
            <div className="visionpage-title">
              UNIVERSITY STATUS
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>
            <div className="university-status-image-section">
              <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/slider1.jpg" className="university-status-image"/>
            </div>
            <div className="university-status-desc-section">
              <p>
                <b>Sir Padampat Singhania University</b> has been established
                through an Act{" "}
                <b>(Sir Padampat Singhania University, Udaipur Act, 2008)</b> of
                the State Government of Rajasthan.{" "}
                <b>Sir Padampat Singhania University </b>is recognised by UGC vide Letter No: F.9-8/2009(CPP-1) dated 13
                April 2009 and Letter No: F.5-3/2017(CPP-1/PU) dated 18 April
                2017. The university is empowered to award degrees as specified
                by the UGC under section 22 of the UGC Act, 1956.
              </p>
              <p>
                UGC conducted the mandatory inspection of the university on
                maintenance of minimum standards and, thereafter, recognized{" "}
                <b>SPSU</b> under section 2(f) of the UGC Act 1956 vide Letter
                No: F.9-8/2009(CPP-1/PU) dated 31 October 2014.
              </p>
            </div>
            <div className="university-status-desc-section">
              <h5 className="heading" style={{ marginBottom: "20px" }}>AIU Membership</h5>
              <p>
                <b>Sir Padampat Singhania University, Udaipur</b> is a member of
                <b> Association of Indian Universities (AIU)</b> since July 2013.
                As a member, the university can take part in various activities
                conducted by <b>AIU</b>. AIU also helps the member universities
                to ascertain the equivalence of foreign degrees in relation to
                corresponding Indian degrees.
              </p>
            </div>
            <div className="university-status-desc-section">
              <h5 className="heading" style={{ marginBottom: "20px" }}>Type of University</h5>
              <p>
                <b>Sir Padampat Singhania University</b> is a unitary type of
                university located at Bhatewar, Udaipur, Rajasthan. The
                university does not have off campus centers / study centers
                anywhere in India and abroad.
              </p>
            </div>
            <div className="university-status-buttons-section">
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/SPSU12.pdf"><button style={{ width: "fit-content", padding: "15px" }} className="button-white-apply-now university-status-singhania" >SIR PADAMPAT SINGHANIA UNIVERSITY, UDAIPUR ACT, 2008 (Act No. 4 of 2008)</button></a>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/UGC.pdf"><button style={{ width: "fit-content", padding: "15px" }} className="button-white-apply-now university-status-ugc-recognition">UGC Recognition</button></a>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default UniversityStatus;
