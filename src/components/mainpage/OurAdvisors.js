import "./Mainpage.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import madhuvij from "../../images/madhuvij.png";
import huzur from "../../images/huzur.png";
import monit from "../../images/monit.jpg";
import kamal from "../../images/kamal.png";
import { useEffect } from "react";

const OurAdvisors = () => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  return (
    <div className="pioneers-section our-advisor-section">
      <div className="pioneers-title">OUR ADVISORS</div>
      <div className="our-advisors-section desktop reveal">
        <div className="our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={huzur} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Prof. Huzur Saran</div>
          <div className="our-advisors-card-designation">
            HOD, CS Dept. IIT D <br />
            VISITING PROF., STANFORD
          </div>
        </div>
        <div className="our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={monit} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Dr. Monit Kapoor</div>
          <div className="our-advisors-card-designation">
            Professor &amp; Dean <br />
            Chitkara University
          </div>
        </div>
        <div className="our-advisors-card">
          <div className="our-advisors-card-pic">
            <div className="our-advisors-card-pic">
              <img src={kamal} className="our-advisors-card-pic" />
            </div>
          </div>
          <div className="our-advisors-card-name">Prof. Kamal Bansal</div>
          <div className="our-advisors-card-designation">
            Former Dean, UPES
            <br />
            Former Director, IQAC
          </div>
        </div>
        <div className="our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={madhuvij} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Prof. Madhu Vij</div>
          <div className="our-advisors-card-designation">
            Prof. Dept. of Finance <br />
            FMS Delhi, Former Director, MOIL Ltd
          </div>
        </div>
      </div>
      <OwlCarousel className="owl-theme mobile" loop margin={20} nav items={1}>
        <div className="item mtech-points campus-facilities-card our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={huzur} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Prof. Huzur Saran</div>
          <div className="our-advisors-card-designation">
            HOD, CS Dept. IIT D <br />
            VISITING PROF., STANFORD
          </div>
        </div>
        <div className="item mtech-points campus-facilities-card our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={monit} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Dr. Monit Kapoor</div>
          <div className="our-advisors-card-designation">
            Professor &amp; Dean <br />
            Chitkara University
          </div>
        </div>
        <div className="item mtech-points campus-facilities-card our-advisors-card">
          <div className="our-advisors-card-pic">
            <div className="our-advisors-card-pic">
              <img src={kamal} className="our-advisors-card-pic" />
            </div>
          </div>
          <div className="our-advisors-card-name">Prof. Kamal Bansal</div>
          <div className="our-advisors-card-designation">
            Former Dean, UPES
            <br />
            Former Director, IQAC
          </div>
        </div>
        <div className="item mtech-points campus-facilities-card our-advisors-card">
          <div className="our-advisors-card-pic">
            <img src={madhuvij} className="our-advisors-card-pic" />
          </div>
          <div className="our-advisors-card-name">Prof. Madhu Vij</div>
          <div className="our-advisors-card-designation">
            Prof. Dept. of Finance <br />
            FMS Delhi, Former Director, MOIL Ltd
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default OurAdvisors;
