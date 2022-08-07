import EligibilityCriteria from "./EligibilityCriteria";
import FaqAns from "./Faq";
import General from "./General";
import ProgrammeObjectives from "./ProgrammeObjectives";
import SyllabusStructure from "./SyllabusStructure";
import { Helmet } from "react-helmet";

const MTechInCSE = () => {
  return (
    <>
    <Helmet>
        <title>M.Tech Computer Science Engineering College in Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="Master of Technology In Computer Science Engineering From India's Top Ranked Colleges/ University In Rajasthan, India - JK Cement's SPSU. Check Job Ready Course Details, Admission and SPSAT." />
        <meta
          name="keywords"
          content="m.tech computer science engineering college in Rajasthan"
        />
      </Helmet>
      <General />
      <ProgrammeObjectives />
      <EligibilityCriteria />
      <SyllabusStructure />
      <FaqAns listanswer={[
        {
          ques: "What are the different specialisations I can opt for in M. Tech?",
          ans: "Data Mining, Data Science, Computer Networking"
        },
        {
          ques: "What is the eligibility criteria for M. Tech CSE?",
          ans: "Bachelor’s degree in Computer Science & Engineering or Electronics & Communication or equivalent/ M.Sc. in Electronics or Computer Science or Physics or Mathematics/ M.C.A. as a regular student from recognized University."
        },
        {
          ques: "Why should a student pursue an M. Tech from SPSU University?",
          ans: "At SPSU Udaipur, students are benefited from the combination of a high academic standard and the availability of cutting-edge technology. The most distinctive feature of the M. Tech program is that it provides hands-on experience to the students. In addition, SPSU also provides the M. Tech students a rock-solid foundation to pursue further studies at the doctoral level."
        },
        {
          ques: "Is there an entrance examination to get admission at SPSU Udaipur?",
          ans: "Yes, there is an entrance exam to get admission. SAT scores are also valid for admission."
        },
        {
          ques: "What are the prospects for students pursing MTech from SPSU Udaipur?",
          ans: "After completing M. Tech program from SPSU University, the students have ample opportunities in the following segments: Various positions in corporate, Career in academics, Research Assistant/ Associate positions in funded projects, Doctorate Degree in an area of interest, Entrepreneurship opportunities"
        },
        {
          ques: "What are the career opportunities after MTech?",
          ans: "There are several career choices available to students after completing MTech. Students can become Project Managers, Machinery Managers, Senior Engineers, Maintenance Engineers, Software Developer Research Associates, Design Engineers, Solution Integrators, Network Administrators, Database Administrators, Software Testers, Domain Consultants, Industries Officer (Technical), System Engineers, Team Leads/ Architect, or Technology Analysts. Students can also apply for doctorate after completing MTech or become a researcher."
        }
      ]}/>
    </>
  );
};

export default MTechInCSE;
