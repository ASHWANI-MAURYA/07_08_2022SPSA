import "./Admission.css";
import AdmissionStep from "./AdmissionStep";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Whitebar from "../header/Whitebar";
import Menubar from "../header/Menubar";
import BannerSubPage from "../banner/BannerSubPage";
import SideNavigation from "../sidenavigation/SideNavigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import banner from "../../images/graduation-admission.png";
import { useEffect, useState } from "react";
import FAQsAdmissions from "./FAQsAdmissions";
import FeesStructure from "./FeesStructure";
// import AllScholarships from "./AllScholarships";

const Admission = () => {
  const [admissioncomponent, setAdmissionComponent] = useState(<></>);
  const [level2, setLevel2] = useState("");
  const [activeitem, setActiveItem] = useState(1);
  const [activesubitem, setActiveSubItem] = useState(0);

  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentAdmissionType = urlParts[urlParts.length - 1];

    if (currentAdmissionType === "AdmissionProcess") {
      setAdmissionComponent(<AdmissionStep/>);
      setLevel2("ADMISSION PROCESS");
      setActiveItem(1);
    } else if (currentAdmissionType === "FAQs") {
      setAdmissionComponent(<FAQsAdmissions/>);
      setLevel2("FAQS");
      setActiveItem(5);
    } else if (currentAdmissionType === "FeesStructure") {
      setAdmissionComponent(<FeesStructure/>);
      setLevel2("FEES & SCHOLARSHIPS");
      setActiveItem(3);
    
    // } else if (currentAdmissionType === "AllScholarships") {
    //   setAdmissionComponent(<AllScholarships/>);
    //   setLevel2("ALL SCHOLARSHIPS");
    //   setActiveItem(4);
    //   setActiveSubItem(1);
    } else if (currentAdmissionType === "ScholarshipCalculator") {
      setLevel2("SCHOLARSHIP CALCULATOR");
      setActiveItem(4);
      setActiveSubItem(2);
    }
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={banner}
        greentext="ADMISSIONS"
        bluetext={level2}
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ADMISSIONS"
          activeitem={activeitem}
          activesubitem={activesubitem}
          listitems={[
            {
              item: "ADMISSION PROCESS",
              href: "/Admissions/AdmissionProcess"
            },
            {
              item: "PROSPECTUS",
              href: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf"
            },
            {
              item: "FEES & SCHOLARSHIPS",
              href: "/Admissions/FeesStructure"
            },
            // {
            //   item: "SCHOLARSHIPS",
            //   href: "/Admissions/AllScholarships"
            // },
            {
              item: "FAQS",
              href: "/Admissions/FAQs"
            },
            {
              item: "CONTACT FOR ADMISSION",
              href: "/ContactUs"
            }
          ]}
        />
        <div className="aboutus-content-page">
          <div className="container">
            <Breadcrumb
              activepage="Vision"
              level1="ADMISSIONS"
              level2={level2}
            />
            
            <div className="visionpage-summary">
            {admissioncomponent}
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};
export default Admission;
