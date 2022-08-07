import generalcse from "../../../../../images/general-cse.png";
import lightgreenbox from "../../../../../images/light-green-box.png";

const GeneralECE = () => {
  return (
    <div className="specialization-general-cse-section">
      <img src={generalcse} className="specialization-general-cse" />
      <div className="specialization-general-cse-section-right">
        <img src={lightgreenbox} className="specialization-green-box" />
        <div className="specialization-general-cse-section-title">
          GENERAL (ECE)
        </div>
        <div className="specialization-general-cse-section-desc">
          Electronics &amp; Communication Engineering is one of the largest and most
          sophisticated branches of engineering. It deals with electronic
          devices, software development &amp; interfaces. The applications scenario
          is far reaching, right from consumer electronics to industrial control
          &amp; automation. The discipline integrates knowledge based on Analog &amp; 
          Digital Electronics, Communication, Microwave, Power Electronics,
          Antenna Design, Microprocessor &amp; Microcontroller, Embedded Systems,
          Digital Signal Processing, Very large Scale Integrated Circuits
          (VLSI), Instrumentation &amp; Control Systems. Electronics has improved
          productivity in industries like oil, energy, agriculture,
          infrastructure and many other important sectors of economy. The
          Electronics sector in India is growing and there exists a huge demand
          for skilled manpower in this sector.
        </div>
      </div>
    </div>
  );
};

export default GeneralECE;
