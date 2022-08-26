import AcademicFees from "./AcademicFees";
import EligibilityCriteria from "../btechincse/EligibilityCriteria";
import General from "./General";
import IconTabBar from "../btechincse/IconTabBar";
import Specialization from "./specializations/Specialization";
import WhySPSU from "../btechincse/WhySPSU";
import { Helmet } from "react-helmet";
const BTechInMining = () => {
  return (
    <>
    <Helmet>
        <title>Best B.Tech Mining Engineering College In Rajasthan | JK Cement&apos;s SPSU</title>
        <meta name="description" content="B.Tech Mining Engineering From India's Top Ranked University In Rajasthan, India - JK Cement's SPSU. Check Course Details, Eligibility criteria, Fees, Admission & SPSAT." />
        <meta
          name="keywords"
          content="b.tech mining engineering colleges in rajasthan"
        />
        <link rel="canonical" href="https://www.spsu.ac.in/btech-in-mining-engineering" />
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
          }
        ]}
      />
      <General />
      <EligibilityCriteria />
      <AcademicFees />
      <Specialization />
      <WhySPSU />
    </>
  );
};

export default BTechInMining;
