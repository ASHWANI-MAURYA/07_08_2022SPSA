import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import BannerSubPage from "../banner/BannerSubPage";
import SideNavigation from "../sidenavigation/SideNavigation";
import "../aboutus/AboutUs.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import AcademicFacilities from "./AcademicFacilities";
import LibraryFacilities from "./LibraryFacilities";
import ResidentialFacilities from "./ResidentialFacilities";
import SportsFacilities from "./SportsFacilities";
import SolarPowerSystems from "./SolarPowerSystems";
import CampusFacilities from "./CampusFacilities";

const Facilities = () => {
  const [facilitiescomponent, setFacilitiesComponent] = useState(<></>);
  const [facilitiestype, setFacilitiesType] = useState("");
  const [sidenavactiveitem, setSidenavactiveitem] = useState(1);
    
  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentfacilitiestype = urlParts[urlParts.length - 1];

    if (currentfacilitiestype === "AcademicFacilities") {
      setFacilitiesComponent(<AcademicFacilities/>);
      setFacilitiesType("ACADEMIC FACILITIES");
      setSidenavactiveitem(1);
    } else if (currentfacilitiestype === "LibraryFacilities") {
      setFacilitiesComponent(<LibraryFacilities/>);
      setFacilitiesType("LIBRARY FACILITIES");
      setSidenavactiveitem(2);
    } else if (currentfacilitiestype === "ResidentialFacilities") {
      setFacilitiesComponent(<ResidentialFacilities/>);
      setFacilitiesType("RESIDENTIAL FACILITIES");
      setSidenavactiveitem(3);
    } else if (currentfacilitiestype === "CampusFacilities") {
      setFacilitiesComponent(<CampusFacilities/>);
      setFacilitiesType("CAMPUS FACILITIES");
      setSidenavactiveitem(4);
    } else if (currentfacilitiestype === "SportsFacilities") {
      setFacilitiesComponent(<SportsFacilities/>);
      setFacilitiesType("SPORTS FACILITIES");
      setSidenavactiveitem(5);
    } else if (currentfacilitiestype === "SolarPowerSystem") {
      setFacilitiesComponent(<SolarPowerSystems/>);
      setFacilitiesType("SOLAR POWER SYSTEMS");
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
        greentext="FACILITIES"
        bluetext={facilitiestype}
      />
      <div className="aboutus-content">
        <SideNavigation
          title="FACILITIES"
          activeitem={sidenavactiveitem}
          listitems={[
            {
              item: "ACADEMIC FACILITIES",
              href: "/Facilities/AcademicFacilities"
            },
            {
              item: "LIBRARY FACILITIES",
              href: "/Facilities/LibraryFacilities"
            },
            {
              item: "RESIDENTIAL FACILITIES",
              href: "/Facilities/ResidentialFacilities"
            },
            {
              item: "CAMPUS FACILITIES",
              href: "/Facilities/CampusFacilities"
            },
            {
              item: "SPORTS FACILITIES",
              href: "/Facilities/SportsFacilities"
            },
            {
              item: "SOLAR POWER SYSTEMS",
              href: "/Facilities/SolarPowerSystem"
            }
          ]}
        />
        <div className="aboutus-content-page">
          <div className="container">
            <Breadcrumb
              activepage="Vision"
              level1="FACILITIES"
              level2={facilitiestype}
            />
            {facilitiescomponent}
          </div>
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Facilities;
