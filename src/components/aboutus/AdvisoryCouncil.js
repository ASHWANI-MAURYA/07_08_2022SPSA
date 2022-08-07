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
import { useEffect, useState } from "react";

const AdvisoryCouncil = () => {
  const [boardmembers, setBoardMembers] = useState([{}]);

  useEffect(() => {
    setBoardMembers([
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/lakshyaraj-singh-mewar.jpg",
        membername: "Mr. Lakshya Raj Singh Mewar",
        memberdesignation: "Executive Director, HRH Group"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/mangal-dev.jpg",
        membername: "Mr. Mangal Dev",
        memberdesignation: "Head of Hitachi Railway Systems, Business India and South Asia"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/r-p-agarwal.jpg",
        membername: "Mr. Rameshwar Pal Agrawal",
        memberdesignation: "IAS (Retd.), FMR Secretary, MHRD, Govt. of India"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/per-olof-thang.jpg",
        membername: "Prof. Per-Olof Thang",
        memberdesignation: "Professor, Gothenburg University, Sweden"
      }
    ]);
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="ADVISORY COUNCIL"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={2}
          activesubitem={5}
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
              level2="ADVISORY COUNCIL"
            />
            <div className="visionpage-title">
              ADVISORY COUNCIL
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>

            <div className="board-of-management-section">
              {boardmembers.map((obj, i) => {
                return (
                  <div key={i} className="board-members-tile">
                    <div className="board-members-tile-image-section">
                      <img
                        src={obj.img}
                        className="board-members-tile-image"
                      />
                    </div>
                    <div className="board-members-tile-name-section">
                      <div className="board-members-tile-name-section-name">
                        <b>{obj.membername}</b>
                      </div>
                      <div className="board-members-tile-name-section-designation">
                        {obj.memberdesignation}
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default AdvisoryCouncil;
