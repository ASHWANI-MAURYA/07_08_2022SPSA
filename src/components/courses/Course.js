import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import PropTypes from "prop-types";
import "../carousel/Carousel.css";
import BannerSubPage from "../banner/BannerSubPage";
import btechcsebanner from "../../images/btech-cse-banner.png";
import mtechcsebanner from "../../images/mtech-cse-banner.png";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./Courses.css";
import coursedurationlogo from "../../images/clock.png";
import coursetypelogo from "../../images/home.png";
import BTechInCSE from "./content/btechincse/BTechInCSE";
import BTechInECE from "./content/btechinece/BTechInECE";
import MTechInCSE from "./content/mtechincse/MTechInCSE";
import SideNavigation from "../sidenavigation/SideNavigation";
import BTechInME from "./content/btechinme/BTechInME";
import BTechInMining from "./content/btechinmining/BTechInMining";
import MTechInMining from "./content/mtechinmining/MTechInMining";
import MTechInME from "./content/mtechinme/MTechInME";
import MTechInECE from "./content/mtechinece/MTechInECE";
import PhDInECE from "./content/phdinece/PhDInECE";
import PhDInCSE from "./content/phdincse/PhDInCSE";
import PhDInME from "./content/phdinme/PhDInME";
import PhDInMining from "./content/phdinmining/PhDInMining";
import Physics from "./content/physics/Physics";
import Chemistry from "./content/chemistry/Chemistry";
import Mathematics from "./content/mathematics/Mathematics";
import BBA from "./content/bba/BBA";
import MBA from "./content/mba/MBA";

const Course = (props) => {
  const [branch, setBranch] = useState("");
  const [graduation, setGraduation] = useState("");
  const [bannerimg, setBannerImage] = useState("");
  const [pagecontenttitle, setPageContentTitle] = useState("");
  const [courseduration, setCourseDuration] = useState("");
  const [coursetype, setCourseType] = useState("");
  const [contentcomponent, setContentComponent] = useState(<></>);
  const [brochureState, setBrochureState] = useState(true);
  const [breadcrumbSubText, setBreadcrumbSubText] = useState("");
  const [sidenavactiveitem, setSidenavactiveitem] = useState("");
  const [sidenavactivesubitem, setSidenavactivesubitem] = useState("");
  const [coursedurationstate, setCoursedurationstate] = useState(true);
  const [schooltype, setSchoolType] = useState("");
  const [sidenavlist, setSideNavList] = useState([{}]);

  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentBranch = urlParts[urlParts.length - 2];
    const currentGraduation = urlParts[urlParts.length - 1];

    if (currentBranch === "" && currentGraduation === "phD-in-computer-science-engineering") {
      setBranch("COMPUTER SCIENCE ENGINEERING");
      setBannerImage(mtechcsebanner);
      setPageContentTitle("PhD in Computer Science Engineering (CSE)");
      setBreadcrumbSubText("PhD in Computer Science Engineering");
      setCourseDuration("3-5 Years");
      setCourseType("Residential (Optional)");
      setGraduation("Ph.D");
      setContentComponent(
        <>
          <PhDInCSE />
        </>
      );
      setBrochureState(false);
      setSidenavactiveitem(1);
      setSidenavactivesubitem(3);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-electronics-and-communication-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    }
    if (
      currentBranch === "" &&
      currentGraduation === "btech-in-computer-science-engineering"
    ) {
      setBranch("COMPUTER SCIENCE ENGINEERING");
      setBannerImage(btechcsebanner);
      setPageContentTitle(<h1>B. Tech. in Computer Science Engineering</h1>);
      setBreadcrumbSubText("B. Tech in Computer Science Engineering");
      setCourseDuration("4 Years");
      setCourseType("Residential (Optional)");
      setGraduation("B. TECH");
      setContentComponent(
        <>
          <BTechInCSE />
        </>
      );
      setBrochureState(true);
      setSidenavactiveitem(1);
      setSidenavactivesubitem(1);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    }
    if (
      currentBranch === "" &&
      currentGraduation === "btech-in-electronics-communications-engineering"
    ) {
      setBranch("ELECTRONICS AND COMMUNICATION ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/B-Tech-in-Electronics-_-Communication-Engineering.jpg"
      );
      setPageContentTitle(
        <h1>B.Tech in Electronics Communications Engineering</h1>
      );
      setBreadcrumbSubText(
        "B. Tech in Electronics and Communication Engineering"
      );
      setCourseDuration("4 Years");
      setCourseType("Residential (Optional)");
      setGraduation("B. TECH");
      setContentComponent(
        <>
          <BTechInECE />
        </>
      );
      setBrochureState(true);
      setSidenavactiveitem(2);
      setSidenavactivesubitem(1);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "btech-in-mechanical-engineering"
    ) {
      setBranch("MECHANICAL ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/B-Tech-in-Mechanical-Engineering.jpg"
      );
      setPageContentTitle(<h1>B.Tech in Mechanical Engineering</h1>);
      setBreadcrumbSubText("B. Tech in Mechanical Engineering");
      setCourseDuration("4 Years");
      setCourseType("Residential (Optional)");
      setGraduation("B. TECH");
      setContentComponent(
        <>
          <BTechInME />
        </>
      );
      setBrochureState(true);
      setSidenavactiveitem(3);
      setSidenavactivesubitem(1);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "btech-in-mining-engineering"
    ) {
      setBranch("MINING ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/btmining.png"
      );
      setPageContentTitle(<h1>B.Tech in Mining Engineering </h1>);
      setBreadcrumbSubText("B. Tech in Mining Engineering");
      setCourseDuration("4 Years");
      setCourseType("Residential (Optional)");
      setGraduation("B. TECH");
      setContentComponent(
        <>
          <BTechInMining />
        </>
      );
      setBrochureState(true);
      setSidenavactiveitem(4);
      setSidenavactivesubitem(1);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "mtech-in-computer-science-engineering"
    ) {
      setBranch("COMPUTER SCIENCE ENGINEERING");
      setBannerImage(mtechcsebanner);
      setPageContentTitle(<h1>M. Tech. in Computer Science Engineering</h1>);
      setBreadcrumbSubText("M. Tech in Computer Science Engineering");
      setCourseDuration("2 Years");
      setCourseType("Residential (Optional)");
      setGraduation("M. TECH");
      setContentComponent(<MTechInCSE />);
      setBrochureState(false);
      setSidenavactiveitem(1);
      setSidenavactivesubitem(2);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "mtech-in-electronics-communication-engineering"
    ) {
      setBranch("ELECTRONICS AND COMMUNICATION ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/B-Tech-in-Electronics-_-Communication-Engineering.jpg"
      );
      setPageContentTitle(
        <h1>M.Tech in Electronics Communications Engineering</h1>
      );
      setBreadcrumbSubText(
        "M. Tech in Electronics and Communication Engineering"
      );
      setCourseDuration("2 Years");
      setCourseType("Residential (Optional)");
      setGraduation("M. TECH");
      setContentComponent(<MTechInECE />);
      setBrochureState(false);
      setSidenavactiveitem(3);
      setSidenavactivesubitem(2);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "mtech-in-mechanical-engineering"
    ) {
      setBranch("MECHANICAL ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/M-Tech-in-Mechanical-Engineering.jpg"
      );
      setPageContentTitle(<h1>M.Tech in Mechanical Engineering</h1>);
      setBreadcrumbSubText("M. Tech in Mechanical Engineering");
      setCourseDuration("2 Years");
      setCourseType("Residential (Optional)");
      setGraduation("M. TECH");
      setContentComponent(<MTechInME />);
      setBrochureState(false);
      setSidenavactiveitem(3);
      setSidenavactivesubitem(2);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentBranch === "" &&
      currentGraduation === "mtech-degree-in-mining-engineering"
    ) {
      setBranch("MINING ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/btmining.png"
      );
      setPageContentTitle(<h1>M.Tech in Mining Engineering </h1>);
      setBreadcrumbSubText("M. Tech in Mining Engineering");
      setCourseDuration("2 Years");
      setCourseType("Residential (Optional)");
      setGraduation("M. TECH");
      setContentComponent(<MTechInMining />);
      setBrochureState(false);
      setSidenavactiveitem(4);
      setSidenavactivesubitem(2);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentBranch === "" && currentGraduation === "phD-in-electronics-and-communication-engineering") {
      setBranch("ELECTRONICS AND COMMUNICATION ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/B-Tech-in-Electronics-_-Communication-Engineering.jpg"
      );
      // setBannerImage(mtechcsebanner);
      setPageContentTitle(
        "PhD in Electronics and Communication Engineering (ECE)"
      );
      setBreadcrumbSubText("PhD in Electronics and Communication Engineering");
      setCourseDuration("3-5 Years");
      setCourseType("Residential (Optional)");
      setGraduation("Ph.D");
      setContentComponent(<PhDInECE />);
      setBrochureState(false);
      setSidenavactiveitem(2);
      setSidenavactivesubitem(3);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-electronics-and-communication-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentBranch === "" && currentGraduation === "phD-in-mechanical-engineering") {
      setBranch("MECHANICAL ENGINEERING");
      // setBannerImage(
      //   "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/phD-in-mechanical-engineering.jpg?var=1"
      // );
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/PhD-in-Mechanical-Engineering.jpg?var=1"
      );
      setPageContentTitle("PhD in Mechanical Engineering (ME)");
      setBreadcrumbSubText("PhD in Mechanical Engineering");
      setCourseDuration("3-5 Years");
      setCourseType("Residential (Optional)");
      setGraduation("Ph.D");
      setContentComponent(<PhDInME />);
      setBrochureState(false);
      setSidenavactiveitem(3);
      setSidenavactivesubitem(3);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentBranch === "" && currentGraduation === "phD-in-mining-engineering") {
      setBranch("MINING ENGINEERING");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/PhD-in-Mining-Engineering.jpg"
      );
      setPageContentTitle("PhD in Mining Engineering (ME)");
      setBreadcrumbSubText("PhD in Mining Engineering");
      setCourseDuration("3-5 Years");
      setCourseType("Residential (Optional)");
      setGraduation("Ph.D");
      setContentComponent(<PhDInMining />);
      setBrochureState(false);
      setSidenavactiveitem(3);
      setSidenavactivesubitem(3);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentGraduation === "Physics") {
      setBranch("PHYSICS");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/Department-of-Physics.jpg"
      );
      setPageContentTitle("Department of Physics");
      setBreadcrumbSubText("Department of Physics");
      setCoursedurationstate(false);
      setGraduation("DEPARTMENT OF");
      setContentComponent(<Physics />);
      setBrochureState(false);
      setSidenavactiveitem(5);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentGraduation === "Chemistry") {
      setBranch("CHEMISTRY");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/Department-of-Chemistry.jpg"
      );
      setPageContentTitle("Department of Chemistry");
      setBreadcrumbSubText("Department of Chemistry");
      setCoursedurationstate(false);
      setGraduation("DEPARTMENT OF");
      setContentComponent(<Chemistry />);
      setBrochureState(false);
      setSidenavactiveitem(6);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (currentGraduation === "Mathematics") {
      setBranch("MATHEMATICS");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/course/Department-of-Mathematics.jpg"
      );
      setPageContentTitle("Department of Mathematics");
      setBreadcrumbSubText("Department of Mathematics");
      setCoursedurationstate(false);
      setGraduation("DEPARTMENT OF");
      setContentComponent(<Mathematics />);
      setBrochureState(false);
      setSidenavactiveitem(7);
      setSchoolType("Engineering");
      setSideNavList([
        {
          expandable: true,
          item: "Computer Science And Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-computer-science-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-computer-science-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Electronics Communication Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-electronics-communications-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-electronics-communication-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-computer-science-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mechanical Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mechanical-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-in-mechanical-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mechanical-engineering"
            }
          ]
        },
        {
          expandable: true,
          item: "Mining Engineering",
          subitems: [
            {
              title: "B. Tech",
              href: "/btech-in-mining-engineering"
            },
            {
              title: "M. Tech",
              href: "/mtech-degree-in-mining-engineering"
            },
            {
              title: "Ph.D",
              href: "/phD-in-mining-engineering"
            }
          ]
        },
        {
          expandable: false,
          item: "PHYSICS",
          href: "/Physics"
        },
        {
          expandable: false,
          item: "CHEMISTRY",
          href: "/Chemistry"
        },
        {
          expandable: false,
          item: "MATHEMATICS",
          href: "/Mathematics"
        }
      ]);
    } else if (
      currentGraduation === "bachelor-business-administration-course-degree"
    ) {
      setBranch("BUSINESS ADMISTRATION");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/sub7.jpg"
      );
      setPageContentTitle(<h1>BACHELOR OF BUSINESS ADMINISTRATION (BBA)</h1>);
      setBreadcrumbSubText("BBA");
      setCoursedurationstate(true);
      setCourseDuration("3 Years");
      setCourseType("Residential (Optional)");
      setGraduation("BACHELOR OF");
      setContentComponent(<BBA />);
      setBrochureState(false);
      setSidenavactiveitem(1);
      setSchoolType("Management");
      setSideNavList([
        {
          expandable: false,
          item: "BACHELOR OF BUSINESS ADMINISTRATION",
          href: "/bachelor-business-administration-course-degree"
        },
        {
          expandable: false,
          item: "MASTER OF BUSINESS ADMINISTRATION",
          href: "/master-business-administrations"
        }
      ]);
    } else if (currentGraduation === "master-business-administrations") {
      setBranch("BUSINESS ADMISTRATION");
      setBannerImage(
        "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/sub8.jpg"
      );
      setPageContentTitle(<h1>MASTER OF BUSINESS ADMINISTRATION (MBA)</h1>);
      setBreadcrumbSubText("MBA");
      setCoursedurationstate(true);
      setCourseDuration("2 Years");
      setCourseType("Residential (Optional)");
      setGraduation("MASTER OF");
      setContentComponent(<MBA />);
      setBrochureState(false);
      setSidenavactiveitem(2);
      setSchoolType("Management");
      setSideNavList([
        {
          expandable: false,
          item: "BACHELOR OF BUSINESS ADMINISTRATION",
          href: "/bachelor-business-administration-course-degree"
        },
        {
          expandable: false,
          item: "MASTER OF BUSINESS ADMINISTRATION",
          href: "/master-business-administrations"
        }
      ]);
    } 
  }, []);
  
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={bannerimg}
        greentext={graduation}
        bluetext={branch}
      />
      <div className="aboutus-content">
        <SideNavigation
          title={"School Of " + schooltype}
          activeitem={sidenavactiveitem}
          activesubitem={sidenavactivesubitem}
          listitems={sidenavlist}
        />
        <div className="aboutus-content-page">
          <Breadcrumb
            level1={"School Of " + schooltype}
            level2={breadcrumbSubText}
          />
          <div className="">
            <div className="coursepage-title">{pagecontenttitle}</div>
            {coursedurationstate && (
              <div className="course-duration-section">
                <div className="course-duration-section-subclass">
                  <img
                    src={coursedurationlogo}
                    className="course-duration-logo"
                  />
                  <div className="coursepage-course-duration">
                    DURATION - {courseduration}
                  </div>
                  <img src={coursetypelogo} className="course-duration-logo" />
                  <div className="coursepage-course-duration">{coursetype}</div>
                </div>
                <div className="course-duration-section-subclass">
                  {brochureState && (
                    <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Prospectus2021-22.pdf">
                      <div className="button-white-get-brochure">
                        GET BROCHURE
                      </div>
                    </a>
                  )}
                  <a href="https://admissions.spsu.ac.in/">
                    <div className="button-white-apply-now">APPLY NOW</div>
                  </a>
                </div>
              </div>
            )}
            {contentcomponent}
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      <ContactUs />
      <Copyright />
    </>
  );
};

Course.propTypes = {
  titletext: PropTypes.string,
  duration: PropTypes.string,
  coursetype: PropTypes.string,
  applynow: PropTypes.string
};

export default Course;
