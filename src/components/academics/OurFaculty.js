import { useEffect, useState } from "react";
import greenunderlinemobile from "../../images/green-underline-mobile.png";
import darpananand from "../../images/darpananand.jpeg";
import presidentpic from "../../images/newpresident.jpg";
import sanjaymishra from "../../images/SanjayMishra.jpeg";
import "./Academics.css";

const OurFaculty = () => {
  const [faculties, setFaculties] = useState([{}]);
  const [facultiesnonteaching, setFacultiesNonTeaching] = useState([{}]);

  useEffect(() => {
    setFaculties([
      {
        img: presidentpic,

        facultyname: "Prof.(Dr.) Padmakali Banerjee",
        facultydetails1: "President",
        facultydetails3: "Ph.D"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03551.png",

        facultyname: "Vinod Patidar",
        facultydetails1: "Professor and Dean Research HOD",
        facultydetails2: "Physics",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/prusty1.jpg",

        facultyname: "Sadananda Prusty",
        facultydetails1: "Dean",
        facultydetails2: "School of Management",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Management"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/arun.png",

        facultyname: "Arun Kumar",
        facultydetails1: "Dean School of Engineering",
        facultydetails3: "Ph.D"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03414.png",

        facultyname: "Deepak Vyas",
        facultydetails1: "Professor Proctor and HOD",
        facultydetails2: "Chemistry",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/MONIKA-ANAND.jpg",

        facultyname: "Monika Anand",
        facultydetails1: "Professor and HOD",
        facultydetails2: "English",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/SHIBANI-BANERJEE.jpg",

        facultyname: "Shibani Banerjee",
        facultydetails1: "Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (22).png",

        facultyname: "Udayprakash Raghunath Singh",
        facultydetails1: "Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/naveen-kumar.jpg",

        facultyname: "Naveen Kumar",
        facultydetails1: "Professor and HOD",
        facultydetails2: "Mechanical Engineering",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: darpananand,
        facultyname: "Prof. (Dr.) Darpan Anand",
        facultydetails1: "HOD",
        facultydetails2: "Computer Science Engineering",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (18).png",

        facultyname: "Ashutosh Gupta",
        facultydetails1: "Associate Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (23).png",

        facultyname: "Om Prakash Suwalka",
        facultydetails1: "Assistant Professor and Controller of Examination",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03450.png",

        facultyname: "Himanshu Purohit",
        facultydetails1: "Assistant Professor and Head of Corporate Interface",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (15).png",

        facultyname: "Shweta Lalwani",
        facultydetails1: "HOD",
        facultydetails2: "School Of Management",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Management"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03513 .png",

        facultyname: "Archana Gajbhiye",
        facultydetails1: "Assistant Professor and HOD",
        facultydetails2: "Biotechnology",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03508.png",

        facultyname: "Yashoverdhan Vyas",
        facultydetails1: " Assistant Professor and HOD",
        facultydetails2: "Mathematics",
        facultydetails3: " PhD",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03477.png",

        facultyname: "Anand kumar Atalbihari Bhaskar",
        facultydetails1: "Assistant Professor and HOD ",
        facultydetails2:
          "Electronics & Communication Engineering & Electrical Engineering",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/F13.jfif",

        facultyname: "Avinash Ojha",
        facultydetails1: "Assistant Professor and HOD",
        facultydetails2: "Civil Engineering",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/deepak-pandey.jpg",

        facultyname: "Deepak Pandey",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (3).png",

        facultyname: "Devendra Singh Chouhan",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (14).png",

        facultyname: "Tulika Chakrabarti",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design.png",

        facultyname: "Amrit Ghosh",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (12).png",

        facultyname: "Shubham Goswami",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Management"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (4).png",

        facultyname: "Disha Mathur",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Management"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (5).png",

        facultyname: "Harish Tiwari",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/f20.jfif",

        facultyname: "Amit Jain",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03496.png",

        facultyname: "Mukesh Kalla",
        facultydetails1: "Assistant Professor and HOD",
        facultydetails2: "Computer Science & Engineering",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (19).png",

        facultyname: "Prithvi Singh",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (1).png",

        facultyname: "Arvind Sharma",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (24).png",

        facultyname: "Chandni Joshi",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/Kamal1.jpg",

        facultyname: "Kamal Kant Hiran",
        facultydetails1: "Assistant Professor",
        facultydetails3: "PhD.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (21).png",

        facultyname: "Ritesh Tirole",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/VSS03519.png",

        facultyname: "Aman Jain",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (6).png",

        facultyname: "Manish Dadhich",
        facultydetails1: "Assistant Professor",
        facultydetails3: "Ph.D",
        facultydetails4: "School of Management"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/RAJEEV-KUMAR.jpg",

        facultyname: "Rajeev Kumar",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/lokesh-gupta.jpg",

        facultyname: "Lokesh Gupta",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Manjeet-Singh-Bhullar.jpg",

        facultyname: " Manjeet Singh Bhullar",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      },
     
      // {
      //   img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (8).png",

      //   facultyname: "Poonam Saini",
      //   facultydetails1: "Assistant Professor",
      //   facultydetails3: "M. Phil.",
      //   facultydetails4: "School of Engineering"
      // },
      // {
      //   img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (20).png",

      //   facultyname: "Vinay Chandrasekhar Mehta",
      //   facultydetails1: "Assistant Professor",
      //   facultydetails3: "M. Tech.",
      //   facultydetails4: "School of Engineering"
      // },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/Untitled design (7).png",

        facultyname: "Pankaj Mohan Rastogi",
        facultydetails1: "Assistant Professor",
        facultydetails3: "M. Tech.",
        facultydetails4: "School of Engineering"
      }
      
    ]);
    setFacultiesNonTeaching([
      {
        img: sanjaymishra,

        facultyname: "Dr. Sanjay Mishra",
        facultydetails1: "Registrar",
        facultydetails3: "Ph.D"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/ranjeet-singh-adhikari.jpg?var=1",

        facultyname: "Ranjeet Singh Adhikari",
        facultydetails1: "Head Administration & Deputy Registrar",
        facultydetails3: "Post Graduation"
      },
      // {
      //   img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/hina-khan.jpg?var=1",

      //   facultyname: "Hina Khan",
      //   facultydetails1: "Executive Communications",
      //   facultydetails3: "Post Graduation"
      // },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/pradyumna-kumar-panigrahi.jpg?var=1",

        facultyname: "Pradyumna Kumar Panigrahi",
        facultydetails1: "Librarian",
        facultydetails3: "MPhil"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/surendra-setty.jpg?var=1",

        facultyname: "Surendra Setty",
        facultydetails1: "Assistant Librarian",
        facultydetails3: "Ph.D"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/kp-singh.jpg?var=1",

        facultyname: "KP Singh",
        facultydetails1: "Manager Project",
        facultydetails3: "DCE AMIE Part 1"
      },
      {
        img: "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/faculty/dev-kishan-heerawat.jpg?var=1",

        facultyname: "Dev Kishan Heerawat",
        facultydetails1: "Manager Accounts",
        facultydetails3: "Graduation"
      }
    ]);
  }, []);
  return (
    <>
      <div className="visionpage-title">
        Our Faculty Members
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div className="academics-faculties-section">
          {faculties.map((obj, i) => {
            let departmentcomponent = <></>;
            if (Object.keys(obj).indexOf("facultydetails2") !== -1) {
              departmentcomponent = (
                <div className="academics-faculty-details">
                  <b>Department: </b> {obj.facultydetails2}
                </div>
              );
            } else {
              departmentcomponent = <></>;
            }
            return (
              <div key={i} className="academics-faculty-card">
                <div className="team-members mb-40 ">
                  <div className="team-thumb mr-0">
                    <img src={obj.img} alt="" className="faculty-image" />
                  </div>
                  <div className=" border-1px p-15">
                    <h6 className="academics-faculty-name">
                      {" "}
                      {obj.facultyname}
                    </h6>
                    <div className="academics-faculty-details">
                      <b>Designation: </b>
                      {obj.facultydetails1}
                    </div>
                    {departmentcomponent}
                    <div className="academics-faculty-details">
                      <b>Qualifications: </b>
                      {obj.facultydetails3}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <h5 className="heading">NON TEACHING MEMBERS</h5>
        <br />
        <div className="academics-faculties-section">
          {facultiesnonteaching.map((obj, i) => {
            let departmentcomponent = <></>;
            if (Object.keys(obj).indexOf("facultydetails2") !== -1) {
              departmentcomponent = (
                <div className="academics-faculty-details">
                  <b>Department: </b> {obj.facultydetails2}
                </div>
              );
            } else {
              departmentcomponent = <></>;
            }
            return (
              <div key={i} className="academics-faculty-card">
                <div className="team-members mb-40 ">
                  <div className="team-thumb mr-0">
                    <img src={obj.img} alt="" className="faculty-image" />
                  </div>
                  <div className=" border-1px p-15">
                    <h6 className="academics-faculty-name">
                      {" "}
                      {obj.facultyname}
                    </h6>
                    <div className="academics-faculty-details">
                      <b>Designation: </b>
                      {obj.facultydetails1}
                    </div>
                    {departmentcomponent}
                    <div className="academics-faculty-details">
                      <b>Qualifications: </b>
                      {obj.facultydetails3}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurFaculty;
