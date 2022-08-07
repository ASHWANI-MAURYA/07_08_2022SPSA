import { useEffect, useState } from "react";
import BannerSubPage from "../banner/BannerSubPage";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import SideNavigation from "../sidenavigation/SideNavigation";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import ResearchPolicy from "./ResearchPolicy";
import CodeOfEthics from "./CodeOfEthics";
import ResearchProjects from "./ResearchProjects";
import ResearchArticles from "./ResearchArticles";
import ResearchFellowship from "./ResearchFellowship";
import BusinessIncubator from "./BusinessIncubator";
import Fulbright from "./Fulbright";

const Research = () => {
  const [greentext, setGreenText] = useState("");
  const [bluetext, setBlueText] = useState("");
  const [contentcomponent, setContentComponent] = useState(<></>);
  const [navigationactiveitem, setNavigationActiveItem] = useState(0);
  const [breadcrumbtext, setBreadCrumbText] = useState("");

  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const researchitem = urlParts[urlParts.length - 1];

    if (researchitem === "ResearchPolicy") {
      setGreenText("RESEARCH");
      setBlueText("RESEARCH POLICY");
      setNavigationActiveItem(1);
      setBreadCrumbText("RESEARCH POLICY");
      setContentComponent(<ResearchPolicy />);
    } else if (researchitem === "CodeOfEthics") {
      setGreenText("RESEARCH");
      setBlueText("CODE OF ETHICS");
      setNavigationActiveItem(2);
      setBreadCrumbText("CODE OF ETHICS");
      setContentComponent(<CodeOfEthics />);
    } else if (researchitem === "ResearchProjects") {
      setGreenText("RESEARCH");
      setBlueText("RESEARCH PROJECTS");
      setNavigationActiveItem(3);
      setBreadCrumbText("RESEARCH PROJECTS");
      setContentComponent(<ResearchProjects />);
    } else if (researchitem === "ResearchArticles") {
      setGreenText("RESEARCH");
      setBlueText("RESEARCH ARTICLES");
      setNavigationActiveItem(4);
      setBreadCrumbText("RESEARCH ARTICLES");
      setContentComponent(<ResearchArticles />);
    } else if (researchitem === "ResearchFellowship") {
      setGreenText("RESEARCH");
      setBlueText("CAREER OPPORTUNITIES AT SPSU");
      setNavigationActiveItem(7);
      setBreadCrumbText("CAREER OPPORTUNITIES AT SPSU");
      setContentComponent(<ResearchFellowship />);
    } else if (researchitem === "BusinessIncubator") {
      setGreenText("RESEARCH");
      setBlueText("BUSINESS INCUBATOR");
      setNavigationActiveItem(8);
      setBreadCrumbText("BUSINESS INCUBATOR");
      setContentComponent(<BusinessIncubator />);
    } else if (researchitem === "AboutFullbright") {
      setGreenText("RESEARCH");
      setBlueText("ABOUT FULBRIGHT");
      setNavigationActiveItem(9);
      setBreadCrumbText("ABOUT FULBRIGHT");
      setContentComponent(<Fulbright />);
    }
  }, []);
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        greentext={greentext}
        bluetext={bluetext}
      />
      <div className="aboutus-content">
        <SideNavigation
          title="RESEARCH"
          activeitem={navigationactiveitem}
          listitems={[
            {
              item: "RESEARCH POLICY",
              href: "/Research/ResearchPolicy",
              expandable: false
            },
            {
              item: "CODE OF ETHICS",
              href: "/Research/CodeOfEthics",
              expandable: false
            },
            {
              item: "RESEARCH PROJECTS",
              href: "/Research/ResearchProjects",
              expandable: false
            },
            {
              item: "RESEARCH ARTICLES",
              href: "/Research/ResearchArticles",
              expandable: false
            },
            {
              item: "PHD THESIS",
              href: "http://shodhganga.inflibnet.ac.in/handle/10603/191674/simple-search?filterquery=English&amp;filtername=language&amp;filtertype=equals",
              expandable: false
            },
            {
              item: "PHD SCHOLARS",
              href: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD-student-list-Existing-(as-of-Oct-12-2021).pdf",
              expandable: false
            },
            {
              item: "RESEARCH FELLOWSHIP",
              href: "/Research/ResearchFellowship",
              expandable: false
            },
            {
              item: "BUSINESS INCUBATOR",
              href: "/Research/BusinessIncubator",
              expandable: false
            },
            {
              item: "ABOUT FULBRIGHT",
              href: "/Research/AboutFullbright",
              expandable: false
            }
          ]}
        />
        <div className="subpages-content-page">
          <Breadcrumb level1="RESEARCH" level2={breadcrumbtext} />
          {contentcomponent}
        </div>
      </div>

      {/* <Newsletter /> */}
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Research;
