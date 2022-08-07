import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "../btechincse/EligibilityCriteria";
import FaqAns from "../btechincse/Faq";
import General from "./General";
import IconTabBar from "../btechincse/IconTabBar";
import Specialization from "./specializations/Specialization";
import WhySPSU from "../btechincse/WhySPSU";
import { Helmet } from "react-helmet";
const BTechInME = () => {
  return (
    <>
    <Helmet>
        <title>B.Tech Mechanical Engineering College In Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="B.Tech Mechanical Engineering From India's Top Ranked University In Rajasthan, India - JK Cement's SPSU. Check Job Ready Course Details, Admission & SPSAT." />
        <meta
          name="keywords"
          content="b.tech mechanical engineering colleges in rajasthan"
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
            ques: "Why should a student choose B. Tech. ME?",
            ans: "Mechanical Engineering is one of the most diversified branches of engineering and offers a wide array of job and research opportunities in variety of industrial and academic sectors. Mechanical Engineering deals with the design, development, installation, dynamic analysis, operation and maintenance of machines used in aerospace, automotive, power generation, chemical or bio-engineering industries."
          },
          {
            ques: "What are the specializations of the faculty members of the department of Mechanical Engineering?",
            ans: "The faculty members of the department have specialization in Production, Thermal, Non-conventional energy and Design engineering."
          },
          {
            ques: "What laboratories are available in the department of Mechanical Engineering?",
            ans: "The Mechanical Engineering department has the laboratories for Autocad/CAE, Engineering Drawing, Machine shop, Applied Thermal, Applied Mechanics, Fluid mechanics and Machines and workshops for hands on experience."
          },
          {
            ques: "In which industries can a Mechanical Engineer be absorbed?",
            ans: "It is difficult to imagine any industry without Mechanical Engineers on board. All types of manufacturing, power generation, automotive, aviation and R&D industries hire mechanical engineers."
          },
          {
            ques: "What options are open for higher studies for Mechanical Engineering?",
            ans: "Mechanical engineer can pursue M.Tech/MS in different specializations like production, design and development, thermal, non-conventional energy, automobile, robotics and Mechatronics. He/She can also pursue MBA degree programme."
          }
        ]}
      />
    </>
  );
};

export default BTechInME;
