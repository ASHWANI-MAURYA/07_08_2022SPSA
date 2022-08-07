import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../images/recruiters-1.png";
import img2 from "../../images/recruiters-2.png";
import img3 from "../../images/recruiters-3.png";
import img4 from "../../images/recruiters-4.png";
import img5 from "../../images/recruiters-5.png";
import img6 from "../../images/recruiters-6.png";
import img7 from "../../images/recruiters-7.png";
import img8 from "../../images/recruiters-8.png";
import img9 from "../../images/recruiters-9.png";
import img10 from "../../images/recruiters-10.png";
import img11 from "../../images/recruiters-11.png";
import img12 from "../../images/recruiters-12.png";
import img13 from "../../images/recruiters-13.png";
import img14 from "../../images/recruiters-14.png";
import img15 from "../../images/recruiters-15.png";
import img16 from "../../images/recruiters-16.png";
import img17 from "../../images/recruiters-17.png";
import img18 from "../../images/recruiters-18.png";
import img19 from "../../images/recruiters-19.png";
import img20 from "../../images/recruiters-20.png";
import img21 from "../../images/recruiters-21.png";
import img22 from "../../images/recruiters-22.png";
import img23 from "../../images/recruiters-23.png";
import img24 from "../../images/recruiters-24.png";

import "./Mainpage.css";
const Recruiters = () => {
  return (
    <div className="recruiters-section">
      <div className="container">
        <div className="recruiters">
          <h5 className="recruiters-title">OUR PROMINENT RECRUITERS</h5>
          <OwlCarousel
            className="owl-theme desktop"
            margin={20}
            nav
            items={1}
          >
            <div className="item brand-items">
              <div className="brands">
                <img alt="" src={img1} style={{ padding: "60px" }}/>
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
            <div className="brands" style={{ marginTop: "40px" }}>
                <img alt="" src={img13} style={{ padding: "30px" }} />
                <img alt="" src={img14} />
                <img alt="" src={img15} />
                <img alt="" src={img16} />
                <img alt="" src={img17} />
                <img alt="" src={img18} />
              </div>
              <div className="brands">
                <img alt="" src={img19} />
                <img alt="" src={img20} style={{ padding: "50px" }}/>
                <img alt="" src={img21} />
                <img alt="" src={img22} />
                <img alt="" src={img23} />
                <img alt="" src={img24} />
              </div>
            </div>
          </OwlCarousel>
          <OwlCarousel
            className="owl-theme mobile"
            margin={20}
            nav
            items={1}
          >
            <div className="item brand-items">
              <div className="brands-first">
                <img alt="" src={img1} style={{ padding: "30px" }} />
                <img alt="" src={img2} />
              </div>
              <div className="brands">
                <img alt="" src={img3} />
                <img alt="" src={img4} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img5} />
                <img alt="" src={img6} />
              </div>
              <div className="brands">
                <img alt="" src={img7} />
                <img alt="" src={img8} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img9} />
                <img alt="" src={img10} />
              </div>
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img11} />
                <img alt="" src={img12} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img13}/>
                <img alt="" src={img14} />
              </div>
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img15} />
                <img alt="" src={img16} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img17} />
                <img alt="" src={img18} />
              </div>
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img19} />
                <img alt="" src={img20} />
              </div>
            </div>
            <div className="item brand-items">
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img21} />
                <img alt="" src={img22} />
              </div>
              <div className="brands" style={{ marginTop: "40px !important" }}>
                <img alt="" src={img23} />
                <img alt="" src={img24} />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
