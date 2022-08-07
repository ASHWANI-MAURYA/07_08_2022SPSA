import chibacontent from "../../images/chiba-content.png";
import academiccollaborationsbannerphone from "../../images/academic-collaborations-bannerphone.png";
import Rectanglephone from "../../images/Rectanglephone.png";
import "./Collaborations.css";

const AcademicCollaboration = () => {
  return (
    <>
      <center>
        <img
          src={Rectanglephone}
          className="collaboration-reactangle d-none"
          alt="our-vision"
        />
      </center>
      <img
        src={chibacontent}
        className="collaborations-chiba-content"
        alt="our-vision"
      />
      <img
        src={academiccollaborationsbannerphone}
        className="collaborations-chiba-content-phone d-none"
        alt="our-vision"
      />
      <div className="collaborations-summary-text">
        The academic partnership of SPSU with CUC is primarily in the areas of
        student exchange and research collaboration. It aims at developing and
        establishing high quality education system through internationalization
        of teaching and curriculum. <br />
        <br />
        As a part of student exchange policy, the two partner universities
        organize semester exchang on a reciprocal basis. These exchange
        programmes comprise of lectures, industrial visits, cultural experiences
        and excursions. The summer Exchange programme organized by CUC also
        involves participants from different countries across the globe. The
        interaction with such multi-cultural peer group is a great learning
        experience for students of SPSU. It widens their academic horizons and
        helps in developing skills that are necessary for the global workforce.
      </div>
    </>
  );
};

export default AcademicCollaboration;
