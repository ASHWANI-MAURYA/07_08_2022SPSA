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
import presidentpic from "../../images/newpresident.jpg";
import download from "../../images/download.svg";
import sanjaymishra from "../../images/SanjayMishra.jpeg";
import { useEffect, useState } from "react";

const BoardOfManagement = () => {
  const [boardmembers, setBoardMembers] = useState([{}]);

  useEffect(() => {
    setBoardMembers([
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/nidhiji.jpg",
        membername: "DR. NIDHIPATI SINGHANIA",
        memberdesignation: "Director - JK Organization, Chairperson"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/rsji.jpg",
        membername: "Dr. Raghavpat Singhania",
        memberdesignation: "Managing Director, JK Cement Ltd."
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/madhavji.jpg",
        membername: "Mr. Madhavkrishna Singhania",
        memberdesignation: "Deputy Managing Director & CEO, JK Cement Ltd."
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/a-k-saraogi.jpg",
        membername: "Mr. Ajay Kumar Saraogi",
        memberdesignation: "Deputy Managing Director & CFO, JK Cement Ltd."
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/o3.jpg",
        membername: "Mr. Ashok Ghosh",
        memberdesignation: "Board Member, SPSU"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/vijayrai.jpg",
        membername: "Mr. Vijay Rai",
        memberdesignation: "Chief Growth Officer DayOne Technologies, Atlanta"
      },
      {
        img: presidentpic,
        membername: "(Prof.) Dr. Padmakali Banerjee",
        memberdesignation: "President, SPSU"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/sanjaysinha.jpg",
        membername: "Mr. Sanjay Sinha",
        memberdesignation: "Head of Education, JK Cement"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/dummy.jpg",
        membername: "Smt. Shuchi Tyagi, IAS",
        memberdesignation: "Commissioner College Education, Government of Rajasthan"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/deepak-khazanchi.jpg",
        membername: "Dr. Deepak Khazanchi",
        memberdesignation: "Dean, University of Nebraska, USA"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/arun.jpg",
        membername: "Prof. Arun Kumar",
        memberdesignation: "Dean, School Of Engineering, SPSU"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/Naveen-kumar.jpg",
        membername: "Prof. Naveen Kumar",
        memberdesignation: "Head, Mechanical Engineering, SPSU"
      },
      {
        img: sanjaymishra,
        membername: "Dr. Sanjay Mishra",
        memberdesignation: "Registrar, SPSU"
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
        bluetext="BOARD OF MANAGEMENT"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={2}
          activesubitem={4}
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
              level2="BOARD OF MANAGEMENT"
            />
            <div className="visionpage-title">
              BOARD MEMBERS
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

            <div className="board-of-management-mom-section">
              <h5 className="heading">Minutes of the Board of Management Meetings</h5>
              <br/>
              <div className="syllabus top-line">
                <span>25th BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/Minutes_of_25th_Board_Meeting.pdf"><img alt="" src={download}/></a>
              </div>
              <div className="syllabus">
                <span>24th BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/Minutes_of_24th_Board_Meeting.pdf"><img alt="" src={download}/></a>
              </div>
              <div className="syllabus">
                <span>23rd BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/Minutes_of_23rd_Board_Meeting.pdf"><img alt="" src={download}/></a>
              </div>
              <div className="syllabus">
                <span>22nd BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/MoM%2022nd%20Meeting%20of%20BoM.pdf"><img alt="" src={download}/></a>
              </div>
              <div className="syllabus">
                <span>21st BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/21st%20BOM%20Minutes%20of%20Meeting%20.pdf"><img alt="" src={download}/></a>
              </div>
              <div className="syllabus">
                <span>20th BoM Meeting Minutes</span>
                <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/20th%20BoM%20Meeting%20Minutes.pdf"><img alt="" src={download}/></a>
              </div>
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

export default BoardOfManagement;
