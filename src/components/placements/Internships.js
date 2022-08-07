import IndustrialMoU from "./IndustrialMoU";
import NationalInternship from "./NationalInternship";
import OnCampusTraining from "./OnCampusTraining";
import PaidInternship from "./PaidInternship";
import "./Placements.css";

const Internships = () => {
  return (
    <>
      <NationalInternship />
      <PaidInternship />
      <OnCampusTraining />
      <IndustrialMoU />
    </>
  );
};

export default Internships;
