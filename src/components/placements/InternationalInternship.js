import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Placements.css";
const InternationalInternship = () => {
  return (
        <>
        <div className="visionpage-title">
        International Internship
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
          <div>SPSU offers internship opportunities at the international level to the students of School of Engineering and School of Management.</div>
          <div className="international-internship-cards-section">
              <div className="international-internship-card">
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jk-cement-works.jpg" className="international-internship-card-img"/>
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/jk-cement.jpg" className="international-internship-card-company-logo"/>
                  <div className="international-internship-card-company">JK Cement Works, Fujairah (UAE)</div>
              </div>
              <div className="international-internship-card">
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi-rail-systems.jpg" className="international-internship-card-img"/>
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/hitachi-logo.png" className="international-internship-card-company-logo"/>
                  <div className="international-internship-card-company">Hitachi Rail Systems, Japan</div>
              </div>
              <div className="international-internship-card">
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/valeurhr.jpg" className="international-internship-card-img"/>
                  <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/experitest.png?var=5" className="international-internship-card-company-logo"/>
                  <div className="international-internship-card-company">ValeurHR (Experitest, Israel)</div>
              </div>
          </div>
      </div>
        </>
  );
};

export default InternationalInternship;
