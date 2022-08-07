import greenunderlinemobile from "../../images/green-underline-mobile.png";
import blueline from "../../images/homepage-blueline.png";
import greenline from "../../images/homepage-greenline.png";
import pinkline from "../../images/homepage-redline.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../academics/Academics.css";
import FaqAns from "./Faq";

const LibraryFacilities = () => {
  return (
    <>
      <div className="visionpage-title">
        Library Facilities
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div className="examinations-section library-facilities-section">
          <div className="academics-sections-class">
            <img src={blueline} className="academics-sections-underline" />
            <h5 className="heading academics-blue-class">ABOUT LIBRARY</h5>
            <div className="academics-sections-desc">
            Sir Padampat Singhania University Library System, initially setup in 2007, consists of Central Library (both School of Engineering &amp; School of Management), which collectively supports research activities of the Institute by facilitating acquisition, organization, and dissemination of knowledge resources, and also provides library and information services to the SPSU community. The library is an integral part of the university and imparts its services to students, faculty members, and other staff members.
              <br />
              <br />
              The library is fully computerized and uses the library software{" "}
              <b>&quot;Knowledge Resource System (KRS)&quot;</b>. The
              catalogue of books and other study materials is available online.
            </div>
          </div>
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f5.png"
            className="library-facilities-section-image-right"
          />
        </div>
        <div className="examinations-section library-facilities-section">
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f1.png"
            className="library-facilities-section-image-left"
          />
          <div className="academics-sections-class">
            <img src={greenline} className="academics-sections-underline" />
            <h5 className="heading academics-green-class">COLLECTION</h5>
            <div className="academics-sections-desc">
              <ul>
                <li>
                  <b>Books:</b> The library has a rich and growing collection of books on subjects of interest and research in the university. These include the textbooks, general and reference materials, etc.
                </li>
                <li>
                  <b>Journals, Databases &amp; Periodicals:</b> The library subscribes to a wide range of scholarly journals, databases, and periodicals through its various divisions. The library also subscribes to some of the popular magazines and newspapers.
                </li>
                <li>
                  <b>Thesis:</b> The library houses the doctoral theses submitted by the research scholars of the university, both in print and electronic format.
                </li>
                <li>
                  <b>CD/VCD:</b> A good collection of CDs/VCDs is available in the library.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="examinations-section library-facilities-section">
          <div className="academics-sections-class">
            <img src={pinkline} className="academics-sections-underline" />
            <h5 className="heading academics-pink-class">DIGITAL LIBRARY</h5>
            <div className="academics-sections-desc">
              The Digital Library section is equipped with computer terminals
              facilitating access to various academic resources, viz., E-Books,
              E-journals etc. Digital Library Links:
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <a href="http://shodhganga.inflibnet.ac.in/handle/10603/191674">
                    <b>Shodhganga:</b>
                  </a>
                  SPSU has signed MoU with INFLIBNET- Shodhganga for uploading
                  SPSU awarded Ph.D thesis in Shodhganga portal.
                </li>
                <li>
                  <a href="https://ndl.iitkgp.ac.in">
                    <b>National Digital Library (NDL):</b>{" "}
                  </a>
                  National Digital Library is created by MHRD (GOI) with IIT
                  Kharagpur and it is a virtual repository of learning resources
                  with a single-window search facility SPSU is a participated
                  member with NDL.
                </li>
                <li>
                  <a href="http://Community.WorldLibrary.In/?AffiliateKey=NDL-JG1863">
                    <b>World eBook Library:</b>
                  </a>
                  The World Library Foundation is the world&apos;s largest
                  collection of Books and Articles in electronic format founded
                  in 1996. Approx. 40 Lac e-books, e-journals, e-reports are
                  available in this portal. (This link is provided by
                  INFLIBNET-eShodhsindhu)
                </li>
                <li>
                  <a href="www.southasiaarchive.com">
                    <b>South Asia Archive:</b>
                  </a>{" "}
                  The South Asia Archive is as a specialist digital platform
                  delivering global electronic access to culturally and
                  historically significant literary material produced from
                  within - and about - the Indian subcontinent.
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/lab1.png"
            className="library-facilities-section-image-right"
          />
        </div>
        <div className="coursepage-title">LIBRARY HOURS</div>
        <h5 className="heading" style={{ margin: "20px 0" }}>
          OPENING HOURS
        </h5>
        <ul>
          <li>Monday to Friday || 9.30 am to 8.00 pm</li>
          <li>Saturday &amp; Sunday ||9.30 am to 5.30 pm</li>
        </ul>
        <br />
        <h5 className="heading" style={{ margin: "20px 0" }}>
          HOLIDAYS
        </h5>
        <ul>
          <li>Library remains closed on University’s Holidays.</li>
        </ul>
        <br />
        <h5 className="heading" style={{ margin: "20px 0" }}>
          MEMBERSHIP
        </h5>
        <ul>
          <li>
            All students, faculty members and staff of the University can access
            the library.
          </li>
          <li>
            The Students, faculty and Staff Members of the University are
            required to enroll themselves as members of Library by filling
            Library Membership Form. This form is available in the Library.
          </li>
          <li>
            Use of library facilities and services implies acceptance of its
            rules and procedures.
          </li>
        </ul>
        <div className="btech-table">
          <table className="table table-striped table-hover table-bordered">
            <thead className="bg-white-f9">
              <tr>
                <th>Sl. No</th>
                <th>Member Category</th>
                <th>Entitlement for Books</th>
                <th>Loan Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <span>1</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Students</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>04</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>14 Days</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>2</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Faculty</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>10</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>30 Days</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>3</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Staff</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>02</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>14 Days</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="heading" style={{ margin: "20px 0" }}>
          Library Rules
        </h5>
        <ul>
          <li>
            To enroll as library member, new users shall fill the library
            membership form and it available in the library.
          </li>
          <li>
            Every students must carry the identity card for enter in to the
            library.
          </li>
          <li>
            Personal books and reading material are not allowed inside library.
            They have to be kept at the property counter.
          </li>
          <li>
            Reference books, latest periodicals, newspapers are not allowed to
            be issued.
          </li>
          <li>
            Sanctity of library should be respected by maintaining silence in
            and around library premises.
          </li>
          <li>
            Use of mobile phones, music players and cameras, and sleeping inside
            library is strictly prohibited.
          </li>
          <li>Eatables are not allowed inside library.</li>
          <li>
            Books and other reading material in library have to be handled with
            care. Users should not write or make any marks in the library
            material. Tearing, mutilating and dog-earing of library material are
            considered as offence.
          </li>
          <li>Library users must be in formal dress.</li>
        </ul>
        <br />
        <h5 className="heading" style={{ margin: "20px 0" }}>
          Library Services
        </h5>
        <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              MEMBER SERVICES
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>Orientation to new users</li>
                <li>Assistance in locating reading material</li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Circulation Services ( Issue / Return)
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  Reading materials can be borrowed from Circulation Desk{" "}
                </li>
                <li>
                  The borrowed materials have to be returned to the library on
                  or before the due date
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Reference &amp; Information Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  Library houses a number of reference books and also has access
                  to information resources in electronic form
                </li>
                <li>
                  Library Staff are always available for guidance and help with
                  the reference material, and also for answering the related
                  queries
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Current Awareness Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  New arrival of the library books are displayed on the display
                  rack and the list has been placed on the Notice Board and
                  communicated through email
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">Reservation</div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  A Register is maintained in the circulation desk for book
                  reservation purposes. Students can reserve their desired books
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">Reprography</div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  The Central Library offers photocopying service to all its
                  members on payment basis
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Acquisition Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  All the faculty members are entitled to recommend the required
                  books.
                </li>
                <li>
                  Students are also entitled to recommend the required books
                  through the faculty members.
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Online Public Access Catalogue (OPAC)
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  It acts as a guide between users and Library Reading
                  Materials. The user will be able to find the information about
                  bibliographical details of books and other study materials.
                  User can enter the author, title or keyword in the OPAC Window
                  and click on the search button. It helps the user to locate
                  titles on racks.
                  <br />
                  URL:{" "}
                  <a href="https://phppoets.com/library/home.php">
                    https://phppoets.com/library/home.php
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </OwlCarousel>
        <div className="digital-initiatives-card-section desktop">
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              MEMBER SERVICES
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>Orientation to new users</li>
                <li>Assistance in locating reading material</li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Circulation Services ( Issue / Return)
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  Reading materials can be borrowed from Circulation Desk{" "}
                </li>
                <li>
                  The borrowed materials have to be returned to the library on
                  or before the due date
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Reference &amp; Information Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  Library houses a number of reference books and also has access
                  to information resources in electronic form
                </li>
                <li>
                  Library Staff are always available for guidance and help with
                  the reference material, and also for answering the related
                  queries
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Current Awareness Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  New arrival of the library books are displayed on the display
                  rack and the list has been placed on the Notice Board and
                  communicated through email
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">Reservation</div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  A Register is maintained in the circulation desk for book
                  reservation purposes. Students can reserve their desired books
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">Reprography</div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  The Central Library offers photocopying service to all its
                  members on payment basis
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Acquisition Service
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  All the faculty members are entitled to recommend the required
                  books.
                </li>
                <li>
                  Students are also entitled to recommend the required books
                  through the faculty members.
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-initiatives-card">
            <div className="digital-initiatives-card-title">
              Online Public Access Catalogue (OPAC)
            </div>
            <div className="digital-initiatives-card-desc">
              <ul>
                <li>
                  It acts as a guide between users and Library Reading
                  Materials. The user will be able to find the information about
                  bibliographical details of books and other study materials.
                  User can enter the author, title or keyword in the OPAC Window
                  and click on the search button. It helps the user to locate
                  titles on racks.
                  <br />
                </li>
                URL:{" "}
                <a href="https://phppoets.com/library/home.php">
                  https://phppoets.com/library/home.php
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="coursepage-title">Library Advisory Committee</div>
        <div>
          The Library Advisory Committee consists of the HOD of each department.
          The Dean, School of Engineering is the Chairman and the Librarian is
          the Member-Secretary of the committee.
        </div>
        <br />
        <h5 className="heading" style={{ margin: "20px 0" }}>
          Following are the function:
        </h5>
        <ul>
          <li>To frame general rules for the management of the Library.</li>
          <li>
            To advise the Librarian regarding general library development.
          </li>
          <li>
            Book purchase and journal subscription/renewal is done through this
            committee.
          </li>
          <li>
            Perform such other duties as may be assigned to it by the
            university.
          </li>
        </ul>
        <FaqAns
          listanswer={[
            {
              ques: "How do I find materials in Library?",
              ans: "SPSU Library houses a variety of reading materials. You can find them as:\nBooks: You can search for books, reference & research materials through the Library Catalogue.\nThesis and Project Reports: It can be searched through the Library Catalogue.\nJournals & Databases: The library subscribes to a wide range of scholarly journals/databases from various reputed sources, which can be accessed from E-Journals & Databases."
            },
            {
              ques: "How do I access electronic devices?",
              ans: "SPSU Library has a wide range of scholarly resources. They are all IP based and can be accessed in the academic and residential campuses of the university. User can access the specified URL in digital library section of the library.\nFor more details, please contact the Librarian at pk.panigrahi@spsu.ac.in."
            }
          ]}
        />
      </div>
    </>
  );
};

export default LibraryFacilities;
