import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import InternationalFacilities from "./InternationalFacilities";
import "./InternationalAffairs.css";

const InternationalAffairs = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage greentext="DIVISION OF" bluetext="INTERNATIONAL AFFAIRS" />
      <h5 className="international-campus-page-heading" style={{ margin: "40px" }}>International Campus with students from various countries</h5>
      <div className="international-campus-card-section container">
          <div className="international-campus-card">
            <h6 className="title-head">
            SAARC Countries
            </h6>
            <p className="mtech-desc">
                Afghanistan<br/>
                Bangladesh<br/>
                Bhutan<br/>
                Maldives<br/>
                Nepal<br/>
                Sri Lanka<br/>
            </p>
          </div>
          <div className="international-campus-card">
            <h6 className="title-head">
            African Countries
            </h6>
            <p className="mtech-desc">
                South Africa<br/>
                Ethiopia<br/>
                Morocco<br/>
                Cameroon<br/>
                Liberia<br/>
                Malawi<br/>
                Mauritius<br/>
                Eswatini<br/>
            </p>
          </div>
          <div className="international-campus-card">
            <h6 className="title-head">
            Middle East Countries
            </h6>
            <p className="mtech-desc">
                UAE<br/>
                Oman<br/>
            </p>
          </div>
      </div>
      <div className="join-mtech-section">
        <div className="container">
          <div className="join-mtech">
            <h3 className="heading">International Campus</h3>
            <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Celebrating-Diversity.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">Celebrating Diversity</h6>
                <p className="mtech-desc">
                  SPSU celebrates cultural diversity of India as well as other
                  nations with great joy and enthusiasm. We organize various
                  cultural events for the students to showcase their talents and
                  enjoy the dances, songs and most importantly their cultural
                  values while being in India.
                </p>
              </div>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Great-International-Students-Support.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">
                  Great International Students Support
                </h6>
                <p className="mtech-desc">
                  SPSU assures students a safe and secure environment at the
                  University campus. We make sure that students from other
                  countries do not face any problems during their stay at the
                  campus. We have a separate student support cell for our
                  international students for their well-being, constant support
                  and prompt actions for their various requirements.
                </p>
              </div>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/A-home-to-many-international-students.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">
                  A home to many international students
                </h6>
                <p className="mtech-desc">
                  Being the most dynamic, versatile and student-friendly
                  University, SPSU is a home to students from various foreign
                  countries. Students from various foreign countries study at
                  SPSU so we provide them with proper facilities, requirements
                  and a comfortable environment to adjust and study well while
                  being away from their family members and their home country.
                </p>
              </div>
            </OwlCarousel>
            <OwlCarousel
              className="owl-theme desktop"
              margin={20}
              nav
              items={3}>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Celebrating-Diversity.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">Celebrating Diversity</h6>
                <p className="mtech-desc">
                  SPSU celebrates cultural diversity of India as well as other
                  nations with great joy and enthusiasm. We organize various
                  cultural events for the students to showcase their talents and
                  enjoy the dances, songs and most importantly their cultural
                  values while being in India.
                </p>
              </div>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Great-International-Students-Support.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">
                  Great International Students Support
                </h6>
                <p className="mtech-desc">
                  SPSU assures students a safe and secure environment at the
                  University campus. We make sure that students from other
                  countries do not face any problems during their stay at the
                  campus. We have a separate student support cell for our
                  international students for their well-being, constant support
                  and prompt actions for their various requirements.
                </p>
              </div>
              <div className="item mtech-points">
                <img
                  alt=""
                  src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/A-home-to-many-international-students.jpg"
                  className="admissions-joinmtech-carousel-top-image"
                />
                <h6 className="title-head">
                  A home to many international students
                </h6>
                <p className="mtech-desc">
                  Being the most dynamic, versatile and student-friendly
                  University, SPSU is a home to students from various foreign
                  countries. Students from various foreign countries study at
                  SPSU so we provide them with proper facilities, requirements
                  and a comfortable environment to adjust and study well while
                  being away from their family members and their home country.
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <InternationalFacilities />
      <ContactUs />
      <Copyright />
    </>
  );
};

export default InternationalAffairs;
