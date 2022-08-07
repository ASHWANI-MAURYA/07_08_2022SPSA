import "./Header.css";
import phone from "../../images/phone.png";
import info from "../../images/info.png";
import greaterthan from "../../images/greater-than.png";

const Greybar = () => {
  return (
    <div className="greybar-section">
      <div className="container">
        <div className="greybar">
          <div className="contactus">
            <img alt="phone" src={phone} className="iconclass" />
            <div>1800 8896 555</div>
          </div>
          <div className="contactus">
            <img alt="info" src={info} className="iconclass" />
            <a style={{ color: "#000" }} href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/file/SOP_%20SPSU_Udaipur_Latest.pdf"><div>SPSU COVID-19 Response&nbsp;&nbsp;</div></a>
            <img alt="right" src={greaterthan} style={{ width: "5px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greybar;
