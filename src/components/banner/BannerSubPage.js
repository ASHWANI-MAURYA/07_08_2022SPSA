import { useEffect, useState } from "react";
import "./Banner.css";

const BannerSubPage = (props) => {
  const [bannerclass, setBannerClass] = useState("banner");
  useEffect(() => {
    try {
      const urlParts = window.location.pathname.split("/");
      const currentBranch = urlParts[urlParts.length - 2];
      const currentGraduation = urlParts[urlParts.length - 1];
      if (
        currentBranch === "Mining" ||
        currentBranch === "ME" ||
        currentBranch === "ECE" ||
        currentGraduation === "Physics" ||
        currentGraduation === "Chemistry" ||
        currentGraduation === "Mathematics" ||
        currentGraduation === "BBA" ||
        currentGraduation === "MBA" ||
        currentGraduation === "PhDInManagement" ||
        currentGraduation === "AdmissionProcess" ||
        currentGraduation === "FeesStructure" ||
        currentGraduation === "FAQs" ||
        currentGraduation === "AllScholarships" ||
        currentGraduation === "ScholarshipCalculator"
      ) {
        setBannerClass("banner2");
        if (window.screen.width >= 1300 && window.screen.width <= 2000) {
          document.getElementsByClassName("banner-blue-text")[0].style.top = "460px";
          document.getElementsByClassName("banner-green-text")[0].style.top = "323px";
        } else if (window.screen.width <= 576) {
          document.getElementsByClassName("banner-blue-text")[0].style.top = "173px";
          document.getElementsByClassName("banner-green-text")[0].style.top = "68px";
        }
      }
    } catch (e) {
      //
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#1e2d3f" }} className="bannersubpage-div">
      <img src={props.bannerimage} className={bannerclass} />

      <div className="container">
        <div className="banner-green-text">{props.greentext}</div>
        <div className="banner-blue-text">{props.bluetext}</div>
      </div>
    </div>
  );
};

export default BannerSubPage;
