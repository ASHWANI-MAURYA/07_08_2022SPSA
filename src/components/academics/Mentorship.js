import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Academics.css";

const Mentorship = () => {
  return (
    <>
      <div className="visionpage-title">
        Mentorship
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div className="academics-mentorship-image-section">
          <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/men.png" />
          <p>
            The Student Representative Cell was formed with a vision to provide
            a friendly and supportive environment to students.
            <br />A Core team comprising of few students along with the support of 100 students have put in their best efforts in this direction to make mentorship an involving and dedicated programme. It aims at achieving the respective goals together.
          </p>
          <p>The cell undertakes the following activities:</p>
        </div>
        <div className="academics-mentorship-activities-section">
          <div className="academics-mentorship-activities-card">
            <div className="academics-mentorship-activities-card-image-section">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/ar.jpg"
                style={{ width: "250px" }}
              />
            </div>
            <div className="academics-mentorship-activities-card-title">
              Anti-Ragging Committee
            </div>
            <div className="academics-mentorship-activities-card-desc">
            A team comprising of faculty members, non-teaching staff, parents, and students is formed every year to curb the menace of ragging. SPSU proudly claims to enjoy a ragging-free environment.
            </div>
          </div>
          <div className="academics-mentorship-activities-card">
            <div className="academics-mentorship-activities-card-image-section">
              <img
                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/mess.jpg"
                style={{ width: "250px" }}
              />
            </div>
            <div className="academics-mentorship-activities-card-title">
              Mess Committee
            </div>
            <div className="academics-mentorship-activities-card-desc">
              SPSU has always encouraged students’ participation in the
              activities of the University. Another step in this direction is
              the formation of mess committee.The university has a separate mess
              for vegetarian and non-vegetarian food.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentorship;
