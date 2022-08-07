import "./Admission.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import admissionwhyspsu1 from "../../images/admissions-whyspsu-1.png";
import admissionwhyspsu2 from "../../images/admissions-whyspsu-2.png";
import admissionwhyspsu3 from "../../images/admissions-whyspsu-3.png";
import admissionwhyspsu4 from "../../images/admissions-whyspsu-4.png";
import admissionwhyspsu5 from "../../images/admissions-whyspsu-5.png";
import admissionwhyspsu6 from "../../images/admissions-whyspsu-6.png";

const WhySpsu = (props) => {
  return (
    <div className="whyspsu-section">
      <div className="container">
        <div className="whyspsu desktop">
          <h3 className="heading-spsu">Why SPSU?</h3>
          <div className="news-articles">
            {props.spsuData.map(function (obj, i) {
              if (i === 2 || i === 3) {
                return (
                  <>
                    <div className="news-article">
                      <div className="article-desc left-aligned">
                        <h6>{obj.title}</h6>
                        <p className="desc">{obj.desc}</p>
                      </div>
                      <img alt="" src={obj.img} className="right-aligned" />
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="news-article">
                      <img alt="" src={obj.img} className="left-aligned" />
                      <div className="article-desc right-aligned">
                        <h6>{obj.title}</h6>
                        <p className="desc">{obj.desc}</p>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="whyspsu mobile">
          <h3 className="heading-spsu">Why SPSU?</h3>
          <OwlCarousel
            className="owl-theme mobile"
            loop
            margin={20}
            nav
            items={1}>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu1}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">State-of-the-art Infrastructure</h6>
              <p className="mtech-desc">
                Access to fully computerized library, modern robotics and IoT
                labs, modern mess, world class sports facilities, modern hostel
                facilities and many more provisions to ensure wholesome campus
                experience
              </p>
            </div>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu2}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Learn From The Best</h6>
              <p className="mtech-desc">
                The advantage of faculty members with extensive industrial and
                academic experience, and with PhDs from top academic
                institutions.
              </p>
            </div>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu3}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Global Touch</h6>
              <p className="mtech-desc">
                Collaborations with acclaimed international academic
                institutions and leading names in the corporate sector to
                accelerate innovative learning and build beneficial relations.
              </p>
            </div>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu4}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Beyond the classroom</h6>
              <p className="mtech-desc">
                Year-round campus events and activities that enrich learning and
                support the development of hard and soft skills.
              </p>
            </div>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu5}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Connection with real world</h6>
              <p className="mtech-desc">
                Regular industry exposure through expert-led talks, industry
                visits, and paid internships with top companies to know what the
                real world is like from the campus itself.
              </p>
            </div>
            <div className="item why-spsu-points">
              <img
                alt=""
                src={admissionwhyspsu6}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Business Incubator</h6>
              <p className="mtech-desc">
                Regular industry exposure through expert-led talks, industry
                visits, and paid internships with top companies to know what the
                real world is like from the campus itself.
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
export default WhySpsu;
