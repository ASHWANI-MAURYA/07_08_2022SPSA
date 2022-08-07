import studentsimg from "../../images/students.png";
import ameneties1 from "../../images/classroom_3.png";
import ameneties2 from "../../images/comp_lab_2.png";
import ameneties3 from "../../images/library_2.png";
import ameneties4 from "../../images/mech_lab_3.png";
import ameneties5 from "../../images/sports_1.png";
import ameneties1mob from "../../images/Group 15045.png";
import ameneties2mob from "../../images/Group 150461.png";
import ameneties3mob from "../../images/Group 15047.png";
import ameneties4mob from "../../images/Group 15048.png";
import ameneties5mob from "../../images/Group 15049.png";
import ameneties6mob from "../../images/Group 15050.png";
import ImageCarousel from "../carousel/ImageCarousel";
import "./Mainpage.css";

const images = [
  studentsimg,
  ameneties1,
  ameneties2,
  ameneties3,
  ameneties4,
  ameneties5
];

const imagesmobile = [
  ameneties1mob,
  ameneties2mob,
  ameneties3mob,
  ameneties4mob,
  ameneties5mob,
  ameneties6mob
];

const CampusAmenities = () => {
  return (
    <>
    <div className="campus-amenities-section desktop">
      <div className="campus-amenities">
        <h5 className="campus-title">Campus Amenities</h5>
      </div>

      <ImageCarousel
        options={{
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: true,
          adaptiveHeight: true
        }}
      >
        {images.map((image, index) => (
          <div
            style={{ width: "900px", height: "650px", margin: "0em 0" }}
            key={index}
          >
            <img src={image} alt="" className="img-slider" />
          </div>
        ))}
      </ImageCarousel>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div className="campus-amenities-section mobile">
      <div className="campus-amenities">
        <h5 className="campus-title">Campus Amenities</h5>
      </div>

      <ImageCarousel
        options={{
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: true,
          adaptiveHeight: true
        }}
      >
        {imagesmobile.map((image, index) => (
          <div
            style={{ width: "900px", height: "650px", margin: "0em 0" }}
            key={index}
          >
            <img src={image} alt="" className="img-slider" />
          </div>
        ))}
      </ImageCarousel>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    </>
  );
};
export default CampusAmenities;
