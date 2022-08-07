import "./Mainpage.css";
import greaterthan from "../../images/greater-than.png";
import darkblueline from "../../images/darkblueline.png";
import { useEffect } from "react";

const Pioneers = () => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  const reveal = () => {
    const reveals = document.querySelectorAll(".revealXright");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 300;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeXright");
      } else {
        reveals[i].classList.remove("activeXright");
      }
    }
  };
  return (
    <>
      <div className="pioneers-title">PIONEERS IN EDUCATION</div>
      <div className="video-section desktop">
        <div className="container pioneer-video">
          <div className="blue-quotes ">
            <div className="image-box">
              <div className="blue-box-left">
                <h6 className="pioneer-title" style={{ color: "#0B1F84" }}>
                  India’s top University
                </h6>
                <img src={darkblueline} className="darkblueline" />
                <p className="pioneer-desc">
                  Sir Padampat Singhania University is one of the leading universities in Rajasthan. We have designed the curriculum in close partnership with marquee industry players and top academics in India to make you career-ready.
                </p>
                <a href="/AboutUs/VisionAndMission">
                  <div className="navy-light-blue">
                    READ MORE <img src={greaterthan} className="greaterthan" />
                  </div>
                </a>
              </div>
              <div className="blue-box-right revealXright">
                {/* <img alt="" src={playpause} className="double-quotes" /> */}
                {/* <img alt="" src={mockvideo} className="video-component" /> */}
                <iframe width="800" height="450" src="https://www.youtube.com/embed/QZJYwdfh7ts" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section mobile">
        <div className="container pioneer-video">
          <div className="blue-box-right">
            {/* <img alt="" src={playpause} className="double-quotes" /> */}
            {/* <img alt="" src={mockvideo} className="video-component" /> */}
            <iframe width="300" height="200" src="https://www.youtube.com/embed/QZJYwdfh7ts" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="blue-quotes ">
            <div className="image-box">
              <div className="blue-box-left container">
                <h6 className="pioneer-title" style={{ color: "#0B1F84" }}>
                  India’s top University
                </h6>
                <img src={darkblueline} className="darkblueline" />
                <p className="pioneer-desc">
                  Sir Padampat Singhania University is one of the leading universities in Rajasthan. We have designed the curriculum in close partnership with marquee industry players and top academics in India to make you career-ready.
                </p>
                <a href="/AboutUs/VisionAndMission">
                  <div className="navy-light-blue">
                    READ MORE <img src={greaterthan} className="greaterthan" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pioneers;
