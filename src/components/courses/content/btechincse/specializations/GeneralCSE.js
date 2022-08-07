import generalcse from "../../../../../images/general-cse.png";
import lightgreenbox from "../../../../../images/light-green-box.png";

const GeneralCSE = () => {
  return (
    <div className="specialization-general-cse-section">
      <img src={generalcse} className="specialization-general-cse" />
      <div className="specialization-general-cse-section-right">
        <img src={lightgreenbox} className="specialization-green-box" />
        <div className="specialization-general-cse-section-title">
          GENERAL (CSE)
        </div>
        <div className="specialization-general-cse-section-desc">
          B. Tech. in Computer Science &amp; Engineering has emerged not only as
          a major discipline but also has transformed almost all disciplines of
          Engineering as well as other domains.
          <br />
          <br />
          The discipline is very diverse, ranging from operating systems &amp;
          machine-level programming to frontiers of information technology &amp;
          networking.
        </div>
      </div>
    </div>
  );
};

export default GeneralCSE;
