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

const FounderChairpersonMessage = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="FOUNDER CHAIRPERSON'S MESSAGE"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={2}
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
              level2="FOUNDER CHAIRPERSON'S MESSAGE"
            />
            <div className="visionpage-title">
            Mr. Yadupati Singhania
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>

            <div className="chairperson-message-section">
              <div className="chairperson-message">
                <p>
                  As India moves forward, the pace of change accelerates, and conflicts between technology and society, humankind, and the environment are becoming increasingly evident. At the same time, as the age of nations is coming to an end, global competition has inspired a growing awareness of the need for a collective human society. In this era of rapid change, Sir Padampat Singhania University intends to contribute to that international goal by reviving the importance of &quot;knowledge&quot;. I sincerely believe that knowledge, a critical mind, the capacity to understand, and a sense of individual and collective responsibility are the antidotes to ignorance.
                </p>
                <p>
                  Essentially, knowledge frees human beings. It is a profound source of power that encourages candid human interaction and provides people with vigour, as well as liberates them from various limitations. The creation and application of new forms of knowledge will no doubt determine the future direction of human society.
                </p>
                <p>
                  Sir Padampat Singhania University will strive to achieve three primary objectives: to deliver a distinctive first quality education; to foster research, creation, and discovery; and to use the knowledge created on campus to serve society. Our institution will be a conceptual space where ideas are nurtured and dreams take flight.
                </p>
                <p>
                  It will be a family of communities within a larger community. It will also be a physical landscape that both celebrates our traditions and stands as a gateway to the future. Our university invites its faculty and students to join a common search for answers to the fundamental and pressing questions that confront society. We do so not in the name of learning alone but, in the words of our informal motto, to create through the synergy of the mind and hands. Let it be the vigorous unremitted effort of your whole life to leave the world wiser and better than you found it at your entrance. In the process, we will not only guarantee you a job but a lifetime of employability.
                </p>
              </div>
              <div className="chairperson-image-section">
                <img
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Yadupati-Singhania.jpg"
                  className="chairperson-image"
                />
                <br />
                <div><b>Mr. Yadupati Singhania</b></div>
                <div>Founder Chairperson</div>
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

export default FounderChairpersonMessage;
