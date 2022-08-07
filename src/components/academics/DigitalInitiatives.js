import greenunderlinemobile from "../../images/green-underline-mobile.png";
import blueline from "../../images/homepage-blueline.png";
import greenline from "../../images/homepage-greenline.png";
import pinkline from "../../images/homepage-redline.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Academics.css";

const DigitalInitiatives = () => {
  return (
    <>
      <div className="visionpage-title">
        SWAYAM
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        The University has adopted twenty courses from the Swayam portal. The
        courses adopted by various departments are as follows -
        <br />
        <br />
        <div className="btech-table">
          <table className="table table-striped table-hover table-bordered">
            <thead className="bg-white-f9">
              <tr>
                <th>S. No.</th>
                <th>Name of the Course</th>
                <th>Department offering the course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">1</td>
                <td style={{ fontSize: "17px" }}>Principles of Downstream techniques in Bioprocess</td>
                <td style={{ fontSize: "17px" }} rowSpan="3" align="center">
                  BT
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">2</td>
                <td style={{ fontSize: "17px" }}>Introduction To Proteomics</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">3</td>
                <td style={{ fontSize: "17px" }}>Introduction to Mechanobiology</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">4</td>
                <td style={{ fontSize: "17px" }}>Advance Concrete Technology</td>
                <td style={{ fontSize: "17px" }} align="center">CE</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">5</td>
                <td style={{ fontSize: "17px" }}>Software Engineering</td>
                <td style={{ fontSize: "17px" }} rowSpan="3" align="center">
                  CSE
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">6</td>
                <td style={{ fontSize: "17px" }}>The Joy of Computing using Python</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">7</td>
                <td style={{ fontSize: "17px" }}>Introduction to Internet of Things</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">8</td>
                <td style={{ fontSize: "17px" }}>Introduction to Electromagnetic Theory</td>
                <td style={{ fontSize: "17px" }} rowSpan="3" align="center">
                  ECE
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">9</td>
                <td style={{ fontSize: "17px" }}>Non-Conventional Energy Resources</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">10</td>
                <td style={{ fontSize: "17px" }}>
                  Principles of Modern CDMA / MIMO / OFDM Wireless
                  Communications
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">11</td>
                <td style={{ fontSize: "17px" }}>Power System Analysis</td>
                <td style={{ fontSize: "17px" }} align="center">EE</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">12</td>
                <td style={{ fontSize: "17px" }}>Phase Diagrams in Material Science and Engineering</td>
                <td style={{ fontSize: "17px" }} align="center">ME</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">13</td>
                <td style={{ fontSize: "17px" }}>Drilling and Blasting Technology</td>
                <td style={{ fontSize: "17px" }} align="center">MNE</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">14</td>
                <td style={{ fontSize: "17px" }}>Phase Diagrams in Material Science and Engineering</td>
                <td style={{ fontSize: "17px" }} align="center">RTE</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">15</td>
                <td style={{ fontSize: "17px" }}>Biochemistry</td>
                <td style={{ fontSize: "17px" }} rowSpan="2" align="center">
                  Chemistry
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">16</td>
                <td style={{ fontSize: "17px" }}>Chemistry-II</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">17</td>
                <td style={{ fontSize: "17px" }}>English Language For Competitive Exams</td>
                <td style={{ fontSize: "17px" }} align="center">English</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">18</td>
                <td style={{ fontSize: "17px" }}>Managing Services</td>
                <td style={{ fontSize: "17px" }} align="center">Management</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">19</td>
                <td style={{ fontSize: "17px" }}>Introduction to Operations Research</td>
                <td style={{ fontSize: "17px" }} align="center">Mathematics</td>
              </tr>
              <tr>
                <td style={{ fontSize: "17px" }} align="center">20</td>
                <td style={{ fontSize: "17px" }}>Chaos, Fractals and Dynamical Systems</td>
                <td style={{ fontSize: "17px" }} align="center">Physics</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="heading">
          Students can opt for the above course and seek credit Transfer
        </h5>
        <p>
          For registration and more details of courses on SWAYAM visit{" "}
          <a href="https://www.swayam.gov.in">www.swayam.gov.in</a>
        </p>
        <br />
        <h5 className="heading">Credit Transfer Of SWAYAM Courses</h5>
        <p>
          On the recommendation of the Academic Council and approval by the
          Board of Management in its meeting held on December 12, 2018, the
          clause no. 1.04.04 of the Regulations on Academic Matters 2008
          (Amended 2018) has been amended by incorporating following:
          <br />
          <br />
          <div style={{ fontStyle: "italic", color: "blue" }}>
            “Within the minimum credit required for each programme, equivalent
            credit weightage shall be given to the students for the credits
            earned through online learning courses through SWAYAM platform in
            the credit plan of the programme. However, transfer of credits
            earned through online SWAYAM portal shall be limited to 20% of the
            total courses being offered in a particular programme in a
            semester.”
          </div>
        </p>
        <div className="coursepage-title">Swayam Prabha DTH Channels</div>
        <br />
        The university has procured and installed DD freedish in the university
        Media Lab. The SPSU Media Lab is equipped for the transmission of
        channel for students and faculty members. The SPSU Media Lab has the
        facility to store the recordings for subsequent use by the students and
        faculty members.
        <br />
        <br />
        <div style={{ fontFamily: "DINNextBold" }}>
          The following facilities are available in the SPSU Media Lab -
        </div>
        <br />
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            Development of E-Content (ref.:{" "}
            <a href="http://mhrd.gov.in/e-contents">
              http://mhrd.gov.in/e-contents
            </a>
            )
          </li>
          <li>
            Transmission of Live Channel and Live Programme (
            <a href="http://www.freedish.in/2016/08/mhrd-started-32-education-tv-channels.html">
              http://www.freedish.in/2016/08/mhrd-started-32-education-tv-channels.html
            </a>
            )
          </li>
          <li>Delivery of Lectures and Recording in Media LAB Studio</li>
          <li>Transmission of SPSU Video Live as and when required</li>
          <li>Communication through Audio-Video equipments</li>
        </ul>
        <div>
          For more details on SWAYAM Prabha Programme visit{" "}
          <a href="www.swayamprabha.gov.in">www.swayamprabha.gov.in</a>
        </div>
        <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              NATIONAL DIGITAL LIBRARY
            </div>
            <div className="digital-initiatives-card-desc">
              All the faculty members and students of the university joined the
              National Digital Library at{" "}
              <a href="https://ndl.iitkgp.ac.in/">https://ndl.iitkgp.ac.in</a>{" "}
              This will enable both the students and the faculty members to
              access more than 80 lakh digital resources at no cost. Students
              are motivated to use these resources for class
              work/assignments/tutorials during the semester.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              NATIONAL ACADEMIC DEPOSITORY
            </div>
            <div className="digital-initiatives-card-desc">
              The university has joined the National Academic Depository (NAD)
              which holds all the certificates digitally. All the certificates
              issued by the university in the past have been digitized and are
              in the process of being uploaded on NAD. For more details, please
              visit <a href="https://nad.ndml.in">https://nad.ndml.in</a>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">DIGITAL CAMPUS</div>
            <div className="digital-initiatives-card-desc">
              The processes like admissions, academic calendar, attendance,
              assessments, result declaration, administration, pay roll and
              financial processes are computerized.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">SMART CAMPUS</div>
            <div className="digital-initiatives-card-desc">
              The university has carefully laid out plans to save electricity
              and water for effective treatment and disposal of waste.
              Monitoring for effective implementation is entrusted to a team
              under the head of Administration. A solar power plant of 400kW
              capacity has been installed in the university. The plant is
              readily available for use since July 2018.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              UNNAT BHARAT ABHIYAAN
            </div>
            <div className="digital-initiatives-card-desc">
              The university has adopted three villages, namely,
              <li>Bhatewar</li>
              <li>Khalatod</li>
              <li>Mehro ka Guda</li>
              Several campaigns and activities were organised to spread
              awareness about digital payment in these villages.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              FUTURE PLANNING
            </div>
            <div className="digital-initiatives-card-desc">
              The university strives to enhance excellence in teaching and
              learning practices by adopting the opportunities provided by
              digital technologies. Accordingly, a Digital Learning Monitoring
              Cell was constituted to develop a road map for future actions and
              effective implementation of the digital initiatives undertaken.
            </div>
          </div>
        </OwlCarousel>
        <div className="digital-initiatives-card-section desktop">
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              NATIONAL DIGITAL LIBRARY
            </div>
            <div className="digital-initiatives-card-desc">
              All the faculty members and students of the university joined the
              National Digital Library at{" "}
              <a href="https://ndl.iitkgp.ac.in/">https://ndl.iitkgp.ac.in</a>{" "}
              This will enable both the students and the faculty members to
              access more than 80 lakh digital resources at no cost. Students
              are motivated to use these resources for class
              work/assignments/tutorials during the semester.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              NATIONAL ACADEMIC DEPOSITORY
            </div>
            <div className="digital-initiatives-card-desc">
              The university has joined the National Academic Depository (NAD)
              which holds all the certificates digitally. All the certificates
              issued by the university in the past have been digitized and are
              in the process of being uploaded on NAD. For more details, please
              visit <a href="https://nad.ndml.in">https://nad.ndml.in</a>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">DIGITAL CAMPUS</div>
            <div className="digital-initiatives-card-desc">
              The processes like admissions, academic calendar, attendance,
              assessments, result declaration, administration, pay roll and
              financial processes are computerized.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">SMART CAMPUS</div>
            <div className="digital-initiatives-card-desc">
              The university has carefully laid out plans to save electricity
              and water for effective treatment and disposal of waste.
              Monitoring for effective implementation is entrusted to a team
              under the head of Administration. A solar power plant of 400kW
              capacity has been installed in the university. The plant is
              readily available for use since July 2018.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              UNNAT BHARAT ABHIYAAN
            </div>
            <div className="digital-initiatives-card-desc">
              The university has adopted three villages, namely,
              <li>Bhatewar</li>
              <li>Khalatod</li>
              <li>Mehro ka Guda</li>
              Several campaigns and activities were organised to spread
              awareness about digital payment in these villages.
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              FUTURE PLANNING
            </div>
            <div className="digital-initiatives-card-desc">
              The university strives to enhance excellence in teaching and
              learning practices by adopting the opportunities provided by
              digital technologies. Accordingly, a Digital Learning Monitoring
              Cell was constituted to develop a road map for future actions and
              effective implementation of the digital initiatives undertaken.
            </div>
          </div>
        </div>
        <div className="action-plan-section">
          <img src={blueline} style={{ width: "40px" }} />
          <h5 className="heading action-plan-section-title">
            3-Year Action Plan
          </h5>
          <div className="action-plan-section-desc">
            <div className="action-plan-goal-title">Goals</div>
            <ul>
              <li>
                To implement all Digital Initiatives launched by MHRD,
                Government of INDIA
              </li>
              <li>
                To monitor the proper functioning of implemented Digital
                Initiatives
              </li>
            </ul>
            <div className="action-plan-goal-title">Steps to be undertaken</div>
            <ul>
              <li>
                Communicate the digital initiatives to all the stakeholders of
                the university
              </li>
              <li>
                Provide initial training for the newly adopted digital learning
                initiatives to all stakeholders
              </li>
              <li>
                Participation in Swayam Courses, publication on the university
                website and preparation of new courses
              </li>
              <li>
                Active use of Swayam Prabha DTH channels and National Digital
                Library by the students during class work or project
              </li>
              <li>Participate in the National Academic Depository</li>
              <li>
                Participate and monitor other digital initiatives like Digital
                Campus, Smart Campus, Clean Campus, etc.
              </li>
              <li>
                Participate in other digital initiatives such as E-Vidwan,
                E-Yantra, E-Shodh Sindhu, Talk to Teacher, Spoken Tutorial and
                FOSSEE
              </li>
              <li>
                Uploading of the Virtual Lab details on the university website
              </li>
              <li>Update IT infrastructure as per the requirements</li>
            </ul>
            <div className="action-plan-goal-title">Evaluation Plan</div>
            <ul>
              <li>
                Digital Learning Monitoring Cell will regularly monitor the
                progress of the Digital Initiatives implemented
              </li>
            </ul>
          </div>
        </div>
        <div className="strategic-plan-section">
          <img src={pinkline} style={{ width: "40px" }} />
          <h5 className="heading strategic-plan-section-title">
            7-Year Strategic Plan
          </h5>
          <div className="action-plan-section-desc">
            <div className="action-plan-goal-title">Goals</div>
            <ul>
              <li>
                To provide resources for innovative and interdisciplinary
                research
              </li>
              <li>
                Digitalization of university library - Digitalization of all
                publications of the university, namely, university magazine,
                bulletin, annual report, monographs, dissertations, THESIS ,
                term paper, internships and project reports
              </li>
            </ul>
            <div className="action-plan-goal-title">Steps to be undertaken</div>
            <ul>
              <li>
                Develop necessary facilities in the library to digitalize the
                publications of the university
              </li>
              <li>Update IT infrastructure as per the requirements</li>
              <li>
                FOSSEE- Implementation of all open source software in the
                university curriculum
              </li>
            </ul>
            <div className="action-plan-goal-title">Evaluation Plan</div>
            <ul>
              <li>
                Digital Learning Monitoring Cell will regularly monitor the
                progress of the Digital Initiatives implemented
              </li>
            </ul>
          </div>
        </div>
        <div className="vision-plan-section">
          <img src={greenline} style={{ width: "40px" }} />
          <h5 className="heading vision-plan-section-title">15-Year Vision</h5>
          <div className="action-plan-section-desc">
            <ul>
              <li>
                Encourage the faculty members to create and participate in the
                development of contemporary courses for students across the
                nation
              </li>
              <li>
                Recognize innovative ideas and encourage for conversion to a
                sustainable business / startup models
              </li>
              <li>
                Engage with staff, academicians, students and alumni across a
                range of social channels and digital communities
              </li>
              <li>
                Integrate online educational platforms with the university
                teaching pedagogy to provide a blended learning
              </li>
              <li>
                Digitalize educational content for quick and easy access and
                disseminate the learning resources and research ideas with other
                institutions
              </li>
              <li>
                Fulfill the social responsibility by transferring knowledge to
                rural people of the adopted villages
              </li>
            </ul>
          </div>
        </div>
        <div className="coursepage-title" style={{ marginBottom: "40px" }}>
          Provision of WiFi services in the campus
        </div>
        <p>
          As per the notification (F. No. 16-5/2017-TEL dated January 15, 2018)
          from MHRD, Dept. of Higher Education, Govt. of India, steps have been
          initiated to provide Wi-Fi with high speed internet to all students
          and faculty members of university, through SWAYAM platform and create
          a digital campus with Wi-Fi facilities.
        </p>
        <p>
          In the notification from MHRD, Govt. of India, it was indicated that
          the educational institutions shall provide the space and the WiFi
          facilities (optical fiber, access switches, wireless access points and
          security equipment etc.) will be provided free of cost by the
          telephone/internet service providers. The Universities will tie up
          with the telecom players, and partner with them to set up the required
          infrastructure for the project.
        </p>
        <p>
          As per the guidelines, minimum of 4 Mbps speed would be provided, and
          facility to connect two devices should be provided. The network
          requirements would be such that the students and faculty members would
          be able to directly connect with National Knowledge Network (NKN) to
          access any educational content.
        </p>
        <p>
          All the Universities are advised to request telephone/internet service
          providers to execute the WiFi facilities in the respective campus.
          Accordingly the university has requested BSNL to provide the WiFi
          facilities in the university campus.
        </p>
        <p>
          The deadline to apply for this is 15th February, 2018. Copy of the
          letter is enclosed.
        </p>
        <div className="digital-initiatives-last-section">
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/BSNL.jpg"
            className="digital-initiatives-certificate-img"
          />
          <iframe
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/syllabus/Provision%20of%20WiFi%20services%20in%20the%20campus.pdf"
            width="70%"
            className="digital-initiatives-last-section-pdf"></iframe>
        </div>
      </div>
    </>
  );
};

export default DigitalInitiatives;
