import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../mainpage/Mainpage.css";
import "../Placements.css";

const TopRecruitersManagement = (props) => {
  return (
    <>
      <div className="industry-collaboration-section">
        <div className="container">
          <div className="top-recruiters-title">{props.title}</div>
          <br />
          <div className="desktop">
            <OwlCarousel className="owl-theme" margin={20} nav items={1}>
              <div className="item ">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img1} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img2} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img3} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img4} />
                  </div>
                  </div>
                  <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img5} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img6} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img7} />
                  </div>
                </div>
              </div>
              
            </OwlCarousel>
          </div>
          <div className="mobile">
            <OwlCarousel className="owl-theme" loop margin={20} nav items={1}>
              <div className="item ">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img1} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img2} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img3} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img4} />
                  </div>
                </div>
              </div>
              <div className="item ">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img5} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img6} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img7} />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRecruitersManagement;
