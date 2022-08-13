import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useEffect } from "react";
import "react-bootstrap-submenu/dist/index.css";

const Menubar = () => {
  useEffect(() => {
    const urlParts = window.location.pathname.split("/");
    const currentPage = urlParts[urlParts.length - 2];
    if (currentPage === "Placements") {
      document
        .getElementById("basic-nav-dropdown-placement")
        .classList.add("nav-item");
      document
        .getElementById("basic-nav-dropdown-placement")
        .classList.add("show");
      document
        .getElementById("basic-nav-dropdown-placement")
        .classList.add("dropdown");
    } else if (currentPage === "Admissions") {
      document
        .getElementById("basic-nav-dropdown-admissions")
        .classList.add("nav-item");
      document
        .getElementById("basic-nav-dropdown-admissions")
        .classList.add("show");
      document
        .getElementById("basic-nav-dropdown-admissions")
        .classList.add("dropdown");
    } else if (currentPage === "Collaborations") {
      document
        .getElementById("basic-nav-dropdown-collaborations")
        .classList.add("nav-item");
      document
        .getElementById("basic-nav-dropdown-collaborations")
        .classList.add("show");
      document
        .getElementById("basic-nav-dropdown-collaborations")
        .classList.add("dropdown");
    } else if (currentPage === "CSE") {
      document
        .getElementById("basic-nav-dropdown-schools")
        .classList.add("nav-item");
      document
        .getElementById("basic-nav-dropdown-schools")
        .classList.add("show");
      document
        .getElementById("basic-nav-dropdown-schools")
        .classList.add("dropdown");
    } else if (currentPage === "AboutUs") {
      document
        .getElementById("basic-nav-dropdown-vision-mission")
        .classList.add("nav-item");
      document
        .getElementById("basic-nav-dropdown-vision-mission")
        .classList.add("show");
      document
        .getElementById("basic-nav-dropdown-vision-mission")
        .classList.add("dropdown");
    } else if (currentPage === "") {
      document
        .getElementById("basic-nav-dropdown-home")
        .classList.add("nav-item");
      document.getElementById("basic-nav-dropdown-home").classList.add("show");
      document

        .getElementById("basic-nav-dropdown-home")
        .classList.add("dropdown");
    }
  }, []);
  const onMenuClick = (evt) => {};
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" id="basic-nav-dropdown-home">
              HOME
            </Nav.Link>
            <NavDropdown
              title="ABOUT SPSU"
              id="basic-nav-dropdown-vision-mission"
              onClick={onMenuClick}
            >
              <NavDropdown.Item href="/AboutUs/VisionAndMission">
                Vision &amp; Mission
              </NavDropdown.Item>
              <DropdownSubmenu title="Leadership">
                <NavDropdown.Item href="/AboutUs/Organization/FounderChairpersonMessage">
                  Founder Chairperson&apos;s Message
                </NavDropdown.Item>
                <NavDropdown.Item href="/AboutUs/Organization/ChairpersonMessage">
                  Chairperson&apos;s Message
                </NavDropdown.Item>

                <NavDropdown.Item href="/AboutUs/Organization/PresidentMessage">
                  President&apos;s Message
                </NavDropdown.Item>
                <NavDropdown.Item href="/AboutUs/Organization/BoardOfManagement">
                  Board of Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/AboutUs/Organization/AdvisoryCouncil">
                  Advisory Council
                </NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Item href="/about-university">
                About University
              </NavDropdown.Item>
              <NavDropdown.Item href="/AboutUs/UniversityStatus">
                University Status
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SCHOOLS" id="basic-nav-dropdown-schools">
              <NavDropdown.Item>
                <DropdownSubmenu title="School of Engineering">
                  <DropdownSubmenu title="Department of Computer Science &amp; Engineering">
                    <NavDropdown.Item
                      href="/btech-in-computer-science-engineering"
                      onClick={() => {
                        window.location =
                          "/btech-in-computer-science-engineering";
                      }}
                    >
                      B. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/mtech-in-computer-science-engineering"
                      onClick={() => {
                        window.location =
                          "/mtech-in-computer-science-engineering";
                      }}
                    >
                      M. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/phD-in-computer-science-engineering"
                      onClick={() => {
                        window.location = "/phD-in-computer-science-engineering";
                      }}
                    >
                      Ph.D
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                  <DropdownSubmenu title="Department of Electronics &amp; Communication Engineering">
                    <NavDropdown.Item
                      href="/btech-in-electronics-communications-engineering"
                      onClick={() => {
                        window.location =
                          "/btech-in-electronics-communications-engineering";
                      }}
                    >
                      B. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/mtech-in-electronics-communication-engineering"
                      onClick={() => {
                        window.location =
                          "/mtech-in-electronics-communication-engineering";
                      }}
                    >
                      M. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/ECE/PhD"
                      onClick={() => {
                        window.location = "/ECE/PhD";
                      }}
                    >
                      Ph.D
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                  <DropdownSubmenu title="Department of Mechanical Engineering">
                    <NavDropdown.Item
                      href="/btech-in-mechanical-engineering"
                      onClick={() => {
                        window.location = "/btech-in-mechanical-engineering";
                      }}
                    >
                      B. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/mtech-in-mechanical-engineering"
                      onClick={() => {
                        window.location = "/mtech-in-mechanical-engineering";
                      }}
                    >
                      M. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/ME/PhD"
                      onClick={() => {
                        window.location = "/ME/PhD";
                      }}
                    >
                      Ph.D
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                  <DropdownSubmenu title="Department of Mining Engineering">
                    <NavDropdown.Item
                      href="/btech-in-mining-engineering"
                      onClick={() => {
                        window.location = "/btech-in-mining-engineering";
                      }}
                    >
                      B. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/mtech-degree-in-mining-engineering"
                      onClick={() => {
                        window.location = "/mtech-degree-in-mining-engineering";
                      }}
                    >
                      M. Tech
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/Mining/PhD"
                      onClick={() => {
                        window.location = "/Mining/PhD";
                      }}
                    >
                      Ph.D
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                  <NavDropdown.Item
                    href="/Physics"
                    onClick={() => {
                      window.location = "/Physics";
                    }}
                  >
                    Department of Physics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/Chemistry"
                    onClick={() => {
                      window.location = "/Chemistry";
                    }}
                  >
                    Department of Chemistry
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/Mathematics"
                    onClick={() => {
                      window.location = "/Mathematics";
                    }}
                  >
                    Department of Mathematics
                  </NavDropdown.Item>
                </DropdownSubmenu>
                <DropdownSubmenu title="School of Management">
                  <DropdownSubmenu title="Department of Management">
                    <NavDropdown.Item
                      href="/bachelor-business-administration-course-degree"
                      onClick={() => {
                        window.location =
                          "/bachelor-business-administration-course-degree";
                      }}
                    >
                      Bachelor of Business Administration (BBA)
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="master-business-administrations"
                      onClick={() => {
                        window.location = "/master-business-administrations";
                      }}
                    >
                      Master of Business Administration (MBA)
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/PhDInManagement">
                      Ph.D in Management
                    </NavDropdown.Item> */}
                  </DropdownSubmenu>
                </DropdownSubmenu>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/Collaborations/IndustrialCollaborations"
              id="basic-nav-dropdown-collaborations"
            >
              INDUSTRIAL COLLABORATIONS
            </Nav.Link>
            <NavDropdown title="ACADEMICS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Academics/AcademicRegulations">
                Academic Regulations
              </NavDropdown.Item>
              <NavDropdown.Item href="/Academics/AcademicCalendar">
                Academic Calendar
              </NavDropdown.Item>
              <NavDropdown.Item href="/Academics/OurFaculty">
                Our Faculty
              </NavDropdown.Item>
              <NavDropdown.Item href="/Academics/Mentorship">
                {/* <NavDropdown.Item href="/xyz"> */}
                Mentorship
              </NavDropdown.Item>
              <NavDropdown.Item href="/Academics/ProjectEndeavour">
                {/* <NavDropdown.Item href="/xyz"> */}
                Project Endeavour
              </NavDropdown.Item>
              <NavDropdown.Item href="/Academics/SWAYAM">
                {/* <NavDropdown.Item href="/xyz"> */}
                SWAYAM
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/labs.pdf"
              >
                {/* <NavDropdown.Item href="/xyz"> */}
                Departmental Laboratories
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD%20student%20list_2020.pdf"
              >
                {/* <NavDropdown.Item href="/xyz"> */}
                Registered PhD Scholars
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ADMISSIONS" id="basic-nav-dropdown-admissions">
              <NavDropdown.Item href="/Admissions/AdmissionProcess">
                Admission Process
              </NavDropdown.Item>
              <NavDropdown.Item href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf">
                Prospectus
              </NavDropdown.Item>
              <NavDropdown.Item href="/Admissions/FeesStructure">
                Fees &amp; Scholarships
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/Admissions/AllScholarships">
                Scholarships
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/Admissions/FAQs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="/ContactUs">
                Contact for Admission
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FACILITIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Facilities/AcademicFacilities">
                {/* <NavDropdown.Item href="/xyz"> */}
                Academic Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities/LibraryFacilities">
                {/* <NavDropdown.Item href="/xyz"> */}
                Library Facility
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities/ResidentialFacilities">
                {/* <NavDropdown.Item href="/xyz"> */}
                Residential Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities/CampusFacilities">
                {/* <NavDropdown.Item href="/xyz"> */}
                Campus Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities/SportsFacilities">
                {/* <NavDropdown.Item href="/xyz"> */}
                Sports Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities/SolarPowerSystem">
                {/* <NavDropdown.Item href="/xyz"> */}
                Solar Power System
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PLACEMENT" id="basic-nav-dropdown-placement">
              <NavDropdown.Item href="/Placements/TrainingPlacementCell">
                T &amp; P Cell
              </NavDropdown.Item>
              <NavDropdown.Item href="/Placements/PlacementRecord">
                Placement Records
              </NavDropdown.Item>
              <NavDropdown.Item href="/Placements/Testimonials">
                Testimonials
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/Placements/Internships">
                Internship &amp; Training
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/Placements/SPSUAlumni">
                SPSU Alumni
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="RESEARCH" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Research/ResearchPolicy">
                Research Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/CodeOfEthics">
                Code of Ethics
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/ResearchProjects">
                Research Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/ResearchArticles">
                Research Articles
              </NavDropdown.Item>
              <NavDropdown.Item
                href="http://shodhganga.inflibnet.ac.in/handle/10603/191674/simple-search?filterquery=English&amp;filtername=language&amp;filtertype=equals"
                target="_blank"
              >
                PhD Thesis@Shodhganga
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD-student-list-Existing-(as-of-Oct-12-2021).pdf"
                target="_blank"
              >
                PhD Scholars
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/ResearchFellowship">
                SPSU Research Fellowship
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/BusinessIncubator">
                Business Incubator
              </NavDropdown.Item>
              <NavDropdown.Item href="/Research/AboutFullbright">
                About Fulbright
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NAAC" id="basic-nav-dropdown">
              <NavDropdown.Item href="/NAACVisit">NAAC Visit</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="news" id="basic-nav-dropdown">
              <NavDropdown.Item href="/news">news Visit</NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="/InternationalAffairs">
              DIVISION OF INTERNATIONAL AFFAIRS
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        {/* </Container> */}
      </div>
    </Navbar>
  );
};

export default Menubar;
