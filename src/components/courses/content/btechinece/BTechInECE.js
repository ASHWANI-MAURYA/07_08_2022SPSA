import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "../btechincse/EligibilityCriteria";
import FaqAns from "../btechincse/Faq";
import General from "./General";
import IconTabBar from "../btechincse/IconTabBar";
import Specialization from "./specializations/Specialization";
import WhySPSU from "../btechincse/WhySPSU";
import { Helmet } from "react-helmet";

const BTechInECE = () => {
  return (
    <>
    <Helmet>
        <title>B.Tech Electronics Communications Engineering College | JK Cement&apos;s SPSU</title>
        <meta name="description" content="B.Tech Electronics & Communication Engineering, from India's Top Ranked University In Rajasthan, India - JK Cement's SPSU. Check Details, Eligibility criteria, Fees, SPSAT." />
        <meta
          name="keywords"
          content="B.Tech Electronics Communications Engineering"
        />
        <link rel="canonical" href="https://www.spsu.ac.in/btech-in-electronics-communications-engineering" />
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
            ques: "Why should a student choose B. Tech. ECE?",
            ans: "The Electronics & Communication branch primarily deals with the basic electronic components, design of circuits and systems. Electronics & Communication Engineering has widespread applications in the modern world of Engineering through its various diversified fields. Thus the graduate in Electronics & Communication engineer has vast job opportunities in diverse industries."
          },
          {
            ques: "What are the specializations of the faculty members of the department of Electronics & Communication Engineering?",
            ans: "Faculty members of the department of Electronics & Communication Engineering have their own individual endeavors and expertise in Microprocessor, Microcontroller and Embedded Systems, Robotics & Automation, Electronics Devices & Circuits, Linear Integrated Circuits, VLSI Engineering, Analog and Digital Communication, Optical Communication, Mobile Communication, RF & Microwave Engineering, Antenna & Waves, Internet of things (IoT), Microelectronics & MEMS etc."
          },
          {
            ques: "What laboratories are available in the department of Electronics & Communication Engineering?",
            ans: "The Electronics & Communication Engineering department has the laboratories for Electronics & Applied Electronics, Instrumentation & Control, Microprocessor & Microcontroller, RF & MW Engineering Lab and Antenna, Digital Electronics & Communication, VLSI Engineering and DSP, Projects."
          },
          {
            ques: "In which industries can a Electronics & Communication Engineer be absorbed?",
            ans: "Electronics & Communication Engineer can be absorbed in varied areas like industries related to hardware (it can cover an industry related to Electronics / Electrical / Mechanical / Instrumentation fields etc.) and software (an industry related to Computer Science and Information Technology). Even the engineer from ECE background can be absorbed in Civil, Aviation, Manufacturing, Bio technology, Mining, Metallurgy etc."
          },
          {
            ques: "What profiles an ECE Engineer can apply for?",
            ans: "Electronics & Communication Engineering students can apply graduate engineer trainee as well as management trainee in various fields of Engineering including production, design and research, maintenance and installation of electronics and communication based equipment on and off shop floors."
          },
          {
            ques: "What options are open for higher studies for Electronics & Communication Engineering?",
            ans: "B. Tech. Electronics & Communication Engineer can opt for MS/MTech degree programmes in Communication, Networking, VLSI, Computer Science to name a few. He/She can opt for a MBA degree programme as well."
          },
          {
            ques: "What is the expected remuneration for students after completing B. Tech. in ECE with specialization in IoT?",
            ans: "B. Tech. (IoT) graduate may get Remuneration of Rs. 2.5 lacs to 8 lacs per annum."
          }
        ]}
      />
    </>
  );
};

export default BTechInECE;
