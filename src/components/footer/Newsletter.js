import "./Footer.css";

const Newsletter = () => {
  return (
    <div className="newsletterpane">
      <div className="container">
        <div className="copyrightbar newsletterpane-container">
          <div className="contactus-left-section newsletter-left">
            <h3 className="newsletter-title">
              Subscribe to our newsletter to get up to date with SPSU
            </h3>
          </div>
          <div className="contactus-right-section newsletter-right">
            <input
              placeholder="Enter Email Address"
              className="newsletter-inputbox"
            />
            <button className="button-blue subscribe">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
