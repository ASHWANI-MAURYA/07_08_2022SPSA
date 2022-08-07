import "./Footer.css";

const Copyright = () => {
  return (
    <div className="greybarfooter">
      <div className="container">
        <div className="copyrightbar">
          <div className="logosection desktop">
            <span id="copyright">COPYRIGHT © 2022 SPSU UDAIPUR RAJASTHAN</span>
            <span id="copyrightmobile">
              © Sir Padampat Singhania University, Udaipur
            </span>
            
          </div>
          <a className="enquire-now" href="https://spsu.ac.in/admissions2022/index.php#scroll1">
            <div className="mobile">ENQUIRE NOW</div>
          </a>
          <a className="enquire-now" href="https://spsu.ac.in/admissions2022/tel:+917353941411">
            <div className="mobile">CALL NOW</div>
          </a>
          <div className="copyrightbargrey">
            <ul type="none">
              <a
                className="footer-links"
                href="/TermsAndConditions"
              >
                <li>TERMS &amp; CONDITIONS</li>
              </a>
              <a className="footer-links" href="/RTI">
                <li>RTI</li>
              </a>
              <a className="footer-links" href="/Gallery">
                <li>GALLERY</li>
              </a>
              <a className="footer-links" href="/ContactUs">
                <li>CONTACT US</li>
              </a>
              <a
                className="footer-links"
                href="/DownloadForm"
              >
                <li>DOWNLOAD FORM</li>
              </a>
              <a className="footer-links" href="https://spsu.ac.in/admissions2022/index.php">
                <li>APPLY ONLINE</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
