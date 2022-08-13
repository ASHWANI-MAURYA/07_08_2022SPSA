import "./Mainpage.css";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import Testimonials from "./Testimonials";
import Copyright from "../footer/Copyright";
import ContactUs from "../footer/ContactUs";
import Placements from "./Placements";
import Banner from "../banner/BannerHomePage";
import Pioneers from "./Pioneers";
import Recruiters from "./Recruiters";
import IndustryCollaboration from "./IndustryCollaboration";
import NewsUpdates from "./NewsUpdates";
import CampusAmenities from "./CampusAmenities";
import Programs from "./programs/Programs";
import CampusFacilities from "./CampusFacilities";
import greaterthan from "../../images/greater-than.png";
import OverTheYears from "./OverTheYears";
// import OurAdvisors from "./OurAdvisors";
import Chatbot from "./chatbot/Chatbot";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Best MBA & Engineering College in Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="SPSU Udaipur ranks among Top 100 Universities in India: We are offering undergraduate, Ph.D., courses in Management (BBA/MBA) and Engineering (B.Tech/M.Tech). Visit to know more." />
        <meta
          name="keywords"
          content="best engineering colleges in rajasthan
          best M tech colleges in rajasthan"
        />
      </Helmet>
      <Greybar />
      <Whitebar />
      <Menubar />
      <Banner />
      <div className="mobile homepage-advertisement-section">
        <div className="homepage-advertisement-message">
          We&apos;re accepting applications for MBA 2022-2023.
        </div>
        <a href="https://spsu.ac.in/admissions2022/index.php">
          <div className="homepage-advertisement-apply-now">
            APPLY NOW
            <img src={greaterthan} className="greater-than" />
          </div>
        </a>
      </div>
      <CampusFacilities />
      <div className="pioneers-section desktop">
        <Pioneers />
        <OverTheYears />
      </div>
      <div className="mobile">
        <div className="pioneers-section">
          <Pioneers />
        </div>
        <OverTheYears />
      </div>
      <Programs
        programs={[
          {
            school: "ENGINEERING",
            courses: [
              {
                category: "B.Tech Programs",
                branches: [
                  {
                    branchname: "CSE (General)"
                  },
                  {
                    branchname: "CSE (AI/ML)"
                  },
                  {
                    branchname: "CSE (Cloud Computing)"
                  },
                  {
                    branchname: "Mining Engineering"
                  },
                  {
                    branchname: "Mining (Advanced Mining Technology)"
                  },
                  {
                    branchname: "Mechanical Engineering (Cement Technology)"
                  },
                  {
                    branchname:
                      "Electronics & Communication Engineering (Embedded Systems and IoT)"
                  }
                ]
              },
              {
                category: "M.Tech Programs",
                branches: [
                  {
                    branchname: "Computer Science and Engineering"
                  },
                  {
                    branchname: "Electronics & Communication Engineering"
                  },
                  {
                    branchname: "Mechanical Engineering"
                  },
                  {
                    branchname: "Mining Engineering"
                  }
                ]
              },
              {
                category: "Ph.D"
              }
            ]
          },
          {
            school: "MANAGEMENT",
            courses: [
              {
                category: "BBA Programs",
                branches: [
                  {
                    branchname: "Data Analytics and Management Reporting"
                  },
                  {
                    branchname: "Digital Marketing"
                  },
                  {
                    branchname: "Human Resources"
                  }
                ]
              },
              {
                category: "MBA Programs",
                branches: [
                  {
                    branchname: "Business Analytics"
                  }
                ]
              }
            ]
          }
        ]}
      />
      <IndustryCollaboration />
      <Placements />
      <Recruiters />
      {/* <OurAdvisors /> */}
      <CampusAmenities /> 
      <NewsUpdates
        spsuData={[
          {
            title: "RAINBOW Consortium Meeting on July 12-13, 2022 at SPSU",
            timeago: "2 DAYS AGO",
            desc: "The RAINBOW Consortium Meeting was held at Sir Padampat Singhania University, Udaipur on July 12-13, 2022. SPSU ERASMUS + European Union funded",
            href: "RainbowConsortiumMeeting"
          },
          {
            title: "Session on Career Opportunities in the Armed Forces held at SPSU on July 27, 2022",
            timeago: "A WEEK AGO",
            desc: "Colonel Sanjay Sinha, Head - Education Vertical, JK Cement Ltd delivered a session on ‘Career Opportunities in the Armed Forces’...",
            href: "CareerOpportunities"
          },
          {
            title: "Open Mic",
            timeago: "2 MONTHS AGO",
            desc: "An Open Mic event was conducted by the students of SPSU on July 15th, 2022. A lot of enthusiasm was showcased by them through playing the instruments...",
            href: "OpenMic"
          },
          {
            title: "University Magazine Elements 2022",
            timeago: "3 MONTHS AGO",
            desc: "We, at SPSU, provide transformative learning which helps students realize their potential, unfold their creative wings and make a meaningful difference in today’s world.…",
            href: "MagazineElements"
          }
        ]}
      />
      <Testimonials />
      <Chatbot />
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Homepage;
