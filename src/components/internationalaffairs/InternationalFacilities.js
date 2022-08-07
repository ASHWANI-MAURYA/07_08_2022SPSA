import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blueline from "../../images/homepage-blueline.png";
import greenline from "../../images/homepage-greenline.png";
import pinkline from "../../images/homepage-redline.png";
import yellowline from "../../images/yellow-line.png";
import "./InternationalAffairs.css";

const InternationalFacilities = () => {
  return (
    <>
      <div className="container">
        <h3 className="international-campus-page-heading">
          Facilities provided to international students
        </h3>
        <div className="international-facilities-section">
          <div className="academics-sections-class">
            <img src={blueline} className="academics-sections-underline" />
            <h5 className="heading academics-blue-class">Pre Visa Facility</h5>
            <div className="academics-sections-desc">
              <ul>
                <li>
                  SPSU helps students to get their visa timely from Indian
                  Embassy/High Commission.
                </li>
                <li>
                  Our Counselors guide the students with all the required
                  documents and formalities to avoid delay and chaos at the end.
                </li>
                <li>
                  Our Counselors are well acquainted about the necessary steps/
                  documents/ stages of issuing a visa so students do not face
                  any issues while getting their visa.
                </li>
                <li>
                  Getting all the standard medical check ups done before leaving
                  the home country.
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Pre-Visa-Facility.jpg"
            className="library-facilities-section-image-right"
          />
        </div>
        <div className="international-facilities-section">
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Post-Visa-Arrival.jpg"
            className="library-facilities-section-image-left"
          />
          <div className="academics-sections-class">
            <img src={greenline} className="academics-sections-underline" />
            <h5 className="heading academics-green-class">Post-Visa Arrival</h5>
            <div className="academics-sections-desc">
              <ul>
                <li>
                  All International students need to get registered in The
                  Foreigner’s Regional Registration Office (FRRO) within 14 days
                  of arrival in India. Our Counselors help the students to
                  complete this process smoothly and within the time period.
                </li>
                <li>
                  Register with the University International Office for the
                  pickup service from the Airport at least fifteen days in
                  advance and provide the complete flight details to the
                  students.
                </li>
                <li>
                  Our Counselors help the students with a list of all the
                  pre-requisite documents and declarations to be carried along
                  before leaving the home country.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="international-facilities-section">
          <div className="academics-sections-class">
            <img src={pinkline} className="academics-sections-underline" />
            <h5 className="heading academics-pink-class">Transport Support</h5>
            <div className="academics-sections-desc">
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  SPSU provides free pickup and drop facilities to the
                  international students directly from the airport to the
                  University.
                </li>
                <li>
                  Students are provided with the contact details and basic
                  information about the counselors, in case of any emergency or
                  local help during arrival.
                </li>
                <li>
                  Help the students carrying dutiable articles or high value
                  articles to be entered on the tourist baggage re-export form.
                </li>
                <li>
                  Help the students to fill and submit the arrival card properly
                  handed over to them before boarding on the flight.
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Transport-Support.jpg"
            className="library-facilities-section-image-right"
          />
        </div>
        <div className="international-facilities-section">
        <img
            src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/international-affairs/Support-on-completion-of-government-formalities.jpg"
            className="library-facilities-section-image-left"
          />
          <div className="academics-sections-class">
            <img src={yellowline} className="academics-sections-underline" />
            <h5 className="heading academics-blue-class" style={{ color: "#c3970f" }}>
              Support on completion of government formalities
            </h5>
            <div className="academics-sections-desc">
              <ul>
                <li>
                  Our Counselors help the students to get themselves registered
                  with FRRO within 14 days of arrival.
                </li>
                <li>
                  Our Counselors also help the students in timely completing all
                  the other documentation and legal formalities after their
                  arrival.
                </li>
                <li>
                  Getting various cheques and forms cleared that requires
                  approval from the local government.
                </li>
                <li>
                  Assisting the students in completing the mandatory health
                  check-ups and getting medical certificates on time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternationalFacilities;
