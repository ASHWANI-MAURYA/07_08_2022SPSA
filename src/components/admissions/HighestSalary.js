import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../images/bureau.png";
import img2 from "../../images/cms.png";
import img3 from "../../images/axis-bank.png";
import img4 from "../../images/icici-bank.png";
import img5 from "../../images/icici.png";
import img6 from "../../images/jaro-education.png";
import img7 from "../../images/jkt.png";
import img8 from "../../images/indusind-bank.png";
import img9 from "../../images/spicejet.png";
import img10 from "../../images/jbm.png";
import img11 from "../../images/infochips.png";
import img12 from "../../images/byjus.png";
import "./Admission.css";

const HighestSalary = () => {
  return (
    <div className="highest-salary-section">
      <div className="container">
        <div className="highest-package">
          <h3 className="heading-highest">Highest Salary Package</h3>
          <p className="subtitle">
            <div>&nbsp;&nbsp;Average salary - 4.2 LPA&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highest salary - 13 LPA&nbsp;</div>
          </p>
          <OwlCarousel
            className="owl-theme desktop"
            loop
            margin={20}
            nav
            items={1}
          >
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img1} />
                <img alt="" src={img2} />
                <img alt="" src={img3} />
                <img alt="" src={img4} />
                <img alt="" src={img5} />
                <img alt="" src={img6} />
              </div>
              <div className="brands">
                <img alt="" src={img7} />
                <img alt="" src={img8} />
                <img alt="" src={img9} />
                <img alt="" src={img10} />
                <img alt="" src={img11} />
                <img alt="" src={img12} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img1} />
                <img alt="" src={img2} />
                <img alt="" src={img3} />
                <img alt="" src={img4} />
                <img alt="" src={img5} />
                <img alt="" src={img6} />
              </div>
              <div className="brands">
                <img alt="" src={img7} />
                <img alt="" src={img8} />
                <img alt="" src={img9} />
                <img alt="" src={img10} />
                <img alt="" src={img11} />
                <img alt="" src={img12} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img1} />
                <img alt="" src={img2} />
                <img alt="" src={img3} />
                <img alt="" src={img4} />
                <img alt="" src={img5} />
                <img alt="" src={img6} />
              </div>
              <div className="brands">
                <img alt="" src={img7} />
                <img alt="" src={img8} />
                <img alt="" src={img9} />
                <img alt="" src={img10} />
                <img alt="" src={img11} />
                <img alt="" src={img12} />
              </div>
            </div>
          </OwlCarousel>
          <OwlCarousel
            className="owl-theme mobile"
            loop
            margin={20}
            nav
            items={1}
          >
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img1} />
                <img alt="" src={img2} />
              </div>
              <div className="brands">
                <img alt="" src={img3} />
                <img alt="" src={img4} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img5} />
                <img alt="" src={img6} />
              </div>
              <div className="brands">
                <img alt="" src={img7} />
                <img alt="" src={img8} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img9} />
                <img alt="" src={img10} />
              </div>
              <div className="brands">
                <img alt="" src={img11} />
                <img alt="" src={img12} />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
export default HighestSalary;
