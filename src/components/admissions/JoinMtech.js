import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import joinmtech1 from "../../images/admissions-joinmtech-1.png";
import joinmtech2 from "../../images/admissions-joinmtech-2.png";
import joinmtech3 from "../../images/admissions-joinmtech-3.png";
import joinmtech4 from "../../images/admissions-joinmtech-4.png";
import joinmtech5 from "../../images/admissions-joinmtech-5.png";
import joinmtech6 from "../../images/admissions-joinmtech-6.png";
import jkcement from "../../images/jk-cement-1.png";
import wipro from "../../images/wipro.png";
import byjus from "../../images/Byjus_logo.png";

import "./Admissions.css";
const JoinMtech = () => {
  return (
    <div className="join-mtech-section">
      <div className="container">
        <div className="join-mtech">
          <h3 className="heading">7 reasons to join SPSU</h3>
          <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech1}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Assured Placements</h6>
              <p className="mtech-desc">
                Placements in multi-national companies along with high packages.
              </p>
              <p className="highest">
                Highest package: <span className="avg-pack">13LPA</span>
              </p>
              <p className="highest">
                Average Package: <span className="avg-pack">4LPA in 2022</span>
              </p>

              <div className="brands-target">
                <img alt="" src={jkcement} />
                <img alt="" src={wipro} />
                <img alt="" src={byjus} />
              </div>
              <br />
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech2}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Learn From The Best</h6>
              <p className="mtech-desc">
                The advantage of faculty members with extensive industrial and
                academic experience, and with PhDs from top academic
                institutions.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech3}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Global Touch</h6>
              <p className="mtech-desc">
                Collaborations with acclaimed international academic
                institutions and leading names in the corporate sector to
                accelerate innovative learning and build beneficial relations.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech4}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Beyond The Classroom</h6>
              <p className="mtech-desc">
                Year-round campus events and activities that enrich learning and
                support the development of hard and soft skills.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech5}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Connection With The Real World</h6>
              <p className="mtech-desc">
                Regular industry exposure through expert-led talks, industry
                visits, and paid internships with top companies to know what the
                real world is like from the campus itself.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech6}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Business Incubator</h6>
              <p className="mtech-desc">
                Guidance and support for aspiring entrepreneurs at the early
                stages of business idea generation and planning. To ensure that
                the idea starts, builds and finally grows.
              </p>
            </div>
          </OwlCarousel>
          <OwlCarousel className="owl-theme desktop" margin={20} nav items={3}>
          <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech1}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Assured Placements</h6>
              <p className="mtech-desc">
                Placements in multi-national companies along with high packages.
              </p>
              <p className="highest">
                Highest package: <span className="avg-pack">13LPA</span>
              </p>
              <p className="highest">
                Average Package: <span className="avg-pack">4LPA in 2022</span>
              </p>

              <div className="brands-target">
                <img alt="" src={jkcement} />
                <img alt="" src={wipro} />
                <img alt="" src={byjus} />
              </div>
              <br />
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech2}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Learn From The Best</h6>
              <p className="mtech-desc">
                The advantage of faculty members with extensive industrial and
                academic experience, and with PhDs from top academic
                institutions.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech3}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Global Touch</h6>
              <p className="mtech-desc">
                Collaborations with acclaimed international academic
                institutions and leading names in the corporate sector to
                accelerate innovative learning and build beneficial relations.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech4}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Beyond The Classroom</h6>
              <p className="mtech-desc">
                Year-round campus events and activities that enrich learning and
                support the development of hard and soft skills.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech5}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Connection With The Real World</h6>
              <p className="mtech-desc">
                Regular industry exposure through expert-led talks, industry
                visits, and paid internships with top companies to know what the
                real world is like from the campus itself.
              </p>
            </div>
            <div className="item mtech-points">
              <img
                alt=""
                src={joinmtech6}
                className="admissions-joinmtech-carousel-top-image"
              />
              <h6 className="title-head">Business Incubator</h6>
              <p className="mtech-desc">
                Guidance and support for aspiring entrepreneurs at the early
                stages of business idea generation and planning. To ensure that
                the idea starts, builds and finally grows.
              </p>
            </div>
          </OwlCarousel>
          <a href="https://admissions.spsu.ac.in/"><button className="appply-for">APPLY FOR SPSAT</button></a>
          <br />
        </div>
      </div>
    </div>
  );
};
export default JoinMtech;
