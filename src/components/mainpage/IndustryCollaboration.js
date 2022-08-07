import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../images/aws.png";
import img2 from "../../images/Beumar.png";
import img4 from "../../images/fl.png";
import img5 from "../../images/gainwell.png";
import img6 from "../../images/xebla.png";
import img7 from "../../images/microsoft (2).png";
import img8 from "../../images/tcs-ion.png";
import img9 from "../../images/intel_new.png";
import img10 from "../../images/GHH_new.png";
import img11 from "../../images/sas_new.svg";
import "./Mainpage.css";
const IndustryCollaboration = () => {
  return (
    <div className="industry-collaboration-section">
      <div className="container">
        <h5 className="industry-title">INDUSTRY COLLABORATIONS</h5>

        <div className="home-page-industry-collaboration-grid-section desktop">
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img1} style={{ width: "280px" }} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img2} style={{ width: "280px" }} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img4} style={{ width: "280px" }} />
          </div>

          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img5} style={{ width: "280px" }} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img6} style={{ width: "280px" }} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img7} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img
              alt=""
              src={
                "https://media.glassdoor.com/sqll/303029/hindustan-zinc-limited-squarelogo.png"
              }
              style={{ width: "107px" }}
            />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img8} />
          </div>

          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img9} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img10} />
          </div>
          <div className="home-page-industry-collaboration-grid-item">
            <img alt="" src={img11} />
          </div>
        </div>

        <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
          <div className="item ">
            <div className="brands">
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img1} />
              </div>
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img2} />
              </div>
            </div>
            <div className="brands">
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img11} style={{ width: "108px" }} />
              </div>
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img4} />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="brands">
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img5} />
              </div>
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img6} />
              </div>
            </div>
            <div className="brands">
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img7} style={{ width: "168px" }} />
              </div>
              <div className="home-page-industry-collaboration-brand-item">
                <img
                  alt=""
                  src={
                    "https://media.glassdoor.com/sqll/303029/hindustan-zinc-limited-squarelogo.png"
                  }
                  style={{ width: "107px" }}
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="brands">
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img9} style={{ width: "168px" }} />
              </div>
              <div className="home-page-industry-collaboration-brand-item">
                <img alt="" src={img10} style={{ width: "168px" }} />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default IndustryCollaboration;
