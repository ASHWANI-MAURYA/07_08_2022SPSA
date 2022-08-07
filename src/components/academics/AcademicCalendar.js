import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Academics.css";

const AcademicCalendar = () => {
  return (
    <>
      <div className="visionpage-title">
        Academic Calendar
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
          <div className="academics-note-section">NOTE: Commencement date of First Year classes shall be notified later.</div>
          <h5 className="heading" style={{ marginBottom: "40px" }}>First Year 2022-23: To be uploaded soon.</h5>
          <h5 className="heading" style={{ marginBottom: "20px" }}>Sr. Batch 2022-23</h5>
          <iframe className="border-1px" src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/academic-calendar/AcademicCalendar2022-23.pdf" height="600" width="100%" allowFullScreen=""></iframe>
      </div>
      </>
  );
};

export default AcademicCalendar;
