import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
// import Newsletter from "../footer/Newsletter";
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
import { Helmet } from "react-helmet";

const AboutUniversity = () => {
  useEffect(() => {}, []);
  return (
    <>
    <Helmet>
        <title>About JK Cement&apos;s SPSU University | SPSU Is Best University in Mewar, Rajasthan</title>
        <meta name="description" content="Sir Padampat Singhania University (SPSU), Best University in Rajasthan, is India's fastest growing, A NAAC Accredited, UCG Approved University promoted by JK Cement" />
        <meta
          name="keywords"
          content="JK Cement University
          best university in mewar"
        />
        <link rel="canonical" href="https://www.spsu.ac.in/about-university" />
      </Helmet>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="ABOUT UNIVERSITY"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={3}
          activesubitem={1}
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
              href: "/about-university"
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
              level2="ABOUT UNIVERSITY"
            />
            <div className="visionpage-title">
              <h1>About Univsersity</h1>
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>
            <div className="about-university-section">
              <div className="about-university-timeline-left-side">
                <div className="about-university-beginning box-arrow-right">
                  <div className="about-university-box-title">
                    The Beginning
                  </div>
                  <div className="about-university-box-desc">
                    It is nearly half a century now that{" "}
                    <b>Late Sir Padampat Singhania</b>, the visionary founder of
                    the <b>JK Organization </b>
                    dreamt of an empowered India populace, through whom India
                    would take its place as an equal in the comity of nations.
                    According to him, empowerment pre-supposes education and
                    knowledge. That then became the cornerstone of the
                    Organization&apos;s philosophy for discharging its social
                    responsibility and the{" "}
                    <b>JK Cement Nimbahera Foundation (JKCNF)</b> was born. Over
                    time, involvement with education became stronger and deeper.
                    Today, two decades later, it is associated with twelve
                    educational institutions imparting education to nearly{" "}
                    <b>14000 students</b> at various levels of the learning
                    curve.
                  </div>
                </div>
              </div>
              <div className="about-university-timeline-right-side">
                <div className="about-university-worldclassuniversity box-arrow-left">
                  <div className="about-university-box-title">
                    World Class University
                  </div>
                  <div className="about-university-box-desc">
                    The <b>JK Cement Nimbahera Foundation</b> envisioned the
                    establishment of a world-class university in Rajasthan
                    benchmarked to international educational institutions. The
                    Foundation constituted a think tank of eminent people from
                    the industry, science and technology, and academia who
                    prepared the blueprint of the university. The University is
                    committed to academic excellence, entrepreneurial spirit,
                    diversity, vibrancy, and creativity.
                  </div>
                </div>
              </div>
              <div className="about-university-timeline-left-side">
                <div className="about-university-beginning box-arrow-right">
                  <div className="about-university-box-title">Location</div>
                  <div className="about-university-box-desc">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7254.338144318997!2d73.991346!3d24.617857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e4dcab2363862c!2sSir%20Padampat%20Singhania%20University!5e0!3m2!1sen!2sin!4v1578900632499!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="about-university-timeline-right-side">
                <div className="about-university-worldclassuniversity box-arrow-left">
                  <div className="about-university-box-title">Take a Tour</div>
                  <div className="about-university-box-desc">
                    <iframe
                      src="https://www.youtube.com/embed/q5zLuSQYAjw?autoplay=0&amp;list=PLrMTV7qnHsP_nMbY-yYutop_Q6rvY_dmA&amp;amp=&amp;ecver=1"
                      frameBorder="0"
                      allowFullScreen=""
                      id="fitvid0"
                      width="100%"
                      height="300"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="about-university-timeline"></div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default AboutUniversity;
