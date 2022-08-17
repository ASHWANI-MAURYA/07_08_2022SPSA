import "./MobileNavBar.css";
import { Accordion } from "react-bootstrap";
const MobileNavBar = (props) => {
  return (
    <>
      <div className="mobile-nav-bar mobile">
        <div className="container">
          <Accordion>
            <a href="/">
              <div className="accordion-button not-expandable">Home</div>
            </a>
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Us</Accordion.Header>
              <Accordion.Body>
                <a href="/AboutUs/VisionAndMission">
                  <div className="accordion-button not-expandable">
                    Vision &amp; Mission
                  </div>
                </a>
                <Accordion>
                  <Accordion.Header>Leadership</Accordion.Header>
                  <Accordion.Body>
                    <a href="/AboutUs/Organization/FounderChairpersonMessage">
                      <div className="accordion-button not-expandable">
                        Founder Chairperson&apos;s Message
                      </div>
                    </a>
                    <a href="/AboutUs/Organization/ChairpersonMessage">
                      <div className="accordion-button not-expandable">
                        Chairperson&apos;s Message
                      </div>
                    </a>
                    <a href="/AboutUs/Organization/PresidentMessage">
                      <div className="accordion-button not-expandable">
                        President&apos;s Message
                      </div>
                    </a>
                    <a href="/AboutUs/Organization/BoardOfManagement">
                      <div className="accordion-button not-expandable">
                        Board of Management
                      </div>
                    </a>
                    <a href="/AboutUs/Organization/AdvisoryCouncil">
                      <div className="accordion-button not-expandable">
                        Advisory Council
                      </div>
                    </a>
                  </Accordion.Body>
                </Accordion>
                <a href="/AboutUs/AboutUniversity">
                  <div className="accordion-button not-expandable">
                    About University
                  </div>
                </a>
                <a href="/AboutUs/UniversityStatus">
                  <div className="accordion-button not-expandable">
                    University Status
                  </div>
                </a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Schools</Accordion.Header>
              <Accordion.Body>
                <Accordion>
                  <Accordion.Header>School of Engineering</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Header>
                        Department of Computer Science &amp; Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="/btech-in-computer-science-engineering">
                          <div className="accordion-button not-expandable">
                            B.Tech
                          </div>
                        </a>
                        <a href="/mtech-in-computer-science-engineering">
                          <div className="accordion-button not-expandable">
                            M.Tech
                          </div>
                        </a>
                        <a href="/phD-in-computer-science-engineering">
                          <div className="accordion-button not-expandable">
                            Ph.D
                          </div>
                        </a>
                      </Accordion.Body>
                    </Accordion>
                    <Accordion>
                      <Accordion.Header>
                        Department of Electronics &amp; Communication
                        Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="/btech-in-electronics-communications-engineering">
                          <div className="accordion-button not-expandable">
                            B.Tech
                          </div>
                        </a>
                        <a href="/mtech-in-electronics-communication-engineering">
                          <div className="accordion-button not-expandable">
                            M.Tech
                          </div>
                        </a>
                        <a href="/phD-in-electronics-and-communication-engineering">
                          <div className="accordion-button not-expandable">
                            Ph.D
                          </div>
                        </a>
                      </Accordion.Body>
                    </Accordion>
                    <Accordion>
                      <Accordion.Header>
                        Department of Mechanical Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="/btech-in-mechanical-engineering">
                          <div className="accordion-button not-expandable">
                            B.Tech
                          </div>
                        </a>
                        <a href="/mtech-in-mechanical-engineering">
                          <div className="accordion-button not-expandable">
                            M.Tech
                          </div>
                        </a>
                        <a href="/phD-in-mechanical-engineering">
                          <div className="accordion-button not-expandable">
                            Ph.D
                          </div>
                        </a>
                      </Accordion.Body>
                    </Accordion>
                    <Accordion>
                      <Accordion.Header>
                        Department of Mining Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="/btech-in-mining-engineering">
                          <div className="accordion-button not-expandable">
                            B.Tech
                          </div>
                        </a>
                        <a href="/mtech-degree-in-mining-engineering">
                          <div className="accordion-button not-expandable">
                            M.Tech
                          </div>
                        </a>
                        <a href="/phD-in-mining-engineering">
                          <div className="accordion-button not-expandable">
                            Ph.D
                          </div>
                        </a>
                      </Accordion.Body>
                    </Accordion>
                    <a href="/Physics">
                      <div className="accordion-button not-expandable">
                        Department of Physics
                      </div>
                    </a>
                    <a href="/Chemistry">
                      <div className="accordion-button not-expandable">
                        Department of Chemistry
                      </div>
                    </a>
                    <a href="/Mathematics">
                      <div className="accordion-button not-expandable">
                        Department of Mathematics
                      </div>
                    </a>
                  </Accordion.Body>
                </Accordion>
                <Accordion>
                  <Accordion.Header>School of Management</Accordion.Header>
                  <Accordion.Body>
                    <Accordion>
                      <Accordion.Header>
                        Department of Management
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="/bachelor-business-administration-course-degree">
                          <div className="accordion-button not-expandable">
                            BBA
                          </div>
                        </a>
                        <a href="/master-business-administrations">
                          <div className="accordion-button not-expandable">
                            MBA
                          </div>
                        </a>
                      </Accordion.Body>
                    </Accordion>
                  </Accordion.Body>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <a href="/Collaborations/IndustrialCollaborations">
            <div className="accordion-button not-expandable">
              Industry Collaboration
            </div>
          </a>
          <Accordion>
            <Accordion.Header>Academics</Accordion.Header>
            <Accordion.Body>
              <a href="/Academics/AcademicRegulations">
                <div className="accordion-button not-expandable">
                  Academic Regulations
                </div>
              </a>
              <a href="/Academics/AcademicCalendar">
                <div className="accordion-button not-expandable">
                  Academic Calendar
                </div>
              </a>
              <a href="/Academics/OurFaculty">
                <div className="accordion-button not-expandable">
                  Our Faculty
                </div>
              </a>
              <a href="/Academics/Mentorship">
                <div className="accordion-button not-expandable">
                  Mentorship
                </div>
              </a>
              <a href="/Academics/ProjectEndeavour">
                <div className="accordion-button not-expandable">
                  Project Endeavour
                </div>
              </a>
              <a href="/Academics/SWAYAM">
                <div className="accordion-button not-expandable">SWAYAM</div>
              </a>
              <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/labs.pdf">
                <div className="accordion-button not-expandable">
                  Departmental Laboratories
                </div>
              </a>
              <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD%20student%20list_2020.pdf">
                <div className="accordion-button not-expandable">
                  Registered PhD Scholars
                </div>
              </a>
            </Accordion.Body>
          </Accordion>
          <Accordion>
            <Accordion.Header>Admissions</Accordion.Header>
            <Accordion.Body>
              <a href="/Admissions/AdmissionProcess">
                <div className="accordion-button not-expandable">
                  Admission Process
                </div>
              </a>
              <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf">
                <div className="accordion-button not-expandable">
                  Prospectus
                </div>
              </a>
              <a href="/Admissions/FeesStructure">
                <div className="accordion-button not-expandable">
                  Fees &amp; Scholarships
                </div>
              </a>
              {/* <a href="/Admissions/AllScholarships">
                <div className="accordion-button not-expandable">
                  Scholarships
                </div>
              </a> */}
              <a href="/Admissions/FAQs">
                <div className="accordion-button not-expandable">FAQs</div>
              </a>
              <a href="/ContactUs">
                <div className="accordion-button not-expandable">
                  Contact for Admission
                </div>
              </a>
            </Accordion.Body>
          </Accordion>
          <Accordion>
            <Accordion.Header>Facilities</Accordion.Header>
            <Accordion.Body>
              <a href="/Facilities/AcademicFacilities">
                <div className="accordion-button not-expandable">
                  Academic Facilities
                </div>
              </a>
              <a href="/Facilities/LibraryFacilities">
                <div className="accordion-button not-expandable">
                  Library Facilities
                </div>
              </a>
              <a href="/Facilities/ResidentialFacilities">
                <div className="accordion-button not-expandable">
                  Residential Facilities
                </div>
              </a>
              <a href="/Facilities/CampusFacilities">
                <div className="accordion-button not-expandable">
                  Campus Facilities
                </div>
              </a>
              <a href="/Facilities/SportsFacilities">
                <div className="accordion-button not-expandable">
                  Sports Facilities
                </div>
              </a>
              <a href="/Facilities/SolarPowerSystem">
                <div className="accordion-button not-expandable">
                  Solar Power System
                </div>
              </a>
            </Accordion.Body>
          </Accordion>
          <Accordion>
            <Accordion.Header>Placement</Accordion.Header>
            <Accordion.Body>
              <a href="/Placements/TrainingPlacementCell">
                <div className="accordion-button not-expandable">
                  T &amp; P Cell
                </div>
              </a>
              <a href="/Placements/PlacementRecord">
                <div className="accordion-button not-expandable">
                  Placement Record
                </div>
              </a>
              <a href="/Placements/Testimonials">
                <div className="accordion-button not-expandable">
                  Testimonials
                </div>
              </a>
              {/* <a href="/Placements/Internships">
                <div className="accordion-button not-expandable">
                  Internship &amp; Training
                </div>
              </a> */}
              <a href="/Placements/SPSUAlumni">
                <div className="accordion-button not-expandable">
                  SPSU Alumni
                </div>
              </a>
            </Accordion.Body>
          </Accordion>
          <Accordion>
            <Accordion.Header>Research</Accordion.Header>
            <Accordion.Body>
              <a href="/Research/ResearchPolicy">
                <div className="accordion-button not-expandable">
                  Research Policy
                </div>
              </a>
              <a href="/Research/CodeOfEthics">
                <div className="accordion-button not-expandable">
                  Code of Ethics
                </div>
              </a>
              <a href="/Research/ResearchProjects">
                <div className="accordion-button not-expandable">
                  Research Projects
                </div>
              </a>
              <a href="/Research/ResearchArticles">
                <div className="accordion-button not-expandable">
                  Research Articles
                </div>
              </a>
              <a href="http://shodhganga.inflibnet.ac.in/handle/10603/191674/simple-search?filterquery=English&amp;filtername=language&amp;filtertype=equals">
                <div className="accordion-button not-expandable">
                  PhD Thesis@Shodhganga
                </div>
              </a>
              <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/PhD-student-list-Existing-(as-of-Oct-12-2021).pdf">
                <div className="accordion-button not-expandable">
                  PhD Scholars
                </div>
              </a>
              <a href="/Research/ResearchFellowship">
                <div className="accordion-button not-expandable">
                  SPSU Research Fellowship
                </div>
              </a>
              <a href="/Research/BusinessIncubator">
                <div className="accordion-button not-expandable">
                  Business Incubator
                </div>
              </a>
              <a href="/Research/AboutFullbright">
                <div className="accordion-button not-expandable">
                  About Fulbright
                </div>
              </a>
            </Accordion.Body>
          </Accordion>
          <Accordion>
            <Accordion.Header>NAAC</Accordion.Header>
            <Accordion.Body>
              <a href="/NAACVisit">
                <div className="accordion-button not-expandable">
                  NAAC Visit
                </div>
              </a>
            </Accordion.Body>
            {/* <Accordion.Body>
              <a href="/news">
                <div className="accordion-button not-expandable">
                  News Visit
                </div>
              </a>
            </Accordion.Body> */}
          </Accordion>
          {/* <a href="/InternationalAffairs">
            <div className="accordion-button not-expandable">
              Division of International Affairs
            </div>
          </a> */}
          {/* <div className="accordion-button not-expandable">
            Syllabus for SPSAT 2021
          </div> */}
          <a href="/SHRC">
            <div className="accordion-button not-expandable">SHRC</div>
          </a>
          <a href="/Gallery">
            <div className="accordion-button not-expandable">Gallery</div>
          </a>
          <a href="/ContactUs">
            <div className="accordion-button not-expandable">Contact Us</div>
          </a>
          {/* <a href="/DownloadForm">
            <div className="accordion-button not-expandable">
              Download Application Form
            </div>
          </a> */}
          <a href="/NIRF">
            <div className="accordion-button not-expandable">NIRF</div>
          </a>
          <a href="/">
            <div className="accordion-button not-expandable">IQAC</div>
          </a>
          <a href="/NAD">
            <div className="accordion-button not-expandable">NAD</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
