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

const PresidentMessage = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="PRESIDENT'S MESSAGE"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={2}
          activesubitem={3}
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
              level2="PRESIDENT'S MESSAGE"
            />
            <div className="visionpage-title">
            Prof.(Dr.) Padmakali Banerjee
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>

            <div className="chairperson-message-section">
              <div className="chairperson-message">
                <p>
                It is an honour for me to send this message across to millions of higher education aspirants as Vice-Chancellor of Sir Padampat Singhania University, a place where education is considered the power that strengthens not just individuals but society, nations, and the whole universe.
                </p>
                <p>
                  The world around us is changing at a fast pace and at this
                  very moment, newer innovations, technology transformations,
                  new revelations in various areas and subjects are taking
                  place. Higher education, in the present scenario, has come a
                  long way to include global challenges, environmental
                  sustainability, social responsibility and a culture of
                  universal brotherhood. Research, technology, and innovative
                  practises are now an inseparable aspect of education. To keep
                  up with the dynamic environment, students today need to equip
                  themselves with a robust, innovative approach to be able to
                  create, improve, invent and contribute to make a mark in
                  today’s world. The world needs people who are instrumental in
                  bringing about a change instead of those who simply applaud
                  others.
                </p>
                <p>
                  I feel committed to creating a learning environment within the
                  campus where every student aspires to become a change agent, a
                  knowledge seeker, a trailblazer and a pathbreaker. We need
                  young people who are harbingers of progress, values, and
                  reform.
                </p>
                <p>
                  To be able to achieve this vision, we need continual
                  improvement and a commitment to lifelong learning. The
                  sprawling campus of SPSU is the haven that augments and
                  inspires learning. The robust industry backing makes this
                  university a solid platform for those who aspire to become
                  leaders of tomorrow. The City of Lakes, with its rich cultural
                  heritage and awe-inspiring history, provides a natural
                  environment for learning. The highly qualified and motivated
                  faculty here are eager to help, guide and support the students
                  in all their endeavors. We understand that youth today face
                  unprecedented challenges. Mediocrity has no place in the world
                  where boundaries have been erased and global standards are
                  followed in every aspect of life. They need to possess
                  multiskills, myriad talents and the right attitude to achieve
                  success. The university’s curriculum is designed to provide
                  flexibility of choices and holistic learning. The state-of-the
                  art campus is a platform where talents will thrive, confidence
                  will rise and goals will be achieved. A place of learning is
                  like a shrine where the mind is in perfect harmony with peace
                  and happiness. We wish our students to embark on the journey
                  of excellence with us and attain success in every sphere of
                  life.
                </p>
              </div>
              <div className="chairperson-image-section">
                <img
                  src={presidentpic}
                  className="chairperson-image"
                />
                <br />
                <div>
                  <b>Prof.(Dr.) Padmakali Banerjee</b>
                </div>
                <div>President</div>
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

export default PresidentMessage;
