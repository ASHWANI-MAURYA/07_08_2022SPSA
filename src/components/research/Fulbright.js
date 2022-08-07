import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Research.css";

const Fulbright = () => {
  return (
    <>
      <div className="visionpage-title">
      Fulbright Fellowships 2020-21
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div className="visionpage-summary">
          <p>
          2020-2021 Fulbright-Nehru and other Fulbright Fellowships for Indian Citizens - The Fulbright Programme offers grants to U.S. citizens and nationals of other countries for teaching, advanced research, graduate study and professional development. The Fulbright Programme awards approximately 8000 new grants annually.
          </p>
          <p>
              <b>Fulbright-Nehru, other Fulbright, and Fulbright-Kalam Climate Fellowship programs for study, research, teaching and professional development in the U.S. <br/>
              <span style={{ color: "red" }}>APPLY NOW!</span> For details <a href="http://www.usief.org.in/Fellowships/Fellowships-for-Indian-Citizens.aspx">CLICK HERE</a></b>
          </p>
      </div>
      </>
  );
};

export default Fulbright;
