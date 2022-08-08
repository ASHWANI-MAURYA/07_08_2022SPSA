import greenunderlinemobile from "../../images/green-underline-mobile.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Placements.css";
const TrainingPlacementCell = () => {
  return (
    <>
      <div className="visionpage-title">
        Training &amp; Placement Cell
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div>
          <p>
            The University has a Training &amp; Placement cell in place that
            primarily works as a liaison between the industry and the institute.
            It is well equipped with excellent infrastructure to conduct campus
            placements &amp; all other placement related activities like
            organizing seminar, workshops, lecture series &amp; interactive
            sessions by experts from the Industry &amp; Academia.
          </p>
          <p>
            The cell helps in the professional progress of the students through
            integrating the career issues within an academic environment for
            realizing the best possible career path. It facilitates the students
            to develop the desired skills essential for suitable job profile/
            higher education/ self-employment through counseling &amp; training
            and inviting the industries/ companies for final campus placements.
          </p>
          <p>
            Employability support programmes based on framework by assessment
            companies like AMCAT, CoCubes are provided to the students to map
            their performance &amp; employability skills as per the industry
            requirements.
          </p>
          <p>
            As part of the curriculum, pre-final year students both from the
            school of Engineering &amp; School of Management undergo summer
            internship in various leading organizations both at national &amp;
            international level which adds to their educational experience.
            These training programmes provide real life experience in the
            industries &amp; organizations, some of which are paid internships
            also.
          </p>
        </div>
        <div className="tnp-cell-cards-section desktop">
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/jk.png"
                width={160}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              JK Cement Plant, Fujairah (UAE)
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
            A fully paid industrial training JK Cement Works, in conjunction with the University, organised an International Summer Industrial Training Programme for selected final year students of the 2018 batch at JK Cement plant in Fujairah (UAE). Similarly, twelve selected students of the 2019 batch had also completed training at the Fujairah plant last year.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/hit.png"
                width={160}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Hitachi Rail Systems, Japan
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
            The University has an MoU with Hitachi Rail Systems Ltd., Japan for the Rail Transportation Engineering programme. Selected five
              students of Rail Transportation Engineering had undergone a paid
              industry internship programme for eight weeks at Hitachi Rail
              Systems Ltd., Japan last summer.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/jio.jpg"
                width={160}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Reliance Jio Centre of Excellence
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
            Recently, Reliance Jio has established an exclusive Reliance Jio Centre of excellence in south Rajasthan at SPSU and will train human resources for its projects. Jio will also provide internship and job opportunities to SPSU students.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/valuerhr-india.jpg"
                width={160}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Centre of Excellence (Next Gen. Technologies)
            </div>
            <div className="tnp-cell-card-programme-name">
              Valeur HR - paid Industrial Internship Programme
            </div>
            <div className="tnp-cell-card-desc">
            ValuerHR, in collaboration with SPSU, is providing the talented and outstanding students from the final and pre-final years to work on their live projects in HANA Cloud Platform, Artificial Intelligence, Internet of Things, and other Web Applications. These interns are paid a stipend during the training period, and the top performers are placed in their final year. Similarly, other companies of repute that have provided summer training & internship to SPSU students are ISRO, BSNL, Siemens India, South Central Railway, Force Motors, Exide Life, Religare, JK Cement HDFC, Apniclass, Saras, Maven Silicon, Secure meters, Pyrotech, Reliance Retail, Axis Bank, Wonder Cement, MineInfotech, MG Contractor, Ravi Infra, GR Infra, Genus, A One InfoTech, PhpPoets etc.
            </div>
          </div>
        </div>
        <OwlCarousel
          className="owl-theme mobile"
          margin={20}
          nav
          items={1}
          style={{ margin: "40px 0 !important" }}
          autoplay
          loop>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/jk.png"
                style={{ width: "100px" }}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              JK Cement Plant, Fujairah (UAE)
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
            A fully paid industrial training JK Cement Works, in conjunction with the University, organised an International Summer Industrial Training Programme for selected final year students of the 2018 batch at JK Cement plant in Fujairah (UAE). Similarly, twelve selected students of the 2019 batch had also completed training at the Fujairah plant last year.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/hit.png"
                style={{ width: "100px" }}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Hitachi Rail Systems, Japan
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
              The University has an MOU with Hitachi Rail Systems Ltd., Japan
              for the Rail Transportation Engineering programme. Selected five
              students of Rail Transportation Engineering had undergone a paid
              industry internship programme for eight weeks at Hitachi Rail
              Systems Ltd., Japan last summer.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/jio.jpg"
                style={{ width: "100px" }}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Reliance Jio Centre of Excellence
            </div>
            <div className="tnp-cell-card-programme-name">
              International Summer Industrial Training Programme
            </div>
            <div className="tnp-cell-card-desc">
            Recently, Reliance Jio has established an exclusive Reliance Jio Centre of excellence in south Rajasthan at SPSU and will train human resources for its projects. Jio will also provide internship and job opportunities to SPSU students.
            </div>
          </div>
          <div className="tnp-cell-card">
            <div className="tnp-cell-card-logo">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/internship-training/valuerhr-india.jpg"
                style={{ width: "100px" }}
              />
            </div>
            <div className="tnp-cell-card-company-name">
              Centre of Excellence (Next Gen. Technologies)
            </div>
            <div className="tnp-cell-card-programme-name">
              Valeur HR - paid Industrial Internship Programme
            </div>
            <div className="tnp-cell-card-desc">
            ValuerHR, in collaboration with SPSU, is providing the best talented students from the final and pre-final years to work on their live projects in HANA Cloud Platform, Artificial Intelligence, Internet of Things, and other Web Applications. These interns are paid a stipend during the training period, and the top performers are placed in their final year. Similarly, other companies of repute that have provided summer training &amp; internship to SPSU students are ISRO, BSNL, Siemens India, South Central Railway, Force Motors, Exide Life, Religare, JK Cements, HDFC, Apniclass, Saras, Maven Silicon, Secure meters, Pyrotech, Reliance Retail, Axis Bank, Wonder Cement, MineInfotech, MG Contractor, Ravi Infra, GR Infra, Genus, A One InfoTech, PhpPoets etc.
            </div>
          </div>
        </OwlCarousel>
        <h5 className="heading">Pre-placement Offers</h5>
        <br/>
        <div>
        Job offers have been given to some of the students both from the School of Management and the School of Engineering who have been associated with the above-mentioned companies during their summer and winter internships.
        </div>
      </div>
    </>
  );
};

export default TrainingPlacementCell;
