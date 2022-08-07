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

const ChairpersonMessage = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="ABOUT US"
        bluetext="CHAIRPERSON'S MESSAGE"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ABOUT SPSU: INDIA'S TOP RANKED UNIVERSITY"
          activeitem={2}
          activesubitem={2}
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
              level2="CHAIRPERSON'S MESSAGE"
            />
            <div className="visionpage-title">
              Dr. Nidhipati Singhania
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>

            <div className="chairperson-message-section">
              <div className="chairperson-message">
                <p>
                  My brother, Late Shri Yadupati Singhania Ji, the visionary and
                  the founder of Sir Padampat Singhania University (SPSU), since
                  his childhood, had many dreams, and education was one of them.
                  He was a civil engineering graduate from IIT Kanpur in Uttar
                  Pradesh and knew how tough it was to get into all the IITs. At
                  that time, most of the IITians after graduation were selected,
                  and they would leave for overseas for greener pastures as
                  those kinds of opportunities were not available here in India.
                  The IITs were and are considered the Ivy League colleges in
                  India. Our family originally hails from Rajasthan, and he
                  always wanted to build and start a world-class engineering
                  college, where students could get the same education as at
                  IIT. He transformed his dream into reality fourteen years ago.
                  SPSU was established in the year 2007 as a private state
                  university by the act of the Rajasthan state legislature. It
                  would help the literacy and employment rates in the state to
                  go up. J.K. Cement has promoted this university through its
                  J.K. Cement Nimbahera Foundation. The campus is located on one
                  hundred and four acres of land and is not very far either from
                  the airport or the city of Udaipur. It is learner-centric
                  education with an aim to generate Knowledge by empowering
                  engineering and management professionals to the world. The
                  University has grown from program to program with a portfolio
                  consisting of seven undergraduate engineering and one flagship
                  MBA program. Late Shri Yadupati Ji had managed to get an
                  excellent faculty along with many world-class educational
                  collaborations for engineering with Chiba University Japan,
                  the University of Nebraska, and Lincoln University from the
                  United States of America. The emphasis from ‘Knowledge’ has
                  moved to Wisdom. The Wisdom of leadership of the university is
                  emphasising on quality training, research, and
                  entrepreneurship in niche areas like Computer Science,
                  Computer Engineering, Mechanical Engineering, Civil
                  Engineering, Electrical, and Electronics Engineering, and
                  Mining and Biotechnology which intends to focus on Industry
                  4.0 with Undergraduate, Postgraduate and Ph.D. programs. SPSU
                  is today known in all fields for its Ph.D. programs. It is
                  transforming itself to keep up with changing academic times,
                  where &quot;Outcome-Based Performance&quot; is the focus and
                  &quot;Active Learning Teaching Methodology&quot; takes
                  precedence over the conventional classroom practice
                  predominant in India. Technology adaptation to bring in
                  online, hybrid mode of instructions, curriculum design to
                  create a &quot;Choice Based Credit System&quot; for all
                  students. The recently rolled out New Education Policy by the
                  Government of India envisages a higher graduate enrollment
                  ratio, flexibility in eligibility and progression pathways,
                  banking on credits with the individual pace of studies with
                  scope for breaks from studies incorporated in systems and
                  processes of SPSU.
                </p>
                <p>
                  Essentially, knowledge frees human beings. It is a profound
                  source of power that encourages candid human interaction and
                  provides people with vigour, as well as liberating them from
                  various limitations. The creation and application of new forms
                  of knowledge will no doubt determine the future direction of
                  human society.
                </p>
                <p>
                  We are reinventing ourselves now by accommodating more
                  disciplines in our fold like other universities world over. It
                  would create more diversity, flexibility for students to
                  pursue more as minors. We have been encouraging research and
                  have identified five thrust area on which focus is being done,
                  namely, AI &amp; ML, Environment, Image Processing and Modern
                  Learning Methods. Our multi-discipline faculty have
                  volunteered to work in these areas. The focus is on projects
                  which can also receive funding from Government and Industry.
                  It is planned that they shall create the &quot;Wisdom&quot; to
                  become the Centres of Excellence and Advanced Research
                  Laboratories. The University has good publication records, and
                  for which patents are now also being granted. Keeping in mind
                  the vision of Late Shri Yadupati Ji, we created an award as
                  &quot;YP Singhania Human Resources Excellence Award&quot; for
                  the Industry. In the year 2020, an HR round table was
                  organised in which this award was announced along with a
                  Lecture. It was decided that the same will be held every year
                  on 15th September which is Engineers Day. SPSU has a MSME
                  centre which supports and encourages entrepreneurship. Here
                  several innovations have been developed and one such is an
                  electrical two wheeler. We are proud that some of our Alumni
                  have launched some startups. The European Union has also
                  funded the University for a social project for empowering
                  women called &quot;Rainbow&quot;, which is for their skill
                  development that in turn will generate employment. We are also
                  substantially investing in this project. SPSU has industrial
                  collaborations with different companies like BMW, CISCO,
                  Hitachi Rail Systems Japan, Okinawa Japan and Reliance Jio.
                  The Alumni Association has close to 2000 members; the
                  University is actively pursuing consolidation of these. Their
                  achievements greatly encourage the students and faculty. As my
                  brother Late Shri Yadupati ji always said that &quot;the aim
                  of education should be to guarantee a lifetime of
                  employability.&quot;
                </p>
              </div>
              <div className="chairperson-image-section">
                <img
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/board-of-member/nidhisir.JPG"
                  className="chairperson-image"
                />
                <br />
                <div>
                  <b>Dr. Nidhipati Singhania</b>
                </div>
                <div>Chairperson</div>
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

export default ChairpersonMessage;
