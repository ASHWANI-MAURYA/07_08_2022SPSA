import banner from "../../images/Relaunch_03.jpg";
import bannermobile from "../../images/Relaunch_03_Mob.jpg";
import PropTypes from "react";
import "./Banner.css";

const BannerHomePage = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  console.log(width);
  return (
    <div>
      <img alt="banner" src={banner} className="banner-home-page desktop" />
      <img
        alt="banner"
        src={bannermobile}
        className="banner-home-page mobile"
      />

      <div className="container">
        <div className="home-page-banner-text-yellow">USHERING A NEW ERA OF EXCELLENCE</div>
        <div className="home-page-banner-text-white">
        WELCOME TO SPSU WHERE NEW-AGE EDUCATION IS MOULDING THE LEADERS OF THE FUTURE. GET READY TO LEARN TO LEAD
        </div>

        <a target="_blank" href="https://www.youtube.com/watch?v=QZJYwdfh7ts" rel="noreferrer"><button className="button-white learn-more">LEARN MORE</button></a>
      </div>
    </div>
  );
};

BannerHomePage.propTypes = {
  bannergroup: PropTypes.array
};

export default BannerHomePage;
