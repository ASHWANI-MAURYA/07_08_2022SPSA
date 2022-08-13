import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import "./CareerOpportunities.css";
import image10 from "../../images/image-10.jpg";
import image11 from "../../images/image-11.jpg";
import image12 from "../../images/image-12.jpg";
import image13 from "../../images/image-13.jpg";
import image14 from "../../images/image-14.jpg";
import image15 from "../../images/image-15.jpg";
import image16 from "../../images/image-16.jpg";
import image17 from "../../images/image-17.jpg";
import image18 from "../../images/image-18.jpg";
import image19 from "../../images/image-19.jpg";
import { Helmet } from "react-helmet";
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
        <div >
          <h2 className="heading2">Session on Career Opportunities in the Armed Forces held at SPSU on July 27, 2022</h2>
        </div>
      </div>
      <div className="graph">
        <p>Colonel Sanjay Sinha, Head - Education Vertical, JK Cement Ltd delivered a session on ‘Career Opportunities in the Armed Forces’ on July 27, 2022 at Sir Padampat Singhania University, Udaipur. Colonel Sinha with his vast experience of 34 years in the Armed Forces and the corporate sector shared interesting and challenging insights from his life’s journey. He guided the students through real-time experiences and urged them to be passionate about whatever they are pursuing in their lives. He discussed the Ranks of Indian army and gave information about the insignia worn by the different forces and stated their significance as well. He briefed the aspiring youth about the Graduate Technical Entry programs and Officer Entry recruitments in the Indian Army through various exams like NDA, IMA, CDS etc. conducted by the UPSC. He also explained various avenues and procedures for women to join the Indian Army. He clarified the doubts and myths of the young minds about the profession and motivated them to choose a promising and prestigious career in armed forces that is full of excitement, adventure and challenges. The candid and interactive session was appreciated by the students and the SPSU fraternity.</p>
      </div>
      <div style={{ margin: 22 }}>
        <div style={{ display: "flex", justifyContent: " space-between " }} className="mobile" >
          <img src={image10} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image11} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image12} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image13} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: " space-between ", marginTop: "2rem" }} className="mobile"
         >
          <img src={image14} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image15} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image16} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image17} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", marginTop: "2rem", justifyContent: " center " }} className="mobile" >
          <img src={image18} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image19} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
      </div>
      <div style={{ margin: 22 }} className="desktop">
        <div style={{ display: "flex", justifyContent: " space-between " }} >
          <img src={image10} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image11} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image12} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image13} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: " space-between ", marginTop: "2rem" }} 
         >
          <img src={image14} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image15} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image16} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image17} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
        <div style={{ display: "flex", marginTop: "2rem", justifyContent: " center " }} >
          <img src={image18} style={{ width: "300px", height: "auto", margin: 5 }} />
          <img src={image19} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};
export default news;
