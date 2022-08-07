import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "./EligibilityCriteria";
import FaqAns from "./Faq";
import General from "./General";
import IconTabBar from "./IconTabBar";
import ProgrammeObjectives from "./ProgrammeObjectives";
import Specialization from "./specializations/Specialization";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const BBA = () => {
  return (
    <>
    <Helmet>
        <title>Best BBA Colleges In Udaipur, Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="BBA- Bachelor of Business Administration From India's Top Colleges/ University In Rajasthan, India - JK Cement's SPSU. Check Job Ready Course Details, Industry Tie-up, Eligibility criteria,etc" />
        <meta
          name="keywords"
          content="bba colleges in rajasthan
          best management colleges in udaipur"
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
            tabid: "FAQS",
            tabname: "FAQS"
          }
        ]}
      />
      <General />
      <ProgrammeObjectives />
      <Specialization />
      <AcademicFees />
      <EligibilityCriteria />
      <SyllabusStructure />
      <FaqAns
        listanswer={[
          {
            ques: "Why should one opt for BBA from SPSU?",
            ans: "BBA programme offers fundamental education in management and business principles. It provides knowledge to develop business skills such as leadership, communication skills, critical thinking and decision making. Special emphasis is given on international exposure, soft skills and personality development. The University also has international collaborations for higher studies."
          },
          {
            ques: "What is the faculty profile of School of Management?",
            ans: "The faculty members of School of Management are highly qualified and have wide experience. They have international exposure to contemporary management issues on teaching through case studies, group discussions etc. Almost all faculty members have been undergone academic exchange programme abroad that provides global exposure and multicultural experience, which enables them to teach and guide the students efficiently."
          },
          {
            ques: "What specializations are offered to students?",
            ans: "The School of Management offers specialization in Finance, Marketing, HR and IT. The department also provides internship in the respective disciplines."
          },
          {
            ques: "In which Industry can BBA Graduates be absorbed?",
            ans: "The BBA course caters to the demand of managerial roles in the corporate sector. The BBA students can be absorbed in jobs in areas of Marketing, Finance, IT and HR such as share markets, banking, marketing and HR."
          },
          {
            ques: "What options are open for higher studies for BBA students?",
            ans: "SPSU has academic collaboration with Lincoln University, Oakland, USA where they get admission to MBA without any entrance test. Besides, special classes are held to enrich knowledge and prepare for CAT and GMAT to assist the students for getting admitted into MBA degree programme."
          }
        ]}
      />
    </>
  );
};

export default BBA;
