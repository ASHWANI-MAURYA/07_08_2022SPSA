import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import BannerSubPage from "../banner/BannerSubPage";
import SideNavigation from "../sidenavigation/SideNavigation";
import "./AboutUs.css";
import visionimagegroup from "../../images/vision-image-group.png";
import missionimagegroup from "../../images/mission-image-group.png";
import visionimagegroupphone from "../../images/vision-image-group-phone.png";
import missionimagegroupphone from "../../images/mission-image-group-phone.png";
import aboutusbanner from "../../images/visionpagebanner.png";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import greenunderlinemobile from "../../images/green-underline-mobile.png";

const VisionPage = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="VISION AND MISSION"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={1}
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
              level2="VISION &amp; MISSION"
            />
            <div className="visionpage-title">
              Sir Padampat Singhania University (SPSU)
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>

            <div className="visionpage-summary">
              <p>
              It is nearly half a century now since the late Sir Padampat Singhania, the visionary founder of the JK Organization, dreamt of an empowered Indian populace, through whom India would take its place as an equal in the comity of nations. According to him, empowerment presupposes education and knowledge. That then became the cornerstone of the organization&apos;s philosophy for discharging its social responsibility and the JK Cement Ltd. Nimbahera Foundation (JKCNF) was born. Over time, involvement in education became stronger and deeper.
              </p>
              <p>
              Today, two decades later, it is associated with twelve educational institutions imparting education to nearly 14,000 students at various levels of the learning curve. The JK Cement Ltd. and Nimbahera Foundation envisioned the establishment of a world-class university in Rajasthan benchmarked to international educational institutions. The Foundation constituted a think tank of eminent people from the industry, science and technology, and academia who prepared the blueprint of the university. The University is committed to academic excellence, entrepreneurial spirit, diversity, vibrancy, and creativity.
              </p>
            </div>
            <div className="visionpage-our-vision-section">
              <img
                alt="our-vision"
                className="vision-image-group"
                src={visionimagegroup}
              />
              <img
                alt="our-vision"
                className="vision-image-group-phone"
                src={visionimagegroupphone}
              />
              {/* <div className="visionpage-our-vision-box">
          <div className="visionpage-our-vision-box-title">OUR VISION</div>
          <div className="visionpage-our-vision-box-desc">
            Preparing future leaders to solve tomorrow&apos;s challenges through
            immersive, industry focused transformational learning.{' '}
          </div>
        </div>
        <img alt="our-vision" src={visionimage} className="visionimage"/> */}
            </div>
            <div className="visionpage-our-mission-section">
              <img
                alt="our-mission"
                className="vision-image-group"
                src={missionimagegroup}
              />
              <img
                alt="our-mission"
                className="vision-image-group-phone"
                src={missionimagegroupphone}
              />
              {/* <img alt="our-mission" src={missionimage} className="missionimage"/>
      <div className="visionpage-our-mission-box">
          <div className="visionpage-our-mission-box-title">OUR MISSION</div>
          <div className="visionpage-our-mission-box-desc">
            Our mission is to make industry relevant learning equitable and
            accessible to all our students, equipping them to face dynamically
            shifting industry needs. Our students will be future leaders who are
            inclusive &amp; ethical, and are ready to face ever-evolving
            challenges.
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      <ContactUs />
      <Copyright />
    </>
  );
};

export default VisionPage;
