import greenunderlinemobile from "../../images/green-underline-mobile.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Placements.css";
const PaidInternship = () => {
  return (
    <>
      <div className="visionpage-title">
        Paid Internship
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div>
          Along with the internships at national and international levels, SPSU
          also provides paid internships to the students. The details of the
          paid internship are as mentioned below:
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
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/lido.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/the-capital-box.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/bridgegroup-solutions.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/calvin-klein.jpg?var=1"
                  />
                </div>
              </div>
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/apni-class-b.jpg?var=1"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/exide-life.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/force-motor.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi.jpg"
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
          <OwlCarousel className="owl-theme" loop margin={20} nav items={1}>
            <div className="item ">
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/lido.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/the-capital-box.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/bridgegroup-solutions.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/calvin-klein.jpg?var=1"
                  />
                </div>
              </div>
              <div className="brands">
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/apni-class-b.jpg?var=1"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/exide-life.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/force-motor.jpg"
                  />
                </div>
                <div className="top-recruiters-brand-item">
                  <img
                    alt=""
                    src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi.jpg"
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

export default PaidInternship;
