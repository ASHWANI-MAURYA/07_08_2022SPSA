import ImageCarousel from "../carousel/ImageCarousel";
import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Facilities.css";

const images = [
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f3.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f4.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f5.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f6.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f1.png"  
];

const imagesmobile = [
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f3.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f4.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f5.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f6.png",
  "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f1.png"
];

const AcademicFacilities = () => {
  return (
    <>
      <div className="visionpage-title">
        Academic Facilities
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <p>The campus has multiple smart classrooms &amp; studios, syndicate rooms, hi-tech labs, a student innovation incubator, and inter-disciplinary research centres.</p>
      <div className="btech-table">
        <table className="table table-striped table-hover table-bordered">
          <thead className="bg-white-f9">
            <tr>
              <th>Facility Name</th>
              <th>Area(Sq.Ft.)</th>
              <th>Capacity / Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Facility Name</th>
              <th>Area(Sq.Ft.)</th>
              <th>Capacity / Number</th>
            </tr>
            <tr>
              <td>Classrooms</td>
              <td>42596</td>
              <td> 2 blocks/ 24 units </td>
            </tr>
            <tr>
              <td>Lecture Theater</td>
              <td>73600</td>
              <td>3 units</td>
            </tr>
            <tr>
              <td>Biotechnology Laboratory</td>
              <td>4500</td>
              <td>3 units</td>
            </tr>
            <tr>
              <td>Chemistry Laboratory</td>
              <td>2000</td>
              <td>1 unit</td>
            </tr>
            <tr>
              <td>Physics Laboratory</td>
              <td>3000</td>
              <td>3 units</td>
            </tr>
            <tr>
              <td>Computer Science &amp; Engg Laboratory</td>
              <td>10500</td>
              <td>6 units</td>
            </tr>
            <tr>
              <td>Electronics &amp; Comm. Engg. Laboratory</td>
              <td>12500</td>
              <td>8 units</td>
            </tr>
            <tr>
              <td>Electrical Engineering Laboratory</td>
              <td>4500</td>
              <td>2 units</td>
            </tr>
            <tr>
              <td>Chemical Engineering Laboratory</td>
              <td>2000</td>
              <td>1 unit</td>
            </tr>
            <tr>
              <td>Civil Engineering Workshop</td>
              <td>7500</td>
              <td>2 blocks/3 units</td>
            </tr>
            <tr>
              <td>Mechanical Engineering Workshop</td>
              <td>10000</td>
              <td>2 blocks/ 4 units</td>
            </tr>
          </tbody>
        </table>
        <div className="campus-amenities-section desktop">
          <div className="campus-amenities">
            <h5 className="campus-title">Academic Facilities at SPSU</h5>
          </div>

          <ImageCarousel
            options={{
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true
            }}>
            {images.map((image, index) => (
              <div
                style={{ width: "900px", height: "650px", margin: "0em 0" }}
                key={index}>
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
            <h5 className="campus-title" style={{ textAlign: "center" }}>Academic Facilities at SPSU</h5>
          </div>

          <ImageCarousel
            options={{
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true
            }}>
            {imagesmobile.map((image, index) => (
              <div
                style={{ width: "900px", height: "350px", margin: "0em 0" }}
                key={index}>
                <img src={image} alt="" className="img-slider-facilities" />
              </div>
            ))}
          </ImageCarousel>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default AcademicFacilities;
