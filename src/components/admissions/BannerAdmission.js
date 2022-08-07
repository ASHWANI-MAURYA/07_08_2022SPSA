import "../banner/Banner.css";
import banner from "../../images/graduation-admission.png";
import "./Admission.css";

const BannerAdmission = (props) => {
  return (
    <>
      <div className="banner-adm-section desktop">
        {/* <img src={banner} className="banner" /> */}
        <div className="container">
          <div className="banner-admission">
            <div className="banner-left">
              <div className="banner-greens-text">Specialisation in M.Tech</div>
              <div className="banner-blues-text">The fastest way </div>
              <div className="banner-blues-text new-blue">
                to grow limitless.
              </div>
            </div>
            {/* <div className="banner-right">
              <div className="enroll-form">
                <h5 className="form-heading">ENROLL NOW</h5>
                <input type="text" placeholder="Enter Name *" />
                <input type="email" placeholder="Enter Email Address *" />
                <div className="contact-number">
                  <select className="phone-code">
                    <option>+91</option>
                    <option>+11</option>
                  </select>
                  <input
                    type="text"
                    className="mobileno"
                    placeholder="Enter Mobile Number *"
                  />
                </div>
                <input type="text" placeholder="Enter OTP *" />
                <div className="address">
                  <select className="select-opt">
                    <option>Select State</option>
                    <option>Rajasthan</option>
                    <option>Gujrat</option>
                    <option>Uttar Pradesh</option>
                  </select>
                  <select className="select-opt">
                    <option>Select City</option>
                    <option>Udaipur</option>
                    <option>Baroda</option>
                  </select>
                </div>
                <select className="select-opt" style={{ width: "100%" }}>
                  <option>Select Discipline applying for *</option>
                  <option>Engineering</option>
                  <option>Management</option>
                </select>
                <div className="coursess">
                  <select className="select-opt">
                    <option>Select Course *</option>
                    <option>B. Tech</option>
                    <option>M. Tech</option>
                    <option>Ph. D</option>
                  </select>
                  <select className="select-opt">
                    <option>Select Speciality*</option>
                    <option>Computer Science Engineering</option>
                    <option>Electronics &amp; Communication Engineering</option>
                  </select>
                </div>
                <div className="agreement">
                  <input type="checkbox" className="check" />
                  <div className="checkbox-text">
                    I agree to receive information from Sir Padampat Singhania
                    University - Udaipur
                  </div>
                </div>
                <button className="appply-for aligned-right">SUBMIT</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mobile">
        <img src={banner} className="banner" style={{ width: "50% !important" }} />
        <div className="container">
          <div className="banner-admission mobile">
            <div className="banner-left">
              <div className="banner-greens-text">Specialisation in M.Tech</div>
              <div className="banner-blues-text">The fastest way </div>
              <div className="banner-blues-text new-blue">
                to grow limitless.
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <div className="enroll-form">
            <h5 className="form-heading">ENROLL NOW</h5>
            <input type="text" placeholder="Enter Name *" />
            <input type="email" placeholder="Enter Email Address *" />
            <div className="contact-number">
              <select className="phone-code">
                <option>+91</option>
                <option>+11</option>
              </select>
              <input
                type="text"
                className="mobileno"
                placeholder="Enter Mobile Number *"
              />
            </div>
            <input type="text" placeholder="Enter OTP *" />
            <div className="address">
              <select className="select-opt">
                <option>Select State</option>
                <option>Rajasthan</option>
                <option>Gujrat</option>
                <option>Uttar Pradesh</option>
              </select>
              <select className="select-opt">
                <option>Select City</option>
                <option>Udaipur</option>
                <option>Baroda</option>
              </select>
            </div>
            <select className="select-opt" style={{ width: "100%" }}>
              <option>Select Discipline applying for *</option>
              <option>Engineering</option>
              <option>Management</option>
            </select>
            <div className="coursess">
              <select className="select-opt">
                <option>Select Course *</option>
                <option>B. Tech</option>
                <option>M. Tech</option>
                <option>Ph. D</option>
              </select>
              <select className="select-opt">
                <option>Select Speciality*</option>
                <option>Computer Science Engineering</option>
                <option>Electronics &amp; Communication Engineering</option>
              </select>
            </div>
            <div className="agreement">
              <input type="checkbox" className="check" />
              <div className="checkbox-text">
                I agree to receive information from Sir Padampat Singhania
                University - Udaipur
              </div>
            </div>
            <button className="appply-for aligned-right">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAdmission;
