import { useEffect, useState } from "react";
import BannerSubPage from "../banner/BannerSubPage";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import SideNavigation from "../sidenavigation/SideNavigation";
import placementsbanner from "../../images/placements-banner.png";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import PlacementRecords from "./placementrecords/PlacementRecords";
import Internships from "./Internships";
import TrainingPlacementCell from "./TrainingPlacementCell";
import SPSUAlumni from "./SPSUAlumni";
import PlacementTestimonials from "./PlacementTestimonials";

const Placements = () => {
  const [bannerimage, setBannerImage] = useState("");
  const [greentext, setGreenText] = useState("");
  const [bluetext, setBlueText] = useState("");
  const [contentcomponent, setContentComponent] = useState(<></>);
  const [navigationactiveitem, setNavigationActiveItem] = useState(0);
  const [breadcrumbtext, setBreadCrumbText] = useState("");

  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const placementitem = urlParts[urlParts.length - 1];

    if (placementitem === "TrainingPlacementCell") {
      setGreenText("PLACEMENT");
      setBlueText("TRAINING & PLACEMENT CELL");
      setNavigationActiveItem(1);
      setBreadCrumbText("TRAINING & PLACEMENT CELL");
      setContentComponent(<TrainingPlacementCell />);
    } else if (placementitem === "PlacementRecord") {
      setGreenText("PLACEMENT");
      setBlueText("RECORDS");
      setNavigationActiveItem(2);
      setBreadCrumbText("PLACEMENT RECORD");
      setContentComponent(<PlacementRecords />);
    } else if (placementitem === "Testimonials") {
      setGreenText("PLACEMENT");
      setBlueText("TESTIMONIALS");
      setNavigationActiveItem(3);
      setBreadCrumbText("TESTIMONIALS");
      setContentComponent(<PlacementTestimonials />);
    } else if (placementitem === "Internships") {
      setGreenText("PLACEMENT");
      setBlueText("INTERNSHIPS & TRAINING");
      setNavigationActiveItem(4);
      setBreadCrumbText("INTERNSHIPS & TRAINING");
      setContentComponent(<Internships />);
    } else if (placementitem === "SPSUAlumni") {
      setGreenText("PLACEMENT");
      setBlueText("OUR ALUMNI");
      setNavigationActiveItem(5);
      setBreadCrumbText("OUR ALUMNI");
      setContentComponent(<SPSUAlumni />);
    } 
    setBannerImage(placementsbanner);
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={bannerimage}
        greentext={greentext}
        bluetext={bluetext}
      />
      <div className="aboutus-content">
        <SideNavigation
          title="PLACEMENT"
          activeitem={navigationactiveitem}
          listitems={[
            {
              item: "T&P CELL",
              href: "/Placements/TrainingPlacementCell",
              expandable: false
            },
            {
              item: "PLACEMENT RECORD",
              href: "/Placements/PlacementRecord",
              expandable: false
            },
            {
              item: "TESTIMONIALS",
              href: "/Placements/Testimonials",
              expandable: false
            },
            
            {
              item: "SPSU ALUMNI",
              href: "/Placements/SPSUAlumni",
              expandable: false
            }
          ]}
        />
        <div className="subpages-content-page">
          <Breadcrumb level1="PLACEMENT" level2={breadcrumbtext} />
          {contentcomponent}
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Placements;
