import greenunderlinemobile from "../../images/green-underline-mobile.png";
import doublequote from "../../images/double-quote-yellow.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import manish from "../../images/manish.png";
import vanga from "../../images/vanga.png";
import aniket from "../../images/aniket.png";

const desc = { fontSize: "14px !important" };

const PlacementTestimonials = () => {
  return (
    <>
      <div className="visionpage-title" style={{ marginTop: "20px" }}>
        Testimonials
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>
      <div
        className="visionpage-summary container"
        style={{ textAlign: "justify", marginBottom: "40px" }}>
        <OwlCarousel className="owl-theme" margin={20} nav items={1}>

        <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src={manish}
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Mohit Choudhary</h5>
                              <h6 className="degree">B. Tech. CSE / Batch 2022</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className={"admissions-page-alumni-desc " + desc}
                              style={{ minHeight: "fit-content" }}>
                              Behind every successful person is a good teacher and I am so thankful that I am part of a campus community where people look after each other. I wouldn’t be where I am without them. I have faced a lot of ups and downs, but each day I have learnt and developed my skills. I would also like to thank the placement cell and management of the university for helping me to achieve my goal and secure the opportunity I am holding today.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src={vanga}
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Vanga Achyuthanwesh</h5>
                              <h6 className="degree">B. Tech. CSE / Batch 2022</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className={"admissions-page-alumni-desc " + desc}
                              style={{ minHeight: "fit-content" }}>
                              Firstly, I am very much thankful to the placement department of SPSU and my mentors for guiding me throughout the placement process. The relationship between faculty and students in SPSU is very cordial, which gave me an opportunity to excel in my area of interest. Apart from academics, I was constantly encouraged by my peers and seniors to represent SPSU at various university level cricket tournaments. It helped me become a better team player.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src={aniket}
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Aniket Vyas</h5>
                              <h6 className="degree">B. Tech. CSE / Batch 2022</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className={"admissions-page-alumni-desc " + desc}
                              style={{ minHeight: "fit-content" }}>
                              I’m thankful to SPSU. It has offered challenging courses, opportunities to communicate with the faculty and staff within the program, and it has introduced me to new skills that I will use throughout my future career. The placement department has helped in guiding me during the placement by providing good quality training and also helping me with my placements. They were always available and responded to all queries. It keeps me on track for success in the fast-paced field of computer science.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/Lokendra.jpg"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Lokendra Deora</h5>
                              <h6 className="degree">B. Tech. (2019 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className={"admissions-page-alumni-desc " + desc}
                              style={{ minHeight: "fit-content" }}>
                              I graduated from Sir Padampat Singhania University in the year 2019 with a CGPA of 8.05 in Mining Engineering. After graduation, I faced a lot of challenges in getting a suitable job. During this phase, my mentor helped me a lot to face these challenges and gave me direction. I appreciate his support. I worked hard to get selected for the Rajasthan State Pollution Control Board. Finally, with my hard work and my mentor’s support, I was selected for the Rajasthan State Pollution Control Board-Jaipur. I give credit to my mentor and the Mining Engineering Department for their guidance and mentorship during the time of my stay at university. The Placement Department has helped me to gain practical knowledge through an international internship at JK Cement Private Ltd. in Fujairah UAE.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/amreen.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name"> Amreen Qureshi</h5>
                              <h6 className="degree">B. Tech. (2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              I feel very fortunate to be a part of the very first batch of Sir Padampat Singhania University. It is a residential university, and my stay at the campus provided me with an experience that is rare, special, and enriching. I am blessed with friends and mentors for life. There is a great focus on quality education, courtesy of our management and highly qualified faculty members. The emphasis was always on conceptual clarity and applied knowledge. The faculty members motivated and supported us to achieve higher goals. Our ability to get through more competitive exams without any external assistance is a testament to the benchmark the faculty members set for us. They not only imparted educational wisdom but also helped us develop the ability to excel in every challenge and role we take in our lives. As a result of this, I was able to successfully transition my role as a Credit Risk Analyst with HSBC. Currently, I am with JP Morgan and Chase in Mumbai in a similar role.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/Aroun.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Aroun Amitabh Dalawat{" "}
                              </h5>
                              <h6 className="degree">B. Tech. (2014 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              During my first year, the assistant wardens and the wardens helped me settle in. Had it not been for them, I would have taken some time to adjust since it was the first time I was living away from home. By the time the second year rolled in, the place away from home had already become a home. I had made some friends and had started enjoying the courses like Introduction to Computer Programming, etc., since I loved computer science. In the coming years, I got to learn so many amazing things about computers, which helped me develop a better understanding of how computers work. Operating Systems, taught by Harish Tiwari Sir, helped me understand how a computer handles every little process, and Data Structures and Algorithm Design, taught by Amit Jain Sir, helped me think about how to use efficient logic to complete a task, which is where I developed an interest in data science. I would also like to lay emphasis on how helpful the teachers were if I had any problems, be it academic or personal. I&apos;ve lost count of the number of times Monika Anand Ma&apos;am made time to hear our problems and then give us sound advice. In all, my experience at SPSU was like a journey of discovering things. I discovered my love for data science, I discovered amazing friends like Pawan Singh and Spurthy, and I discovered amazing teachers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/Anukul .png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Anukul Anand Srivastava{" "}
                              </h5>
                              <h6 className="degree">B. Tech. (2009 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Being away from family is never easy, but the caring nature of all at Sir Padampat Singhania University, especially Vice-President Ma’am and the faculty members, made the stay there very comfortable and home-like. Those four years not only gave me technical knowledge but also helped me morph into a confident and strong person to face the challenges of life. Even today, I rely on my teachers in times of need. Thank you, SPSU!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/bhakti.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name"> Bhakti Sargia</h5>
                              <h6 className="degree">B. Tech. (2009 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              SPSU is a home away from home! Gordon said, &quot;You can’t build a great building on a weak foundation; you must have a solid foundation if you are going to have a strong superstructure.&quot; Similarly, education is the foundation for one’s future and dreams, and this is what I received from Sir Padampat Singhania University. The faculty members have provided quality education. Four years at SPSU helped me to realise my real potential and boost my confidence. This strong base helped me pass GATE in flying colours. My stay at DTU IIT for my master’s degree programme was easy because of the knowledge, skills, and attitude shaped by SPSU. I thank Sir Padampat Singhania University for providing me with the wings to fly high.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/bithika.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name"> Bithika Dutta</h5>
                              <h6 className="degree">B. Tech. (2011 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              College is not a preparation for life; it is life itself! I really wanted the time to stop so that I could live there for some more days. The teachers, laboratories, library, facilities, infrastructure, everything at Sir Padampat Singhania University was good.And now, when I think of the opportunities the college gave me, I feel proud to be a part of SPSU. I was selected for an international exchange programme at Chiba University of Commerce, Japan. This exposure gave me the opportunity to develop cultural sensitivity. The best thing about SPSU is its faculty members. They are highly supportive, friendly, and experts in their domain areas. The quality of food in the mess was very good. It was a home away from home. I will always cherish the memories of SPSU. Currently, I am working as a manager for the LBS Group of Educational Institutions, Kota. I thank SPSU for giving me the best days of my life.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/gar.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Garima Shrivastava
                              </h5>
                              <h6 className="degree">B. Tech. (2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Home away from home—that’s what I say for Sir Padampat Singhania University! From the initial homesickness to overcoming the difficulties, the journey of 4 years at SPSU was very special. I am highly grateful to Professor Dr. P.C. Deka and Dr. G.P. Purohit, who always guided me and showed me the right path. I am working as a Project Manager with a market research firm and am responsible for producing technical conferences. I can still relate to those classroom lectures, and this has helped me immensely in my professional life. The whole credit goes to my diligent and dedicated biotech faculty. Thanks for giving me the best of friends and memories, which I will cherish forever!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/har.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Harraj Singh Sandhu
                              </h5>
                              <h6 className="degree">B. Tech. (2013 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Being associated with SPSU is a matter of pride for me. The strength of our university is our qualified and experienced faculty, who are always ready to help in both academic and non-academic matters. Any faculty member, regardless of school affiliation, can be approached or counselled at any time. Technical training, projects, and workshops organised at the university helped us keep abreast with the latest in our chosen field of study. Being a member of the core team of Panache and Project Endeavour, I got a chance to meet and interact with several dignitaries and people from academia and industry. It widened my canvas of experience as I learned to manage resources, people, and crisis situations. I am thankful to our President, Sir, and Vice President Ma&apos;am, for their constant support and mentorship.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/ishita.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Ishita Upadhyay</h5>
                              <h6 className="degree">B. Tech. (2011 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              I am extremely honoured to be a part of Sir Padampat Singhania University.The University has been consistent in maintaining excellence in academic standards since its inception. Learning is an enjoyable experience here with experienced faculty, an inspiring library, state-of-the-art laboratories, and a beautiful environment. Ample opportunities are available to the students to express their creative urges through literary, social, and cultural activities. Different Student Clubs provides an amalgamation of energy and grace, consistently raising the bar with each performance. I have enjoyed every bit of my university days here. It was a life-changing experience. It is a university with a difference. It is here that I learned to think critically, organise my student life, build my confidence, and prepare for the path of my choice. It helped me equip myself with the knowledge and skills to succeed in a competitive global market.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/kuldeep.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Kuldeep Singh Rajpurohit
                              </h5>
                              <h6 className="degree">B. Tech.(2012 Batch) </h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Whenever I come across the name SPSU, a smile of satisfaction comes to my face. From the campus to the faculty members to friends to staff, they were the best. This month has helped me be who I am today. It is in such a competitive environment. The efforts made by our faculty It is a platform where you not only gain academic knowledge but also have sufficient time to explore yourself through sports, clubs, activities, NSS, cultural fests, etc. &quot;SPSU jannat tha, jannat hai, jannat rahega&quot;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/neha.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Neha Pandiya</h5>
                              <h6 className="degree">
                                {" "}
                                B. Tech. (2012 Batch){" "}
                              </h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              My stay at SPSU was a memorable one and full of joy and learning. SPSU is a home away from home. I was a bit nervous when I first joined SPSU, though my elder brother was pursuing his B.Tech from here only. The seniors were very helpful and guided us at every step. The faculty members of SPSU are experts in their domains, very dedicated and always encourage the students to give their best. The projects and extracurricular activities I participated in helped me immensely in the corporate world. I am working as an Associate System Engineer with IBM in Pune.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/nikhil.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Nikhil Jangir</h5>
                              <h6 className="degree">B. Tech. (2008 Batch) </h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              An individual&apos;s social and intellectual stimulation begins in college. Today, when I look back at the four years I spent at Sir Padampat Singhania University, I feel that those four years played a great role in shaping my personality. It&apos;s not only the grades and knowledge but the all-round development and discipline that make you a better individual. The students of this university are blessed to be guided by the most committed and knowledgeable faculty members, backed by good infrastructure and facilities. I am an Assistant Commandant, Indian Coast Guard.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/nirmal.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Nirmal Singh</h5>
                              <h6 className="degree">B. Tech. (2008 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              A fine-tuned curriculum and constructive academic freedom gave me the space to be dexterous and explore the world on my own. This outward learning experience has given me an extra dimension, helping me build a successful career. This added dimension is unique and has carved a niche for all the students of SPSU. The student-centric culture at SPSU helped me develop my personality and soft skills. This, combined with the domain skills, paved the way for me to be an independent, confident, and competent individual.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/nitya.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Nitya Tondon</h5>
                              <h6 className="degree">
                                Integrated BBM-MBA (2012 Batch)
                              </h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              College is the one stage of life in which we gain the most for our career, growth, and well-being. Sir Padampat Singhania University gave me the opportunity to challenge myself, shed my inhibitions, and, in turn, I was able to focus myself towards positive outcomes. Not only did the professors give me all the guidance possible, but they personally helped me a lot to take strong decisions for my future. The hostel life and rigorous schedule at the university prepared me to face the difficult situations in the corporate sector. I would like to thank everyone at my university for shaping my personality. It is rightly said, &quot;You will miss your college life once you are out of it.&quot; I wish the best for the new batches! Continue to Learn and Grow!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/prabhasini.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">
                                Prabhasini Mathur
                              </h5>
                              <h6 className="degree">B. Tech. (2011 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Life is a journey, and it is made beautiful by the people we meet, places we go, and decisions we make. SPSU was one such beautiful part of my life that gave me not just an important degree but also opportunities to explore myself, friends, and mentors for life. From the day I joined SPSU as a student to leaving as an IT professional working at IBM, there are lots of things I experienced and learned here which will always help me on this journey of life. The student exchange programme is one of the many opportunities to explore your future options. International exposure not only helped me to gain advanced technical knowledge but also gave me an opportunity to experience different cultures, languages, and lifestyles. Education and time are critical components in anyone&apos;s life; make sure you hit it at the right time. Thankfully, for me, it happened the right way with SPSU.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/pratibha.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Pratibha Singh</h5>
                              <h6 className="degree">B. Tech.(2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              When I got admission in B.Tech Biotechnology at Sir Padampat Singhania University, I had no clue about the university and the life there as mine was the first batch of the university. I was very apprehensive initially, but my fears were unfounded and SPSU became my second home. The faculty members of my department are experts in their respective fields and gave us excellent technical knowledge. This, coupled with the excellent laboratory infrastructure, ensured that we got the best and latest technical knowledge. What sets Sir Padampat Singhania University apart is the emotional bond which the faculty shares with the students. By God&apos;s grace and the technical knowledge gained during my B.Tech, I am a Junior Environmental Engineer with the Rajasthan Pollution Control Board, Jaipur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/rahul.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Rahul Kumawat</h5>
                              <h6 className="degree">B. Tech. (2008 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              I was always fascinated by buildings, the 3 M’s (Man, Material, and Machinery) and how they work in coordination. I pursued a B.Tech in Civil Engineering. My four years at SPSU were a life-enriching experience. The relationship between faculty members and students at SPSU is very cordial. This bond plays a vital role in a student’s life and helps him excel in his area of study. SPSU offers an excellent balance between studies, sports, and social activities. My stay at SPSU helped me take that extra step towards excellence at the workplace. It also helped me develop interpersonal skills and be confident in getting work assignments in the world of real estate and infrastructure companies. My best wishes to the current and future students of SPSU.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/ramesh.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Ramesh Bishnoi</h5>
                              <h6 className="degree"> B. Tech. (2008 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              The four years I spent at SPSU played a great role in shaping my personality. The disciplined life and conceptual and technical knowledge imparted by some of the great faculty members like Prof. Pradip Deka Sir, Dr. Ghanshaym Purohit Sir, and Dr. Pallavi Dwivedi Ma&apos;am made me what I am today. SPSU has state-of-the-art laboratories, especially in biotechnology, and very good infrastructure. I am presently working as an Indian Forest Service (IFS) Officer, Kerala Cadre. I owe my success to SPSU.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/reema.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Reema Khathuria</h5>
                              <h6 className="degree">B. Tech. (2008 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              The dream of becoming a renowned engineer and being able to make a difference in the lives of people was the dream that I joined Sir Padampat Singhania University with. From skipping classes to graduating with honors, from learning about real-time projects to working in my dream company today, whether it&apos;s knowing different computer languages or juggling with breadboards and microprocessors, last-minute assignments or late-night group studies, lab sessions or guest lectures, stage shows or sports, I learned it all! I grew! And all this happened mostly because of the teacher-student mentoring and relationships! Four years of engineering at SPSU taught me perseverance, being independent, having the courage to think out of the box, and a lot more than what a 20-something must learn while he/she graduates. This helped me excel at my work with Oracle in Pune. Engineering isn&apos;t just one of my qualifications, it is a feeling!I am a proud CS engineer from SPSU.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/ronak.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Ronak Maniar</h5>
                              <h6 className="degree">B. Tech. (2008 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              My education at Sir Padampat Singhania University made me independent in terms of acquiring knowledge and developing skills. My professors nurtured my skills to compete in the real world. I am thankful to SPSU for providing me with such a great platform. In the United States, I work as an engineer for Qualcomm Inc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/saurabh.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Suarabh Sukhadia</h5>
                              <h6 className="degree">B. Tech. (2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              When I was young, I had a dream that one day I would become an engineer. And it was with this dream that I came to Sir Padampat Singhania University. When I first saw the campus with its alluring infrastructure, clean environment, and lavish hostels, I fell in love with this place. And the university lived up to my expectations. The four years at SPSU were a blend of education, skills, emotions, appreciation, friendship, love, and a lot of unsaid yet meaningful things. Some of my most cherished memories are of the time I spent here. The faculty members at SPSU are very dedicated and expert in their fields. My stay here not only developed my confidence but also taught me various real-life lessons that are helping me day in and day out today. I am working as an officer at the State Bank of India. I thank my alma mater for nurturing talent.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/siddhart.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Sidharth Lal</h5>
                              <h6 className="degree">B. Tech. (2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              Beginnings are always special! And I was fortunate to share it with Sir Padampat Singhania University, Udaipur. As a part of the class of electronics and communication, I got to learn from extremely dedicated and qualified academicians. Along with the curriculum, I had an opportunity to be associated with various activity clubs and start one of my own. The four years I spent on the SPSU campus not only helped me hone my engineering skills, but also helped me develop people skills. The vocational training and workshops aimed at employability gave me an edge in the fairly competitive market. It was an amazing journey. Today, thanks to my alma mater, I am working in the semiconductor domain with IBM.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/sp manish.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">SP Manish Bhalla</h5>
                              <h6 className="degree">B. Tech. (2007 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              It is rightly said that risk is high in the beginning, but then so is the return. This is how my journey started with Sir Padampat Singhania University. We grew up together and shared ups and downs. I was a part of the information technology class. My stay on the campus and involvement in the curricular and extracurricular activities helped me hone my skills and groom my personality. My professors were very dedicated, learned, and experienced. I owe my learning and growth to them. I am presently working as Regional Head (West), IIHT.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="container pt-30 pb-60">
                <div className="section-content">
                  <div clas="row">
                    <div className="col-md-12">
                      <div>
                        <div
                          className="item admissions-page-alumini-testimonial"
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            minHeight: "fit-content"
                          }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}>
                            <div
                              className="admissions-page-alumni-detail"
                              style={{ width: "fit-content" }}>
                              <img
                                alt=""
                                src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/testimonial/Sidharth Patnaik.png"
                                className="btech-testimonials-student-pic"
                                style={{ borderRadius: "50px" }}
                              />
                            </div>
                            <div className="personal-details">
                              <h5 className="student-name">Sidharth Patnaik</h5>
                              <h6 className="degree">B. Tech. (2011 Batch)</h6>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <img
                              alt=""
                              src={doublequote}
                              style={{
                                marginTop: " 0.9rem",
                                position: "absolute",
                                width: "50px",
                                marginLeft: "-2.7rem"
                              }}
                            />
                            <p
                              className="admissions-page-alumni-desc"
                              style={{ minHeight: "fit-content" }}>
                              I would like to thank Sir Padampat Singhania University for giving me immense opportunities to shape my talent. The diligent and sincere efforts made by the faculty members and the management have had a very positive impact on the students. The environment that SPSU offers to its students makes it easy for the students to make the transition from being novice students to becoming conscientious and dedicated professionals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </OwlCarousel>
      </div>
    </>
  );
};

export default PlacementTestimonials;
