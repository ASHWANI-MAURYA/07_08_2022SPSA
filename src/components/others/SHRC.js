import greenunderlinemobile from "../../images/green-underline-mobile.png";
import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import aboutusbanner from "../../images/visionpagebanner.png";

const SHRC = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={aboutusbanner}
        greentext="SHRC"
        bluetext="SEXUAL HARASSMENT REDRESSAL CELL (SHRC)"
      />
      <div className="visionpage-title" style={{ marginTop: "40px" }}>
        Sexual Harassment Redressal Cell (SHRC)
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div className="visionpage-summary container" style={{ textAlign: "justify" }}>
        The University has a{" "}
        <b style={{ color: "blue" }}>Sexual Harassment Redressal Cell</b> to
        create a gender-sensitive environment and to deal with issues related to{" "}
        <b style={{ color: "blue" }}>sexual harassment</b>. The existence of
        this cell is publicized widely amongst the stakeholders of the
        University. The cell is headed by a woman and not less than half of its
        members are women. This cell is empowered to address any{" "}
        <b style={{ color: "blue" }}>gender-based complaints</b>.<br />
        The University sensitizes the stakeholders through{" "}
        <b style={{ color: "blue" }}>
          discussions, film screenings, poster making, essay writing
          competitions and staging of Nukkad Natak (street play)
        </b>{" "}
        to curb violence against women and also celebrates International Women’s
        Day every year. The University has{" "}
        <b style={{ color: "blue" }}>Gender Champions</b> who work to create
        awareness on the issues of gender inequality and improving the quality of
        life for women.
        <br />
        <br />
        <b style={{ color: "blue" }}>
          For any complaints / information please contact shrc@spsu.ac.in
          <br />
          <br />
        </b>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default SHRC;
