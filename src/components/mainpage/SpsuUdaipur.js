import horizontalLinePink from "../../images/horizontal-line-pink.png";
import horizontalLineGreen from "../../images/horizontal-line-green.png";
import horizontalLineLightBlue from "../../images/horizontal-line-light-blue.png";
import horizontalLineLightGreen from "../../images/horizontal-line-light-green.png";

import "./Mainpage.css";
const SpsuUdaipur = () => {
  return (
    <div className="spsu-udaipur-section">
      <div className="top-line-spsu"></div>
      <div className="container">
        <div className="spsu-udaipur">
          <h5 className="spsu-title-heading">SPSU - Udaipur</h5>
          <p className="spsu-subtitle">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
          <br />
          <br />
          <div className="row-first">
            <div className="industry-placements">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5 className="spsu-title">Industry-Led Education</h5>
              <img
                alt=""
                src={horizontalLineLightGreen}
                className="spsu-udaipur-lines"
              />
              <p className="spsu-desc">
                Collaborated with top companies across industries to co-develop
                andco-deliver B.Tech and MBA degree
              </p>
            </div>
            <div className="career-reality">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5 className="spsu-title">Making You Career Ready</h5>
              <img
                alt=""
                src={horizontalLinePink}
                className="spsu-udaipur-lines"
              />
              <p className="spsu-desc">
                Focus on experiential education along with emphasis on
                professional skills like problem solving and communication
              </p>
            </div>
          </div>
          <div className="row-second">
            <div className="placement-record">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5 className="spsu-title">Leading to Best Placement Record</h5>
              <img
                alt=""
                src={horizontalLineGreen}
                className="spsu-udaipur-lines"
              />
              <p className="spsu-desc">
                100% placement record with 13LPA highest package and 30+
                students with multiple job offers
              </p>
            </div>
            <div className="scholarship">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5 className="spsu-title">
                Come, Join Us andGet attractive Scholarship
              </h5>
              <img
                alt=""
                src={horizontalLineLightBlue}
                className="spsu-udaipur-lines"
              />
              <p className="spsu-desc">
                Promote meritorious students with up to 100% scholarship
                available across all degree programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpsuUdaipur;
