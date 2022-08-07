import notification from "../../images/notification.png";
import faciliteslogo1 from "../../images/facilities-logo-1.png";
import faciliteslogo2 from "../../images/facilities-logo-2.png";
import faciliteslogo3 from "../../images/facilities-logo-3.png";
import faciliteslogo4 from "../../images/facilities-logo-4.png";
import faciliteslogo5 from "../../images/suitcase.png";
import faciliteslogo6 from "../../images/handshake.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Mainpage.css";
import { useEffect } from "react";

const CampusFacilities = () => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  return (
    <div className="campus-facilities-section">
      <div className="pioneers-title">
        <h1>Sir Padampat Singhania University (SPSU)</h1>
        ADVANTAGE SPSU
      </div>
      <div className="notification-toggle container">
        <img alt="" src={notification} />
      </div>
      <div className="campus-facilities desktop reveal">
        <div className="facilities-row">
          <div className="facilities">
            <div className="campus-facilities-heading">
              <img src={faciliteslogo1} className="facilities-logo" />
              <h5>Top Ranked University of India</h5>
            </div>
            <p className="facilities-desc">
              SPSU has been ranked as the{" "}
              <b>No. 1 university in the Mewar region.</b> It is ranked{" "}
              <b>4th in Rajasthan and 23rd in India by EW Ranking 2022</b> among
              leading private engineering and technology universities.
            </p>
          </div>
          <div className="facilities">
            <div className="campus-facilities-heading">
              <img src={faciliteslogo2} className="facilities-logo" />
              <h5>Industry Ready Specialized Programs</h5>
            </div>
            <p className="facilities-desc">
              SPSU offers <b>6 specializations</b> across the School of
              Engineering and Management, in partnership with{" "}
              <b>leading corporates</b>.
            </p>
          </div>
        </div>
        <div className="facilities-row">
          <div className="facilities">
            <div className="campus-facilities-heading">
              <img src={faciliteslogo5} className="facilities-logo" />
              <h5>
                Stellar placement records with highest package of INR 13.4 LPA
              </h5>
            </div>
            <p
              className="facilities-desc"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <b>% students with multiple job offers</b> - 50.5%
              </div>
              <div>
                <b>% students earning 4 LPA or more</b> - 41.9%
              </div>
            </p>
          </div>
          <div className="facilities">
            <div className="campus-facilities-heading">
              <img src={faciliteslogo6} className="facilities-logo" />
              <h5>Hiring by top companies at SPSU</h5>
            </div>
            <p className="facilities-desc">
              Our campus has witnessed several prominent recruiters from the
              industry over the past years, including the likes of{" "}
              <b>Byjus, TCS, Harman, Wipro</b> etc.
            </p>
          </div>
        </div>
        <div className="facilities-row">
          <div className="facilities" style={{ borderBottom: "none" }}>
            <div className="campus-facilities-heading">
              <img
                src={faciliteslogo3}
                className="facilities-logo"
                style={{ marginTop: "-7px", height: "25px" }}
              />
              <h5>Career Readiness with Application-Based Curriculum</h5>
            </div>
            <p className="facilities-desc">
              SPSU offers experiential learning through{" "}
              <b>mentorship by leading MNCs </b>
              that helps shape careers as future leaders.
            </p>
          </div>
          <div className="facilities" style={{ borderBottom: "none" }}>
            <div className="campus-facilities-heading">
              <img src={faciliteslogo4} className="facilities-logo" />
              <h5>360 Degree Campus Experience</h5>
            </div>
            <p className="facilities-desc">
              SPSU is spread across <b>100 acres</b> with{" "}
              <b>modern infrastructure</b> that enables students to have a
              vibrant campus experience through extra-curricular and
              co-curricular activities.
            </p>
          </div>
        </div>
      </div>
      <OwlCarousel className="owl-theme mobile" loop margin={20} nav items={1}>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo1} className="facilities-logo" />
            <h5>Top Ranked University of India</h5>
          </div>
          <p className="facilities-desc">
            SPSU has been ranked as the{" "}
            <b>No. 1 university in the Mewar region.</b> It has ranked{" "}
            <b>4th in Rajasthan and 23rd in India by EW Ranking 2022</b> among
            leading private engineering and technology universities.
          </p>
        </div>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo2} className="facilities-logo" />
            <h5>Industry Ready Specialized Programs</h5>
          </div>
          <p className="facilities-desc">
            SPSU offers <b>6 specializations</b> across the School of
            Engineering and Management, in partnership with{" "}
            <b>leading corporates</b>.
          </p>
        </div>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo5} className="facilities-logo" />
            <h5>
              Stellar placement records with highest package of INR 13.4 LPA
            </h5>
          </div>
          <p
            className="facilities-desc"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <b>% students with multiple job offers</b> - 50.5%
            </div>
            <div>
              <b>% students earning 4 LPA or more</b> - 41.9%
            </div>
          </p>
        </div>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo6} className="facilities-logo" />
            <h5>Hiring by top companies at SPSU</h5>
          </div>
          <p className="facilities-desc">
            Our campus has witnessed several prominent recruiters from the
            industry over the past years, including the likes of{" "}
            <b>Byjus, TCS, Harman, Wipro</b> etc.
          </p>
        </div>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo3} className="facilities-logo" />
            <h5>Career Readiness with Application-Based Curriculum</h5>
          </div>
          <p className="facilities-desc">
            SPSU offers experiential learning through{" "}
            <b>mentorship by leading MNCs </b>
            that will shape your career as future leaders.
          </p>
        </div>
        <div className="item home-page-spsu-features-points campus-facilities-card">
          <div className="campus-facilities-heading">
            <img src={faciliteslogo4} className="facilities-logo" />
            <h5>360 Degree Campus Experience</h5>
          </div>
          <p className="facilities-desc">
            SPSU is spread across <b>100 acres</b> with{" "}
            <b>modern infrastructure</b> that enables students to have a vibrant
            campus experience through extra-curricular and co-curricular
            activities.
          </p>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CampusFacilities;
