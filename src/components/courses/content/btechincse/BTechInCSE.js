import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "./EligibilityCriteria";
import FaqAns from "./Faq";
import General from "./General";
import IconTabBar from "./IconTabBar";
import Specialization from "./specializations/Specialization";
import WhySPSU from "./WhySPSU";
import { Helmet } from "react-helmet";

const BTechInCSE = () => {
  return (
    <>
    <Helmet>
        <title>Computer Science Engineering College in Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="B.Tech. Computer Science Engineering From India's Top Ranked Colleges/ University In Rajasthan, India - JK Cement's SPSU. Check Job Ready Course Details, Admission and SPSAT." />
        <meta
          name="keywords"
          content="computer science engineering college in Rajasthan
          best engineering colleges in rajasthan for cse"
        />
      </Helmet>
      <IconTabBar
        tabs={[
          {
            tabid: "OVERVIEW",
            tabname: "OVERVIEW"
          },
          {
            tabid: "ELIGIBILITY",
            tabname: "ELIGIBILITY"
          },
          {
            tabid: "FEES",
            tabname: "FEES"
          },
          {
            tabid: "SPECIALIZATION",
            tabname: "SPECIALIZATION"
          },
          {
            tabid: "WHYSPSU",
            tabname: "WHY SPSU"
          },
          {
            tabid: "FAQS",
            tabname: "FAQS"
          }
        ]}
      />
      <General />
      <EligibilityCriteria />
      <AcademicFees />
      <Specialization />
      <WhySPSU />
      <FaqAns
        listanswer={[
          {
            ques: "Why should a student choose B. Tech. Computer Science & Engineering?",
            ans: "Computer Science and Engineering has application in diversified fields. Job opportunities are available both in Private and Government sectors with excellent growth opportunities. Students undergoing this programme can learn new technology applicable in various industries."
          },
          {
            ques: "What laboratories are available in the department of Computer Science & Engineering?",
            ans: "The department has basic computing lab, basic and advanced programming lab, Database Management System lab, Computer Network lab, Internet of Things lab."
          },
          {
            ques: "In which industries can a Computer Science Engineer be absorbed?",
            ans: "Computer Science Engineer are recruited by the following industries related to: Software Development, Web Development, Game Development, Mobile Application Development, Graphics and Animation, Machine Learning, AI and Robotics, Hardware Development, Software Testing, IoT solutions, networking solutions, Cloud based solutions, Data Analysis, Database solutions., Cyber Security solutions, Big Data Analysis. Apart from these, a Computer Science Engineer are also recruited by the PSU’s like NTPC, BHEL, GAIL, ONGC, ISRO, SAIL, BARC, IOCL, HAL etc. Computer Science Engineer can also apply for different Scientist Positions at various central government institutions (like Ministry of Electronics and Information Technology etc.)"
          },
          {
            ques: "What profiles a Computer Science Engineer can apply for?",
            ans: "A Computer Science Engineer can apply for the following job profiles: Software engineer, Front-end developer, Data scientist, Software developer, Software tester, Network engineer, Business analyst, Database associate engineer, Network and computer system administrator, Application analyst, Application developer, Cyber security analyst, Data analyst, Database administrator, Forensic computer analyst, Game designer, Games developer, Information system manager, IT consultant ,Web designer, Web developer, Network engineer, IT Trainer, Digital copywriter, Web content manager, Supply chain manager, IT manager"
          },
          {
            ques: "What options are open for higher studies for B. Tech. Computer Science & Engineering students?",
            ans: "After completing B. Tech. in Computer Science & Engineering, a student can do M. Tech./ME/MS in Applied Computer Science, Information Systems, Information Security, Cyber security, Data Mining, Artificial Intelligence, Data Science, Networking, Management Information System to name a few. If a student wants to enter the world of business and management, he can opt to study MBA."
          },
          {
            ques: "What are different career prospects for B. Tech. Computer Science & Engineering (specialization in AI & ML) students?",
            ans: "The Government of India has appointed a task force planning to boost the AI sector in India, for developing AI technologies and infrastructure, to data usage and research to work with the private sectors to develop technologies, with a focus on smart cities, manufacturing, agriculture and crop management, health care, education, public utilities and to fight against terrorism. Therefore, ample career opportunities exist in private companies, public organizations, education, government institutions, and the healthcare industry. Additionally, top IT companies are looking at aggressively hiring Engineers specializing in Artificial Intelligence & Machine Learning. After graduation students can explore job profiles like Machine Learning Engineer, Data Scientist in Machine Learning, Research Engineer in Artificial Intelligence, Big Data & AI Architect, Big Data & AI Consultant, Robotics Professional, Atkins, Accenture, Bosch Group, Microsoft, Amazon, Intel Technology, Reliance Jio, Google"
          }
        ]}
      />
    </>
  );
};

export default BTechInCSE;
