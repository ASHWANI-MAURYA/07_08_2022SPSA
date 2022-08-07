import "./Mainpage.css";
import greaterthan from "../../images/greater-than.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import newsupdates1 from "../../images/student-news.png";
import newsupdates2 from "../../images/news-updates-2.png";
import newsupdates3 from "../../images/news-updates-3.png";
import newsupdates4 from "../../images/news-updates-4.png";
import newsupdates1mobile from "../../images/news-updates-1-mobile.png";
import newsupdates2mobile from "../../images/news-updates-2-mobile.png";
import newsupdates3mobile from "../../images/news-updates-3-mobile.png";
import newsupdates4mobile from "../../images/news-updates-4-mobile.png";

const NewsUpdates = (props) => {
  return (
    <div className="news-updates-section">
      <div className="container">
        <div className="news-updates desktop">
          <h5>NEWS & UPDATES</h5>
          <p className="spsu-excels-title">
          SPSU excels in several domains every day.
          </p>
          <div className="news-articles">
            {props.spsuData.map(function (obj, i) {
              if (i === 0) {
                obj.img = newsupdates1;
              } else if (i === 1) {
                obj.img = newsupdates2;
              } else if (i === 2) {
                obj.img = newsupdates3;
              } else if (i === 3) {
                obj.img = newsupdates4;
              }
              if (i === 2 || i === 3) {
                return (
                  <>
                    <div className="news-article">
                      <div className="article-desc left-aligned">
                        <h6>{obj.title}</h6>
                        {/* <p className="time-passed">{obj.timeago}</p> */}
                        <p className="desc">{obj.desc}</p>
                        <a href="/" className="readmore">
                          READ MORE
                          <img src={greaterthan} className="greaterthan" />
                        </a>
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
                        {/* <p className="time-passed">{obj.timeago}</p> */}
                        <p className="desc">{obj.desc}</p>
                        <a href={obj.href} className="readmore">
                          READ MORE
                          <img src={greaterthan} className="greaterthan" />
                        </a>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>

          {/* <button type="submit" className="blue-button">
            VIEW ALL
          </button> */}
        </div>
        <div className="news-updates mobile">
          <h5>NEWS & UPDATES</h5>
          <OwlCarousel
            className="owl-theme mobile"
            loop
            margin={20}
            nav
            items={1}
          >
            {props.spsuData.map((obj, i) => {
              if (i === 0) {
                obj.img = newsupdates1mobile;
              } else if (i === 1) {
                obj.img = newsupdates2mobile;
              } else if (i === 2) {
                obj.img = newsupdates3mobile;
              } else if (i === 3) {
                obj.img = newsupdates4mobile;
              }
              return (
                <div key={i} className="item mtech-points">
                  <img
                    alt=""
                    src={obj.img}
                    className="admissions-joinmtech-carousel-top-image"
                  />
                  <h6 className="title-head">{obj.title}</h6>
                  {/* <p className="time-passed">{obj.timeago}</p> */}
                  <p className="desc">{obj.desc}</p>
                  <a href={obj.href} className="readmore">
                    READ MORE
                    <span>
                      <img src={greaterthan} className="greaterthan" />
                    </span>
                  </a>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
export default NewsUpdates;
