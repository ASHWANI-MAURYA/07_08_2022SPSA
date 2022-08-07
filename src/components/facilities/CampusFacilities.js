import greenunderlinemobile from "../../images/green-underline-mobile.png";
import blueline from "../../images/homepage-blueline.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../academics/Academics.css";
import "./Facilities.css";

const CampusFacilities = () => {
  return (
    <>
      <div className="visionpage-title">
        Campus Facilities
        
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
        </div>
        
        <OwlCarousel
          className="owl-theme mobile"
          margin={20}
          nav
          items={1}
          loop={true}
          autoPlay={true}
          autoplay>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/sli1.png" />
            <div className="campus-facilities-new-card-title">
            Clean and Green Campus
            </div>
            <div className="campus-facilities-new-desc">The university is located in the City of Lakes-Udaipur, one of the world&apos;s foremost tourist destinations. The picturesque, 110-acre lush green campus is only 10 minutes drive from the Udaipur airport. Green landscaping is done with trees and plants. Avenue trees, ornamental and fruit trees are planted throughout. About fifty different types of trees and shrubs and a 10-acre herbal park cover over one-fourth of the campus, contributing towards the preservation of climate conditions and adding beauty to the campus.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/mess.png" />
            <div className="campus-facilities-new-card-title">
            Mess and Food Court
            </div>
            <div className="campus-facilities-new-desc">The two separate vegetarian and non-vegetarian mess with a well-equipped kitchen, R.O. water, water coolers, fire protection equipment and telephone connectivity cater to the needs of students and staff coming from all over the country. The Food Court, which comprises of Snacks Bar and Happinezz (Ice Cream Parlour), provides delicious and quality foods like burgers, pizzas, rolls, tea, coffee, cold drinks, fruit juices, etc. to students and staff of SPSU.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/medi.png" />
            <div className="campus-facilities-new-card-title">
            Medical Facilities
            </div>
            <div className="campus-facilities-new-desc">A functional dispensary with a resident medical attendant is available 24 X 7 in the University premises to provide medical aid to the residents. The University has an ambulance for 24 X 7 emergency. The University has also tied up with the leading hospitals of the city.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/wi.png" />
            <div className="campus-facilities-new-card-title">
            24*7 WiFi enabled campus
            </div>
            <div className="campus-facilities-new-desc">The University provides a 1000 Mbps Wi-Fi network with high-speed internet to all students and faculty members through the SWAYAM platform and creates a digital campus with Wi-Fi facilities (optical fibre, access switches, wireless access points, and security equipment, etc.). The University maintains a well acquired speed 24 X 7 every day in association with BSNL and Reliance JIO Network.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/atm.png" />
            <div className="campus-facilities-new-card-title">
            ATM
            </div>
            <div className="campus-facilities-new-desc">A Bank of Baroda ATM at the university entrance facilitates easy access to Bank Accounts.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/water.png" />
            <div className="campus-facilities-new-card-title">
            Waste Management
            </div>
            <div className="campus-facilities-new-desc">University has incorporated waste management initiatives. Three Sewage Treatment Plants of total 450 KLD provide manure and water for landscaping.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/water1.png" />
            <div className="campus-facilities-new-card-title">
            RO Water Plant
            </div>
            <div className="campus-facilities-new-desc">The Reverse Osmosis (RO) Plant of University supplies pure drinking water to all the hostels and faculty residences 24 X 7</div>
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
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/sli1.png" />
            <div className="campus-facilities-new-card-title">
            Clean and Green Campus
            </div>
            <div className="campus-facilities-new-desc">The university is located in the City of Lakes-Udaipur, one of the world&apos;s foremost tourist destinations. The picturesque, 110-acre lush green campus is only 10 minutes drive from the Udaipur airport. Green landscaping is done with trees and plants. Avenue trees, ornamental and fruit trees are planted throughout. About fifty different types of trees and shrubs and a 10-acre herbal park cover over one-fourth of the campus, contributing towards the preservation of climate conditions and adding beauty to the campus.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/mess.png" />
            <div className="campus-facilities-new-card-title">
            Mess and Food Court
            </div>
            <div className="campus-facilities-new-desc">The two separate vegetarian and non-vegetarian mess with a well-equipped kitchen, R.O. water, water coolers, fire protection equipment and telephone connectivity cater to the needs of students and staff coming from all over the country. The Food Court, which comprises of Snacks Bar and Happinezz (Ice Cream Parlour), provides delicious and quality foods like burgers, pizzas, rolls, tea, coffee, cold drinks, fruit juices, etc. to students and staff of SPSU.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/medi.png" />
            <div className="campus-facilities-new-card-title">
            Medical Facilities
            </div>
            <div className="campus-facilities-new-desc">A functional dispensary with a resident medical attendant is available 24 X 7 in the University premises to provide medical aid to the residents. The University has an ambulance for 24 X 7 emergency. The University has also tied up with the leading hospitals of the city.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/wi.png" />
            <div className="campus-facilities-new-card-title">
            24*7 WiFi enabled campus
            </div>
            <div className="campus-facilities-new-desc">The University provides a 1000 Mbps Wi-Fi network with high-speed internet to all students and faculty members through the SWAYAM platform and creates a digital campus with Wi-Fi facilities (optical fibre, access switches, wireless access points, and security equipment, etc.). The University maintains a well acquired speed 24 X 7 every day in association with BSNL and Reliance JIO Network.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/atm.png" />
            <div className="campus-facilities-new-card-title">
            ATM
            </div>
            <div className="campus-facilities-new-desc">A Bank of Baroda ATM at the university entrance facilitates easy access to Bank Accounts.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/water.png" />
            <div className="campus-facilities-new-card-title">
            Waste Management
            </div>
            <div className="campus-facilities-new-desc">University has incorporated waste management initiatives. Three Sewage Treatment Plants of total 450 KLD provide manure and water for landscaping.</div>
          </div>
          <div className="campus-facilities-new-card">
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/water1.png" />
            <div className="campus-facilities-new-card-title">
            RO Water Plant
            </div>
            <div className="campus-facilities-new-desc">The Reverse Osmosis (RO) Plant of University supplies pure drinking water to all the hostels and faculty residences 24 X 7</div>
          </div>
          
        </OwlCarousel>
        <div className="campus-facilities-new-section" style={{ backgroundColor: "#E3F3FF" }}>
          <div className="academics-sections-class" >
            <img src={blueline} className="academics-sections-underline" />
            <h5 className="heading academics-blue-class">Safety and Security</h5>
            <div className="academics-sections-desc">
            Campus security is provided by G4S, one of the best security service agencies in the country. The entire campus is monitored through C.C.T.V. cameras. Traffic norms have been devised and followed effectively within the campus for the safety of the residents. Wardens and Assistant wardens are appointed for each hostel to maintain discipline and security within the hostel premises. All the students (girls and boys) are taken care of by the assistant wardens and wardens in their respective hostels. Anti-ragging committee comprising of faculty members, nonteaching staff, parents and students (both from senior and fresh batch) is responsible for maintaining ragging free environment for the students of both genders. The discipline committee members remain vigilant throughout the year to maintain discipline and take necessary action. All students of the university are covered by a Group Personal Accident Insurance policy.
            </div>
          </div>
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/cam1.png"
            className="library-facilities-section-image-right"
          />
        </div>
      
    </>
  );
};

export default CampusFacilities;
