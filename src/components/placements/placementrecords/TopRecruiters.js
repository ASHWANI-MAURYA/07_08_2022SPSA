import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../mainpage/Mainpage.css";
import "../Placements.css";

const TopRecruiters = (props) => {
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
                    <img alt="" src={props.img6} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img7} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img8} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img9} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img10} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img11} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img12} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img13} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img14} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img15} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img16} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img17} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img18} />
                  </div>
                  {/* <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img19} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img20} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img21} />
                  </div> */}
                </div>
                {/* <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img22} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img23} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img24} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img25} />
                  </div>
                </div> */}
              </div>
              {/* <div className="item">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img26} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img27} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img28} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img29} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img30} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img31} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img32} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img33} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img34} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img35} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img36} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img37} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img38} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img39} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img40} />
                  </div>
                </div>
              </div> */}
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
                    <img alt="" src={props.img6} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img7} />
                  </div>
                </div>
                <div className="brands">
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img8} />
                  </div>
                  <div className="top-recruiters-brand-item">
                    <img alt="" src={props.img9} />
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

export default TopRecruiters;
