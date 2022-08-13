import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import "./news.css";
import logo from "../../images/news-updates-1-mobile.jpg";
import spsulog from "../../images/spsulog.jpg";
import { Helmet } from "react-helmet";
const news = () => {
  return (
    <><Helmet>
    <title>RAINBOW Consortium Meeting on July 12-13, 2022 at SPSU | JK Cement&apos;s SPSU</title>
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
      <BannerSubPage greentext="RAINBOW" bluetext="Consortium Meeting" />
      <div className="container">
      <div style={{ display: "flex", justifyContent: " space-between " }} >
        <div className="mobile" >
      <img src={logo} style={{ width: "300px", height: "auto", margin: 5 }} />
      <img src={spsulog} style={{ width: "300px", height: "auto", margin: 5 }} />
        </div>
      <img src={logo} style={{ width: "300px", height: "auto", margin: 5 }} className="desktop" />
      <img src={spsulog} style={{ width: "300px", height: "auto", margin: 5 }} className="desktop"/>
      </div>
      <div >
      <h2 className="heading2">RAINBOW Consortium Meeting on July 12-13, 2022 at SPSU</h2>
      </div>
      </div>
      <div className="graph">
        <p>The RAINBOW Consortium Meeting was held at Sir Padampat Singhania University, Udaipur on July 12-13, 2022. SPSU ERASMUS + European Union funded multilateral project RAINBOW (Realizing Aspirations, Interests and Brilliance of Young Women) that focuses on gender mainstreaming, empowering of women and establishing of Rainbow Career Counselling center at the University. The partner Universities FH JOANNEUM University of Applied Sciences (AUSTRIA), University of Jyväskylä (FINLAND), INCOMA (SPAIN), Birla Institute of Management Technology (INDIA), NIRMA University (INDIA) participated in the Meeting. The Management team of SPSU - Professor (Dr.) Padmakali Banerjee, the honourable Vice-Chancellor (President) Professor (Dr.) Sadananda Prusty (Dean -School of Management) and Professor (Dr.) Sanjay Mishra (Registrar) welcomed the dignitaries and put forth their ideas and concept on sustainability of the Rainbow Counselling Centres. Professor Banerjee in her interaction with the august gathering emphasized on initiating the immersion programmes with the industry and partner Universities, organizing International Conferences, taking up with Energy conservation projects and projects connecting with the society through various public welfare ventures.  The honourable Vice Chancellor SPSU Professor (Dr.) Padmakali Banerjee in also announced the Second International Rainbow Conference - 2023. The members presented their ideas regarding various collaborations at the international and national level to promote and empower the Rainbow Career Counselling Centers and provide them with more opportunities for growth and capacity building. The EU project was carried out very successfully at all the partner Universities and to take it to the next level symposiums, inter-regional meetings and social outreach programmes were suggested.  To understand the actual functioning of the NGO, a field visit was organised by SPSU. The team visited Namrata Primary Women Multipurpose Cooperative Society Limited was organised by SPSU on July 13, 2022. The visit provided a hands-on experience and gave an understanding about the empowerment of the rural women and their contribution to the society.</p>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};
export default news;
