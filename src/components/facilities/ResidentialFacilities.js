import greenunderlinemobile from "../../images/green-underline-mobile.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../academics/Academics.css";

const ResidentialFacilities = () => {
  return (
    <>
      <div className="visionpage-title">
        Residential Facilities
        
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
        </div>
        <div style={{ fontSize: "20px" }}>
        SPSU is a complete student university. The students and staff who join SPSU may opt for residence on the SPSU campus. SPSU has 6 boys’ hostels and 3 girls’ hostels. The hostel rooms are available on a twin-sharing basis. All of the 2000 seats in hostels and faculty residences are provided with internet, telephone, TV connectivity, RO water, standby power backup, and security services. Common rooms with facilities such as TV, newspapers, magazines, table tennis board, badminton court, etc. are available in all the hostels. Laundry services are available to all residents for clean and hygienic washing of clothes. A parlour for girls is also available in the girls’ hostel. Other facilities include gym, medical clinics, Café Coffee Day, cafeteria  and departmental stores.
        </div>
        <OwlCarousel
          className="owl-theme mobile"
          margin={20}
          nav
          items={1}
          loop={true}>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h1.png" />
            <div className="residential-facilities-card-title">
              GIRLS HOSTEL
            </div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h2.png" />
            <div className="residential-facilities-card-title">BOYS HOSTEL</div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h3.png" />
            <div className="residential-facilities-card-title">
              FACULTY RESIDENCE
            </div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h4.png" />
            <div className="residential-facilities-card-title">
              STUDIO APARTMENTS
            </div>
          </div>
        </OwlCarousel>
        <OwlCarousel
          className="owl-theme desktop"
          margin={20}
          nav
          items={3}
          loop={true}
          autoPlay={true}
          autoplay>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h1.png" />
            <div className="residential-facilities-card-title">
              GIRLS HOSTEL
            </div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h2.png" />
            <div className="residential-facilities-card-title">BOYS HOSTEL</div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h3.png" />
            <div className="residential-facilities-card-title">
              FACULTY RESIDENCE
            </div>
          </div>
          <div className="residential-facilities-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/h4.png" />
            <div className="residential-facilities-card-title">
              STUDIO APARTMENTS
            </div>
          </div>
        </OwlCarousel>
      
    </>
  );
};

export default ResidentialFacilities;
