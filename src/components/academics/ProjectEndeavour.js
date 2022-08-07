import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Academics.css";

const ProjectEndeavour = () => {
  return (
    <>
      <div className="visionpage-title">
        Project Endeavour
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div className="academics-mentorship-endeavour-section">
          <div className="academics-mentorship-endeavour-card">
            <div className="academics-mentorship-endeavour-card-image-section-1"></div>

            <div className="academics-mentorship-endeavour-card-title">
              Innovate
            </div>
            <div className="academics-mentorship-endeavour-card-desc">
              We, at SPSU, are continuously looking at innovative ways to
              deliver knowledge to our students, make learning and delivery
              mechanism innovative and interesting.
            </div>
          </div>
          <div className="academics-mentorship-endeavour-card">
            <div className="academics-mentorship-endeavour-card-image-section-2"></div>
            <div className="academics-mentorship-endeavour-card-title">
              Initiate
            </div>
            <div className="academics-mentorship-endeavour-card-desc">
              The timetable for Saturdays is planned in a way that will help both
              the teacher and the student to develop a concept which will
              require an in depth attempt to learn, articulate, bond together,
              initiate discussion, foster research, analyse, and above all,
              motivate the students to express their ideas openly.
            </div>
          </div>
          <div className="academics-mentorship-endeavour-card">
            <div className="academics-mentorship-endeavour-card-image-section-3"></div>
            <div className="academics-mentorship-endeavour-card-title">
              Research
            </div>
            <div className="academics-mentorship-endeavour-card-desc">
              The SPSU faculty and the group of students, who mutually agree to
              work together, select a contemporary topic which is preferably
              industry relevant and has an application-oriented perspective.
            </div>
          </div>
        </div>
        <p>
          We, at <b>SPSU</b>, are continuously looking at innovative ways to
          deliver knowledge to our students, make learning and delivery
          mechanism innovative and interesting. The timetable for Saturdays are
          planned in a way that will help both the teacher and the student to
          develop a concept which will require an in depth attempt to{" "}
          <b>
            learn, articulate, bond together, initiate discussion, foster
            research, analyse,
          </b>{" "}
          and above all, motivate the students to express their ideas openly.
        </p>
        <p>
          The SPSU faculty and the group of students, who mutually agree to work
          together, select a contemporary topic which is preferably industry
          relevant and has an application-oriented perspective. The topic
          selected by the group is then thoroughly discussed, debated and
          developed into the following:
        </p>
        <p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Project Endeavour format</li>
            <li>
              For Submission to <b>DST</b>
            </li>
            <li>
              For <b>SPSU GOI</b> incubation project (If the project can be
              incubated)
            </li>
          </ul>
        </p>
        <p>
          There is no restriction on the choice of the subject for the project.
          It could be a single subject or may be a combination of several
          subjects. The topic chosen may be from a wide range of subjects. For
          example:{" "}
          <b>
            Biodiversity, Social Sciences, Media and Advertisement, Environment,
            Scientific, Management, Architecture, Tourism
          </b>{" "}
          or any other subject or their combination.
        </p>
        <p>
          <b>For More Information</b>{" "}
          <a target="_blank" href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PROJECT_ENDEAVOUR.pdf" rel="noreferrer">
            Click Here
          </a>
        </p>
      </div>
    </>
  );
};

export default ProjectEndeavour;
