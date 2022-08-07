import greenunderlinemobile from "../../images/green-underline-mobile.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Placements.css";
const IndustrialMoU = () => {
  return (
    <>
      <div className="visionpage-title">
      Industrial MoU
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div>
        SPSU has signed up an MoU with the industries at national and international level to provide professional training and development to the students. SPSU has signed MoU with:
        </div>
        <div className="desktop">
          <OwlCarousel
            className="owl-theme"
            margin={20}
            nav
            items={1}
            style={{ margin: "40px 0 !important" }}
            autoplay
            loop>
            <div className="item ">
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/okinawa-ev.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jio.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/collabera.jpg"
                  />
                </div>
              </div>
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jbm.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi-s.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/valuerhr-india.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/cognus.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jaro.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/eco-sol.jpg"
                  />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="mobile">
        <OwlCarousel
            className="owl-theme"
            margin={20}
            nav
            items={1}
            style={{ margin: "40px 0 !important" }}
            autoplay
            loop>
            <div className="item ">
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/okinawa-ev.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jio.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/collabera.jpg"
                  />
                </div>
              </div>
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jbm.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi-s.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/valuerhr-india.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/cognus.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jaro.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/eco-sol.jpg"
                  />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default IndustrialMoU;
