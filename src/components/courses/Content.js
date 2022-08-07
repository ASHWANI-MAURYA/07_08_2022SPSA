import "./Courses.css";
import home from "../../images/home.png";
import clock from "../../images/clock.png";
import PropTypes from "react";

const Content = (props) => {
  const onClickTab = (evt) => {
    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    const cityName = evt.target.getInnerHTML();
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <div className="course-content">
      <div className="course-title">{props.title}</div>
      <div className="course-duration-section">
        <div className="course-duration">
          <img className="course-duration-logo" src={clock} />
          <div>{props.duration}</div>
        </div>
        <div className="course-duration">
          <img className="course-duration-logo" src={home} />
          <div>{props.coursetype}</div>
        </div>
      </div>
      <button className="button-blue learn-more apply-now" type="submit">
        Apply Now
      </button>

      <div className="tab">
        <button className="tablinks" onClick={onClickTab}>
          London
        </button>
        <button className="tablinks" onClick={onClickTab}>
          Paris
        </button>
        <button className="tablinks" onClick={onClickTab}>
          Tokyo
        </button>
      </div>

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  coursetype: PropTypes.string,
  applynow: PropTypes.string
};

export default Content;
