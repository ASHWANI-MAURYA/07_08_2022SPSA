import banner from "../../images/Relaunch_03.jpg";
import Eventbanner from "../../images/Banner1Web.jpeg";
import bannermobile from "../../images/Relaunch_03_Mob.jpg";
import Eventbannermobile from "../../images/Banner2Mobile.jpeg";
import PropTypes from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const BannerHomePage = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  console.log(width);
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <a
            target="_blank"
            href="https://forms.gle/K6hQ3EMpx5cuyh4P7"
            rel="noreferrer"
          >
            <img
              alt="banner"
              src={Eventbanner}
              className="banner-home-page desktop"
            />
          </a>
          <a
            target="_blank"
            href="https://forms.gle/K6hQ3EMpx5cuyh4P7"
            rel="noreferrer"
          >
            {" "}
            <img
              alt="banner"
              src={Eventbannermobile}
              className="banner-home-page mobile"
            />
          </a>
          <Carousel.Caption>
            <a
              target="_blank"
              href="https://forms.gle/K6hQ3EMpx5cuyh4P7"
              rel="noreferrer"
            >
              <div style={{ height: "400px" }}></div>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="banner" src={banner} className="banner-home-page desktop" />
          <img
            alt="banner"
            src={bannermobile}
            className="banner-home-page mobile"
          />
          <div className="container mobile">
            <div
              className="home-page-banner-text-yellow"
              style={{ marginLeft: "20px" }}
            >
              USHERING A NEW ERA OF EXCELLENCE
            </div>
            <div
              className="home-page-banner-text-white"
              style={{ marginLeft: "20px" }}
            >
              WELCOME TO SPSU WHERE NEW-AGE EDUCATION IS MOULDING THE LEADERS OF
              THE FUTURE. GET READY TO LEARN TO LEAD
            </div>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QZJYwdfh7ts"
              rel="noreferrer"
            >
              <button
                style={{ marginTop: "-10px", marginLeft: "20px" }}
                className="button-white learn-more"
              >
                LEARN MORE
              </button>
            </a>
          </div>
          <div className="container desktop">
            <div>
              <div
                style={{ marginTop: "-40px" }}
                className="home-page-banner-text-yellow"
              >
                USHERING A NEW ERA OF EXCELLENCE
              </div>
              <div
                style={{ marginTop: "-100px" }}
                className="home-page-banner-text-white"
              >
                WELCOME TO SPSU WHERE NEW-AGE EDUCATION IS MOULDING THE LEADERS
                OF THE FUTURE. GET READY TO LEARN TO LEAD
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=QZJYwdfh7ts"
                  rel="noreferrer"
                >
                  <button
                    style={{ marginTop: "-300px" }}
                    className="button-white learn-more"
                  >
                    LEARN MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

BannerHomePage.propTypes = {
  bannergroup: PropTypes.array
};

export default BannerHomePage;
