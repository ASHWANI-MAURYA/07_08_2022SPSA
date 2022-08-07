import greenunderlinemobile from "../../images/green-underline-mobile.png";
import sportsfacilities from "../../images/sportsfacilities.JPG";
import "../academics/Academics.css";

const SportsFacilities = () => {
  return (
    <>
      <div className="visionpage-title">
        Sports Facilities
        
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div className="academics-sections-desc">
      The university has a 30 acre sports complex with a tennis court, cricket field, football ground, basketball court and an NCC training academy, amongst others.
          </div>
      <div className="sports-facilities-image-section">
        <img src={sportsfacilities} style={{ width: "100%" }}/>
      </div>
        
    </>
  );
};

export default SportsFacilities;
