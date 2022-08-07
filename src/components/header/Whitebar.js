import "./Header.css";
import spsuheaderlogo from "../../images/spsu-header-logo.png";
import poweredbylogo from "../../images/powered-by.png";
import menumobile from "../../images/menu-mobile.png";
// import search from "../../images/search-grey.png";
import MobileNavBar from "./MobileNavBar";
import crossicon from "../../images/Close_Icon.svg";
import { useState } from "react";

const Whitebar = () => {
  const [mobileNavBarState, setMobileNavBarState] = useState(false);
  const onClickMenuMobile = () => {
    if (mobileNavBarState === false) {
      document.getElementById("menumobile").src = crossicon;
    } else {
      document.getElementById("menumobile").src = menumobile;
    }
    setMobileNavBarState(!mobileNavBarState);
  };
  return (
    <div>
      <div className="container">
        <div className="whitebar">
          <div className="header-logosection">
            <img alt="logo" src={spsuheaderlogo} className="logoheader" />
          </div>
          <div className="menubarwhite">
            <ul type="none">
              <a
                className="whiteheader-links"
                href="/SHRC"
              >
                <li>SHRC</li>
              </a>
              {/* <a className="whiteheader-links" href="http://news.spsu.ac.in/">
                <li>NEWS</li>
              </a> */}
              <a
                className="whiteheader-links"
                href="/ContactUs"
              >
                <li>CONTACT US</li>
              </a>
              {/* <a
                className="whiteheader-links"
                href="/DownloadForm"
              >
                <li>DOWNLOAD APPLICATION FORM</li>
              </a> */}
              <a className="whiteheader-links" href="/NIRF">
                <li>NIRF</li>
              </a>
              <a
                className="whiteheader-links"
                href="/NAD"
              >
                <li>NAD</li>
              </a>
              <a className="whiteheader-links" href="/">
                <li>IQAC</li>
              </a>
            </ul>
            {/* <input placeholder="Search..." className="search-input desktop"/> */}
            {/* <img src={search} className="header-search-logo desktop" /> */}
            <a target="_blank" href="https://admissions.spsu.ac.in" rel="noreferrer">
              <button className="desktop button-white-apply-now header-apply-now">APPLY NOW</button>  
            </a>
            <img
              alt="poweredby"
              src={poweredbylogo}
              className="poweredbylogo"
            />
            <img
              id="menumobile"
              alt="menumobile"
              src={menumobile}
              className="menumobile"
              onClick={onClickMenuMobile}
            />
          </div>
          {mobileNavBarState && (
            <MobileNavBar
              menulist={[
                {
                  menu: "HOME",
                  submenus: [],
                  expandable: false,
                  link: "/"
                },
                {
                  menu: "ABOUT SPSU",
                  submenus: [
                    {
                      menu: "VISION AND MISSION",
                      link: "/AboutUs/VisionAndMission"
                    },
                    {
                      menu: "FOUNDER CHAIRPERSON'S MESSAGE",
                      link: "/AboutUs/Organization/FounderChairpersonMessage"
                    }, 
                    {
                      menu: "CHAIRPERSON'S MESSAGE",
                      link: "/AboutUs/Organization/ChairpersonMessage"
                    },
                    {
                      menu: "PRESIDENT'S MESSAGE",
                      link: "/AboutUs/Organization/PresidentMessage"
                    },
                    {
                      menu: "BOARD OF MANAGEMENT",
                      link: "/AboutUs/Organization/BoardOfManagement"
                    },
                    {
                      menu: "ADVISORY COUNCIL",
                      link: "/AboutUs/Organization/AdvisoryCouncil"
                    },
                    {
                      menu: "ABOUT UNIVERSITY",
                      link: "/AboutUs/AboutUniversity"
                    },
                    {
                      menu: "UNIVERSITY STATUS",
                      link: "/AboutUs/UniversityStatus"
                    }
                  ],
                  expandable: true
                },
                {
                  menu: "SCHOOLS",
                  submenus: [
                    {
                      menu: "B.TECH IN CSE",
                      link: "/CSE/BTech"
                    },
                    {
                      menu: "M.TECH IN CSE",
                      link: "/CSE/MTech"
                    }
                  ],
                  expandable: true
                },
                {
                  menu: "COLLABORATIONS",
                  submenus: [
                    {
                      menu: "ACADEMIC COLLABORATION",
                      link: "/Collaborations/AcademicCollaborations"
                    },
                    {
                      menu: "INDUSTRIAL COLLABORATION",
                      link: "/Collaborations/IndustrialCollaborations"
                    }
                  ],
                  expandable: true
                },
                {
                  menu: "ACADEMICS",
                  submenus: [],
                  expandable: false
                },
                {
                  menu: "FACILITIES",
                  submenus: [],
                  expandable: false
                },
                {
                  menu: "PLACEMENTS",
                  submenus: [
                    {
                      menu: "PLACEMENT RECORDS",
                      link: "/Placements/PlacementRecord"
                    }
                  ],
                  expandable: true
                },
                {
                  menu: "ADMISSIONS",
                  submenus: [
                    {
                      menu: "Admissions",
                      link: "/Admissions"
                    }
                  ],
                  expandable: true
                },
                {
                  menu: "RESEARCH",
                  link: "/",
                  submenus: [],
                  expandable: false
                },
                {
                  menu: "NAAC",
                  link: "/",
                  submenus: [],
                  expandable: false
                },
                {
                  menu: "DIVISION OF INTERNATIONAL AFFAIRS",
                  link: "/",
                  submenus: [],
                  expandable: false
                }
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Whitebar;
