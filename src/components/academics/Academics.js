import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import BannerSubPage from "../banner/BannerSubPage";
import SideNavigation from "../sidenavigation/SideNavigation";
import "../aboutus/AboutUs.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import AcademicRegulations from "./AcademicRegulations";
import { useEffect, useState } from "react";
import AcademicCalendar from "./AcademicCalendar";
import OurFaculty from "./OurFaculty";
import Mentorship from "./Mentorship";
import ProjectEndeavour from "./ProjectEndeavour";
import DigitalInitiatives from "./DigitalInitiatives";

const Academics = () => {
  const [academiccomponent, setAcademicComponent] = useState(<></>);
  const [academictype, setAcademicType] = useState("");
  const [sidenavactiveitem, setSidenavactiveitem] = useState(1);
    
  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentAcademicType = urlParts[urlParts.length - 1];

    if (currentAcademicType === "AcademicRegulations") {
      setAcademicComponent(<AcademicRegulations/>);
      setAcademicType("ACADEMIC REGULATIONS");
      setSidenavactiveitem(1);
    } else if (currentAcademicType === "AcademicCalendar") {
      setAcademicComponent(<AcademicCalendar/>);
      setAcademicType("ACADEMIC CALENDAR");
      setSidenavactiveitem(2);
    } else if (currentAcademicType === "OurFaculty") {
      setAcademicComponent(<OurFaculty/>);
      setAcademicType("OUR FACULTIES");
      setSidenavactiveitem(3);
    } else if (currentAcademicType === "Mentorship") {
      setAcademicComponent(<Mentorship/>);
      setAcademicType("MENTORSHIP");
      setSidenavactiveitem(4);
    } else if (currentAcademicType === "ProjectEndeavour") {
      setAcademicComponent(<ProjectEndeavour/>);
      setAcademicType("PROJECT ENDEAVOUR");
      setSidenavactiveitem(5);
    } else if (currentAcademicType === "SWAYAM") {
      setAcademicComponent(<DigitalInitiatives/>);
      setAcademicType("SWAYAM");
      setSidenavactiveitem(6);
    }
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage=""
        greentext="ACADEMICS"
        bluetext={academictype}
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ACADEMICS"
          activeitem={sidenavactiveitem}
          listitems={[
            {
              item: "ACADEMIC REGULATIONS",
              href: "/Academics/AcademicRegulations"
            },
            {
              item: "ACADEMIC CALENDAR",
              href: "/Academics/AcademicCalendar"
            },
            {
              item: "OUR FACULTY",
              href: "/Academics/OurFaculty"
            },
            {
              item: "MENTORSHIP",
              href: "/Academics/Mentorship"
            },
            {
              item: "PROJECT ENDEAVOUR",
              href: "/Academics/ProjectEndeavour"
            },
            {
              item: "SWAYAM",
              href: "/Academics/SWAYAM"
            },
            {
              item: "DEPARTMENTAL LABORATORIES",
              href: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/labs.pdf"
            },
            {
              item: "REGISTERED PHD SCHOLARS",
              href: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD%20student%20list_2020.pdf"
            }
          ]}
        />
        <div className="aboutus-content-page">
          <div className="container">
            <Breadcrumb
              activepage="Vision"
              level1="ACADEMICS"
              level2={academictype}
            />
            {academiccomponent}
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Academics;
