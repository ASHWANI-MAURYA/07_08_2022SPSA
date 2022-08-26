import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "./EligibilityCriteria";
import FaqAns from "./Faq";
import General from "./General";
import IconTabBar from "./IconTabBar";
import ProgrammeObjectives from "./ProgrammeObjectives";
import Specialization from "./specializations/Specialization";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const MBA = () => {
  return (
    <>
    <Helmet>
        <title>Best MBA Colleges In Udaipur, Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="Find out more about the Master of Business Administration course from Best management college in Udaipur, Rajasthan, India, and get to know more about admission procedure, eligibility criteria, etc." />
        <meta
          name="keywords"
          content="mba colleges in udaipur
          best management colleges in udaipur"
        />
        <link rel="canonical" href="https://www.spsu.ac.in/master-business-administrations" />
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
            ques: "Does the syllabus cater to the needs of the industry?",
            ans: "MBA degree programme offers a hands-on and focused course of study conducive to running or managing a business. Subjects offered are relevant to global and domestic business which equip students to cope with challenges of modern business. Syllabus is revised from time to time to incorporate subjects essential for managing business."
          },
          {
            ques: "What is the Faculty profile of School of Management?",
            ans: "The faculty members of School of Management are highly qualified and have wide experience. They have international exposure to contemporary management issues on teaching through case studies, group discussions etc. Almost all faculty members have been undergone academic exchange programme abroad that provides global exposure and multicultural experience, which enables them to teach and guide the students efficiently."
          },
          {
            ques: "What specializations are offered to students?",
            ans: "The School of Management offers specialization in Finance, Marketing, HR and IT. The department also provides internship in the respective disciplines."
          },
          {
            ques: "What are career prospects as per specialization?",
            ans: "MBA programme will help to increase business capabilities. With MBA, students can pursue careers in Finance, Marketing or HR in various industries, Banks, Financial Institutions, Academic Institutions etc."
          }
        ]}
      />
    </>
  );
};

export default MBA;
