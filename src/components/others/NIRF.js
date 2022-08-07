import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";

const NIRF = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="NIRF"
        bluetext="National Institutional Ranking Framework"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        National Institutional Ranking Framework
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "center", marginBottom: "40px" }}>
        <img
          src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf_logo.png"
          style={{ width: "30%", marginBottom: "40px" }}
        />
        <p style={{ textAlign: "justify" }}>
          The{" "}
          <a href="https://www.nirfindia.org/UniversityRanking200.html">
            <b style={{ color: "blue" }}>NIRF 2017</b>
          </a>{" "}
          , by the Ministry of Human Resources Development, Government of India, have again ranked 
          <b style={{ color: "blue" }}>
            &nbsp;Sir Padampat Singhania University (SPSU)
          </b>{" "}
          for the second year running, as one of the leading university in India.
          <br />
          <b style={{ color: "blue" }}>SPSU</b> is among the few universities
          ranked in Rajasthan and the youngest institution to be so ranked. Last
          year,{" "}
          <a href="https://www.nirfindia.org/UniversityRanking200.html">
            <b style={{ color: "blue" }}>NIRF 2016</b>
          </a>{" "}
          had ranked SPSU among the top 100 universities in India of Category
          &apos;A&apos; higher educational institutions of the country.
        </p>
        <p style={{ textAlign: "justify" }}>
          <ul>
            <li>For NIRF 2022 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF_2022.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2021 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF_2021.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2020 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF_2020%20(1).zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2019 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF2019.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2018 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF2018.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2017 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF2017.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
            <li>For NIRF 2016 Report <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/nirf/NIRF2016.zip">
            <b style={{ color: "blue" }}>Click here</b></a></li>
          </ul><br/>
          <b style={{ color: "blue" }}>For any details on data submitted to NIRF DCS, please contact info@spsu.ac.in</b>
        </p>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default NIRF;
