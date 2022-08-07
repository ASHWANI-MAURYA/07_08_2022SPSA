import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import expert1 from "../../../../images/expert1.png";
import expert2 from "../../../../images/expert2.png";
import expert3 from "../../../../images/expert3.png";
import expert4 from "../../../../images/expert4.png";
import "./Btech.css";
import { useEffect, useState } from "react";

const ExpertFaculty = () => {
  const [navitems, setNavItems] = useState(4);
  let width = "";
  useEffect(() => {
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width <= 568) {
      setNavItems(2);
    } else {
      setNavItems(4);
    }
  }, []);
  return (
    <div className="expert-faculty-section">
      <div className="expert-faculty">
      <h5 id="FACULTYMEMBERS" className="courses-heading">DISTINGUISHED FACULTY MEMBERS</h5>
        <br />
        <br />
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          items={navitems}
        >
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert1} />
              <p className="expert-name">Rakesh Ramanathan</p>
              <p className="expert-dept">Department Director</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert2} />
              <p className="expert-name">Ranjit Manda</p>
              <p className="expert-dept">Head of Department</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert3} />
              <p className="expert-name">Saakshi Vala</p>
              <p className="expert-dept">Professor</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert4} />
              <p className="expert-name">Vidya Narayanan</p>
              <p className="expert-dept">Assistant Professor</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert1} />
              <p className="expert-name">Rakesh Ramanathan</p>
              <p className="expert-dept">Department Director</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert2} />
              <p className="expert-name">Ranjit Manda</p>
              <p className="expert-dept">Head of Department</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert3} />
              <p className="expert-name">Saakshi Vala</p>
              <p className="expert-dept">Professor</p>
            </div>
          </div>
          <div className="item experts">
            <div className="expert-indivial">
              <img alt="" src={expert4} />
              <p className="expert-name">Vidya Narayanan</p>
              <p className="expert-dept">Assistant Professor</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ExpertFaculty;
