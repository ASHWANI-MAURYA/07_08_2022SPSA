import Statistics from "./Statistics";
import TopPlacements from "./TopPlacements";
import TopRecruiters from "./TopRecruiters";
import { useEffect, useState } from "react";
import Hitesh from "../../../images/Hitesh.jpeg";
import Paluvatla from "../../../images/Paluvatla.jpeg";
import Mohit from "../../../images/Mohit.jpeg";
import Vanga from "../../../images/Vanga.jpeg";
import Lakkireddy from "../../../images/Lakkireddy.jpeg";
import Rakshit from "../../../images/Rakshit.jpeg";
import Sumanth from "../../../images/Sumanth.jpeg";
import Aniket from "../../../images/Aniket.jpeg";
import Guruguri from "../../../images/Guruguri.jpeg";
import Pola from "../../../images/Pola.jpeg";
import Revanth from "../../../images/Revanth.jpeg";
import Saurabh from "../../../images/Saurabh.jpeg";
import Ashish from "../../../images/01. Ashish.jpeg";
import Vaibhav from "../../../images/02. Vaibhav.jpeg";
import Suguri from "../../../images/03. Suguri.jpeg";
import Virendra from "../../../images/01. Virendra.jpeg";
import Inuganti from "../../../images/02. Inuganti.jpeg";
import Menaria from "../../../images/01. Menaria.jpeg";
import Pradyuman from "../../../images/02. Pradyuman.jpeg";
import topengineer1 from "../../../images/topengineer1.png";
import topengineer2 from "../../../images/topengineer2.png";
import topengineer3 from "../../../images/topengineer3.png";
import topengineer4 from "../../../images/topengineer4.png";
import topengineer5 from "../../../images/topengineer5.png";
import topengineer6 from "../../../images/topengineer6.png";
import topengineer7 from "../../../images/topengineer7.png";
import topengineer8 from "../../../images/topengineer8.png";
import topengineer9 from "../../../images/topengineer9.png";
import topengineer10 from "../../../images/topengineer10.png";
import topengineer11 from "../../../images/topengineer11.png";
import topengineer12 from "../../../images/topengineer12.png";
import topengineer13 from "../../../images/topengineer13.png";
import topengineer14 from "../../../images/topengineer14.png";
import topengineer15 from "../../../images/topengineer15.png";
import topengineer16 from "../../../images/topengineer16.png";
import topengineer17 from "../../../images/topengineer17.png";
import topengineer18 from "../../../images/topengineer18.png";
import topmanager1 from "../../../images/topmanager1.png";
import topmanager2 from "../../../images/topmanager2.png";
import topmanager3 from "../../../images/topmanager3.png";
import TopRecruitersManagement from "./TopRecruitersManagement";

const PlacementRecords = () => {
  const [topplacements2022, setTopPlacements2022] = useState([{}]);
  const [topplacements2021, setTopPlacements2021] = useState([{}]);
  const [topplacements2020, setTopPlacements2020] = useState([{}]);
  const [topplacements2019, setTopPlacements2019] = useState([{}]);

  useEffect(() => {
    setTopPlacements2022([
      {
        studentpic: Hitesh,
        studentname: "HITESH KUMAR YADAV",
        studentbranch: "BTECH CSE, 2022",
        companyname: "INDIAN NAVY",
        ctc: "₹13,00,000"
      },
      {
        studentpic: Paluvatla,
        studentname: "PALUVATLA SIDHARTH REDDY",
        studentbranch: "BBA, 2022",
        companyname: "BYJU'S",
        ctc: "₹10,00,000"
      },
      {
        studentpic: Mohit,
        studentname: "MOHIT CHOUDHARY",
        studentbranch: "BTECH CSE, 2022",
        companyname: "INTELLIPAAT",
        ctc: "₹9,00,000"
      },
      {
        studentpic: Vanga,
        studentname: "VANGA ACHYUTHANWESH",
        studentbranch: "BTECH CSE, 2022",
        companyname: "CODITAS SOLUTION",
        ctc: "₹6,00,000"
      },
      {
        studentpic: Lakkireddy,
        studentname: "LAKKIREDDY MANINDAR REDDY",
        studentbranch: "BTECH ME, 2022",
        companyname: "BYJU'S ACADEMIC",
        ctc: "₹6,00,000"
      },
      {
        studentpic: Rakshit,
        studentname: "RAKSHIT PALIWAL",
        studentbranch: "BTECH ME, 2022",
        companyname: "BYJU'S",
        ctc: "₹6,00,000"
      },
      {
        studentpic: Sumanth,
        studentname: "SIDDAMSHETTI SUMANTH",
        studentbranch: "BTECH ECE, 2022",
        companyname: "IN TIME TECHNOLOGY",
        ctc: "₹5,50,000"
      },
      {
        studentpic: Aniket,
        studentname: "ANIKET VYAS",
        studentbranch: "BTECH CSE, 2022",
        companyname: "CELEBAL TECH",
        ctc: "₹5,00,000"
      },
      {
        studentpic: Guruguri,
        studentname: "GURUGURI HANISHA REDDY",
        studentbranch: "BTECH CSE, 2022",
        companyname: "HARMAN",
        ctc: "₹5,00,000"
      },
      {
        studentpic: Pola,
        studentname: "POLA REVANTH",
        studentbranch: "BTECH ECE, 2022",
        companyname: "HARMAN CONNECTED SERVICES",
        ctc: "₹5,00,000"
      },
      {
        studentpic: Revanth,
        studentname: "PARTHA REVANTH KUMAR",
        studentbranch: "BTECH CSE, 2022",
        companyname: "PERSISTENT",
        ctc: "₹4,71,000"
      },
      {
        studentpic: Saurabh,
        studentname: "SAURABH SONI",
        studentbranch: "BTECH CSE, 2022",
        companyname: "GLOBAL VOX",
        ctc: "₹4,50,000"
      }
    ]);
    setTopPlacements2021([
      {
        studentpic: Ashish,
        studentname: "ASHISH DANGI",
        studentbranch: "BTECH CSE, 2021",
        companyname: "BYJU'S",
        ctc: "₹10,00,000"
      },
      {
        studentpic: Vaibhav,
        studentname: "VAIBHAV GATYANI",
        studentbranch: "BTECH CSE, 2021",
        companyname: "MY EXPERTISE IT SOLUTIONS",
        ctc: "₹5,00,000"
      },
      {
        studentpic: Suguri,
        studentname: "SUGURI SAI BHARATH",
        studentbranch: "BTECH CSE, 2021",
        companyname: "LANGUIFY INC",
        ctc: "₹5,00,000"
      }
    ]);
    setTopPlacements2020([
      {
        studentpic: Virendra,
        studentname: "Virendra Singh Rathore",
        studentbranch: "BTech Civil, 2020",
        companyname: "BTech Civil, 2020",
        ctc: "₹10,00,000"
      },
      {
        studentpic: Inuganti,
        studentname: "Inuganti Venkata Satya Sumanth",
        studentbranch: "BTech (Mech), 2020",
        companyname: "Unschool Learning",
        ctc: "₹5,00,000"
      }
    ]);
    setTopPlacements2019([
      {
        studentpic: Menaria,
        studentname: "Menaria Bhavesh Kanhaiyalal",
        studentbranch: "B Tech, 2019",
        companyname: "Hitachi India.",
        ctc: "₹6,00,000"
      },
      {
        studentpic: Pradyuman,
        studentname: "Pradyuman Singh",
        studentbranch: "BTech Mech(RTE), 2019",
        companyname: "Hitachi India Ltd.",
        ctc: "₹6,00,000 Plus"
      }
    ]);
  }, []);

  return (
    <>
      <Statistics
        title="SCHOOL OF ENGINEERING"
        value1="₹4.3"
        value2="₹13.4"
        value3="51.3%"
        value4="43.6%"
      />
      <TopRecruiters
        title="TOP RECRUITERS FOR ENGINEERING STUDENTS"
        img1={topengineer1}
        img2={topengineer2}
        img3={topengineer3}
        img4={topengineer4}
        img5={topengineer5}
        img6={topengineer6}
        img7={topengineer7}
        img8={topengineer8}
        img9={topengineer9}
        img10={topengineer10}
        img11={topengineer11}
        img12={topengineer12}
        img13={topengineer13}
        img14={topengineer14}
        img15={topengineer15}
        img16={topengineer16}
        img17={topengineer17}
        img18={topengineer18}
 
      />
      <div className="divider-line" />
      <Statistics
        title="SCHOOL OF MANAGEMENT"
        value1="₹4.3"
        value2="₹10"
        value3="46.7%"
        value4="33.3%"
      />
      <TopRecruitersManagement
        title="TOP RECRUITERS FOR MANAGEMENT STUDENTS"
        img1={topmanager1}
        img2={topmanager2}
        img3={topmanager3}
        img4={topengineer14}
        img5="https://naskarfinserv.in/wp-content/uploads/2020/10/Bajaj-Finance-logo-1.x11398.png"
        img6="https://www.sksethi.com/wp-content/uploads/2020/12/Relianceretaillogo.png"
        img7="https://www.victoryterminal.com/images/logo.png"
      />
      <TopPlacements
        title="TOP PLACEMENTS FROM THE BATCH OF 2022"
        listitems={topplacements2022}
      />
      <TopPlacements
        title="TOP PLACEMENTS FROM THE BATCH OF 2021"
        listitems={topplacements2021}
      />
      <TopPlacements
        title="TOP PLACEMENTS FROM THE BATCH OF 2020"
        listitems={topplacements2020}
      />
      <TopPlacements
        title="TOP PLACEMENTS FROM THE BATCH OF 2019"
        listitems={topplacements2019}
      />
      {/* <PackageDetails /> */}
      {/* <div className="coursepage-title">MAJOR RECRUITING COMPANIES</div> */}
      {/* <MajorRecruiters
        title=""
        img1={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/1.jpg"}
        img2={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/2.jpg"}
        img3={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/3.jpg"}
        img4={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/4.jpg"}
        img5={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/5.jpg"}
        img6={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/6.jpg"}
        img7={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/7.jpg"}
        img8={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/8.jpg"}
        img9={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/9.jpg"}
        img10={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/10.jpg"}
        img11={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/11.jpg"}
        img12={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/12.jpg"}
        img13={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/13.jpg"}
        img14={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/14.jpg"}
        img15={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/15.jpg"}
        img16={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/16.jpg"}
        img17={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/17.jpg"}
        img18={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/18.jpg"}
        img19={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/19.jpg"}
        img20={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/20.jpg"}
        img21={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/21.jpg"}
        img22={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/22.jpg"}
        img23={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/23.jpg"}
        img24={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/24.jpg"}
        img25={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/25.jpg"}
        img26={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/26.jpg"}
        img27={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/27.jpg"}
        img28={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/28.jpg"}
        img29={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/29.jpg"}
        img30={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/30.jpg"}
        img31={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/31.jpg"}
        img32={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/32.jpg"}
        img33={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/33.jpg"}
        img34={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/34.jpg"}
        img35={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/35.jpg"}
        img36={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/36.jpg"}
        img37={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/37.jpg"}
        img38={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/38.jpg"}
        img39={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/39.jpg"}
        img40={"https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/clients/40.jpg"}
      /> */}
    </>
  );
};

export default PlacementRecords;
