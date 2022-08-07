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
            title: "Aakash Sinha’s Visit @ SPSU",
            timeago: "2 DAYS AGO",
            desc: "Leading Entrepreneur- CEO &Founder of Omnipresent Mr. Aakash Sinha’s visits Sir Padampat Singhania University, Udaipur on November 22, 2021",
            href: "https://news.spsu.ac.in/news-of-aakash-sinhas-visit-at-spsu/"
          },
          {
            title: "NCC Enrollment Drive 2021-2022",
            timeago: "A WEEK AGO",
            desc: "SPSU is a partner to a European Union funded multilateral Project RAINBOW-Realizing Aspirations, Interests and Brilliance of Young Women. Renowned entrepre...",
            href: "https://news.spsu.ac.in/ncc-enrollment-drive-2021-22/"
          },
          {
            title: "NCC Day Camp 2021",
            timeago: "2 MONTHS AGO",
            desc: "SPSU is a partner to a European Union funded multilateral Project RAINBOW-Realizing Aspirations, Interests and Brilliance of Young Women. Renowned entrepre...",
            href: "https://news.spsu.ac.in/ncc-day-camp/"
          },
          {
            title: "75th Independence Day Celebration",
            timeago: "3 MONTHS AGO",
            desc: "The 75th Independence Day was celebrated with great zeal and enthusiasm at Sir Padampat Singhania University, Udaipur. The Vice Chancellor of the Uni…",
            href: "https://news.spsu.ac.in/spsu-applauds-indias-progress-on-its-75th-independence-day-celebration/"
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
