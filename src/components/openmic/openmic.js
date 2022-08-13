import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import "./openmic.css";
import image10 from "../../images/image-1.jpg";
import image11 from "../../images/image-2.jpg";
import image12 from "../../images/image-3.jpg";
import image13 from "../../images/image-4.jpg";
import image14 from "../../images/image-5.jpg";
import image15 from "../../images/image-6.jpg";
import image16 from "../../images/image-7.jpg";
import image17 from "../../images/image-8.jpg";
import image18 from "../../images/image-9.jpg";
import { Helmet } from "react-helmet";
import spsulog from "../../images/spsulog.jpg";
const news = () => {
  return (
    <><Helmet>
      <title>Session on Career Opportunities in the Armed Forces held at SPSU on July 27, 2022| JK Cement&apos;s SPSU</title>
      {/* <meta name="description" content="SPSU Udaipur ranks among Top 100 Universities in India: We are offering undergraduate, Ph.D., courses in Management (BBA/MBA) and Engineering (B.Tech/M.Tech). Visit to know more." />
    <meta
      name="keywords"
      content="best engineering colleges in rajasthan
      best M tech colleges in rajasthan"
    /> */}
    </Helmet>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage greentext="Session on" bluetext="Career Opportunities" />
      <div className="container">
      <img src={spsulog} style={{ width: "400px", height: "auto" }} />
        <div >
          <p>An <b>Open Mic</b> event was conducted by the students of SPSU on July 15th, 2022. A lot of enthusiasm was showcased by them through playing the instruments, wonderful singing and dancing performances. The energy during the event was witnessed through the great performances and cheering in the audience.</p>
        </div>
      </div>
      <div style={{ margin: 22 }}>
        <div style={{ display: "flex", justifyContent: " space-between " }} className="mobile">
          <img src={image10} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image11} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image12} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image13} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: " space-between ", marginTop: "2rem" }} className="mobile">
          <img src={image14} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image15} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image16} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image17} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", marginTop: "2rem", justifyContent: " center " }} className="mobile" >
          <img src={image18} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
      </div>
      <div style={{ margin: 22 }}>
        <div style={{ display: "flex", justifyContent: " space-between " }} className="desktop" >
          <img src={image10} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image11} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image12} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image13} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: " space-between ", marginTop: "2rem" }} className="desktop">
          <img src={image14} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image15} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image16} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image17} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", marginTop: "2rem", justifyContent: " center " }} className="desktop">
          <img src={image18} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};
export default news;
