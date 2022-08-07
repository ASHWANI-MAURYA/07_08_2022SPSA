import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUsFooter from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";
import "./Others.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import SideNavigation from "../sidenavigation/SideNavigation";

const ContactUs = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="CONTACT"
        bluetext="US"
      />
      <div className="aboutus-content">
        <SideNavigation
          title="ADMISSIONS"
          activeitem={5}
          activesubitem={0}
          listitems={[
            {
              item: "ADMISSION PROCESS",
              href: "/Admissions/AdmissionProcess"
            },
            {
              item: "PROSPECTUS",
              href: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf"
            },
            {
              item: "FEES & SCHOLARSHIPS",
              href: "/Admissions/FeesStructure"
            },
            // {
            //   item: "SCHOLARSHIPS",
            //   href: "/Admissions/AllScholarships"
            // },
            {
              item: "FAQS",
              href: "/Admissions/FAQs"
            },
            {
              item: "CONTACT FOR ADMISSION",
              href: "/ContactUs"
            }
          ]}
        />
        <div className="aboutus-content-page">
          <div className="container">
            <Breadcrumb
              activepage="Vision"
              level1="ADMISSIONS"
              level2="CONTACT US"
            />

            <div className="visionpage-title" style={{ marginTop: "40px" }}>
              Contact Us
              <img
                src={greenunderlinemobile}
                className="greenunderlinemobile"
              />
            </div>
            <div
              className="visionpage-summary container"
              style={{ textAlign: "justify" }}>
              <div className="main-contactus-card-section-1">
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">Email Address</div>
                  <div className="main-contactus-card-desc">
                    head.admission@spsu.ac.in
                  </div>
                </div>
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">
                    Contact Number
                  </div>
                  <div className="main-contactus-card-desc">
                    18008896555
                    <br />
                    02957-226095-100
                  </div>
                </div>
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">Fax</div>
                  <div className="main-contactus-card-desc">02957-226094</div>
                </div>
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">
                    Placements/Internships &amp; Corporate Relations
                  </div>
                  <div className="main-contactus-card-desc">
                    himanshu.purohit@spsu.ac.in
                    <br />
                    placements@spsu.ac.in
                  </div>
                </div>
              </div>
              <div className="main-contactus-card-section-2">
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">
                    Udaipur Office
                  </div>
                  <div className="main-contactus-card-desc">
                    2, Technocrat Housing Society Near Neelkanth Mahadev, Behind
                    U. I. T. Office, Zinc Park Moti Magri Scheme, Udaipur, 313
                    3001,
                    <br />
                    Rajasthan
                  </div>
                </div>
                <div className="main-contactus-card">
                  <div className="main-contactus-card-img"></div>
                  <div className="main-contactus-card-title">Campus</div>
                  <div className="main-contactus-card-desc">
                    Sir Padampat Singhania University, Bhatewar, Udaipur, 313
                    601, Rajasthan
                    <br />
                    info@spsu.ac.in
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.168925351836!2d73.98915761537347!3d24.61786206099962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967dab8684f4033%3A0x9e4dcab2363862c!2sSir%20Padampat%20Singhania%20University!5e0!3m2!1sen!2sin!4v1579256299257!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactUsFooter />
      <Copyright />
    </>
  );
};

export default ContactUs;
