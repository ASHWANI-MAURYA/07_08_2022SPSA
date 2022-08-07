import greenunderlinemobile from "../../images/green-underline-mobile.png";
import blueline from "../../images/homepage-blueline.png";
import greenline from "../../images/homepage-greenline.png";
import pinkline from "../../images/homepage-redline.png";
import "./Academics.css";

const AcademicRegulations = () => {
  return (
    <>
      <div className="visionpage-title">
        Academic Regulations
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div className="examinations-section">
          <div className="academics-sections-class">
            <img src={blueline} className="academics-sections-underline" />
            <h5 className="heading academics-blue-class">EXAMINATIONS</h5>
            <div className="academics-sections-desc">
              There are two mid-term and one end-term examination in each
              semester.
              <br />
              <br />
              Regular end-term and back examination are held together.
              <br />
              <br />
              Fee for all regular examinations (two mid-term and one end-term
              examination) are included in the academic fees. For any other
              examination like special and back examinations, a charge of Rs.
              750/- per course (per paper) will be levied.
            </div>
          </div>
          <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/academic-regulations/exam.jpg" />
        </div>
        <div className="examinations-section">
          <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/academic-regulations/Evaluation.jpg" />
          <div className="academics-sections-class">
          <img src={greenline} className="academics-sections-underline" />
            <h5 className="heading academics-green-class">EVALUATION</h5>
            <div className="academics-sections-desc">
              There is a system of carrying forward the course in which a
              student has failed. If any student clears at least two courses in
              a semester, he/she may be allowed to be admitted in the next
              higher semester on probation. In subsequent semesters, the student
              will have to appear in his/her regular semester courses plus the
              back courses. The clearance of the back courses can be done only
              when they are offered. The restriction of odd and even semesters
              will apply.
              <br />
              <br />
              In case the syllabus of any course is modified, the back
              examination will be held on the basis of the modified syllabus of
              the course.
            </div>
          </div>
        </div>
        <div className="examinations-section">
          <div className="academics-sections-class">
          <img src={pinkline} className="academics-sections-underline" />
            <h5 className="heading academics-pink-class">PROGRAMME DURATION</h5>
            <div className="academics-sections-desc">
            The University offers programmes of two, three and four year’s duration and the fee remains the same for the entire duration of the programme. If any student exceeds the minimum duration of the programme then they will have to pay the revised academic fees for that programme while seeking admission in the extended semester(s).
              <br />
              <br />
              If any student fails to complete his/her academic programme within the minimum duration of the programme, the University will withdraw its placement assistance.
            </div>
          </div>
          <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/academic-regulations/Programme-Duration.jpg" />
        </div>
        <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/file/Regulations-on-Academic-Matters-2008-(Amended-2020).pdf">Detailed Academic Regulations 2008 (Amended 2020)</a>
      </div>
    </>
  );
};

export default AcademicRegulations;
