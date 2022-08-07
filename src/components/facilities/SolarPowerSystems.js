import greenunderlinemobile from "../../images/green-underline-mobile.png";
import pinkline from "../../images/homepage-redline.png";
import "../academics/Academics.css";

const SolarPowerSystems = () => {
  return (
    <>
      <div className="visionpage-title">
        Solar Power System Facilities
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div className="examinations-section library-facilities-section solar-power-systems-section">
        <img
          src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/solar1.png"
          className="library-facilities-section-image-left"
        />
        <div className="academics-sections-class">
          <img src={pinkline} className="academics-sections-underline" />
          <h5 className="heading academics-pink-class">
            100% Solar Power Backup
          </h5>
          <div className="academics-sections-desc">
          With the vision of promoting ecologically sustainable growth, SPSU has installed solar panels on the campus. In an age when being green is paramount and as solar emerges as a positive clean energy source, SPSU fosters solar power and is dedicated to cutting down on emissions levels and fossil fuel consumption. The Green Campus University enriches the classroom content with real-world examples of the benefits of renewable energy.
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarPowerSystems;
