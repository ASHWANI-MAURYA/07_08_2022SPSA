import "../Btech.css";
import AIML from "./AIML";
import CloudTechnology from "./CloudTechnology";
import GeneralCSE from "./GeneralCSE";
const Specialization = () => {
  return (
    <div>
      <div className="general">
        <h5 id="SPECIALIZATION" className="courses-heading specialization">
          SPECIALISATION
        </h5>
        <GeneralCSE />
        <CloudTechnology />
        <AIML />
      </div>
    </div>
  );
};

export default Specialization;
