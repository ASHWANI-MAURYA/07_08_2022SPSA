import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import doublequote from "../../images/double-quote-yellow.png";
import manish from "../../images/manish.png";
import vanga from "../../images/vanga.png";
import aniket from "../../images/aniket.png";
import greenbox from "../../images/testimonials-green-box.png";
import "./Mainpage.css";

const Testimonials = () => {
  return (
    <div className="home-page-testimonials-section">
      <div className="testimonials">
        <h5 className="testimonials-title">Our Alumni</h5>
        <p className="students-say">What do our students say about us?</p>
        <OwlCarousel className="owl-theme desktop" margin={20} nav items={3}>
          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
              Behind every successful person is a good teacher and I am so thankful that I am part of a campus community where people look after each other. I wouldn’t be where I am without them. I have faced a lot of ups and downs, but each day I have learnt and developed my skills. I would also like to thank the placement cell and management of the university for helping me to achieve my goal and secure the opportunity I am holding today.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="home-page-alumni-detail">
              <img
                alt=""
                src={manish}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Mohit Choudhary</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>

          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
              Firstly, I am very much thankful to the placement department of SPSU and my mentors for guiding me throughout the placement process. The relationship between faculty and students in SPSU is very cordial, which gave me an opportunity to excel in my area of interest. Apart from academics, I was constantly encouraged by my peers and seniors to represent SPSU at various university level cricket tournaments. It helped me become a better team player.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="home-page-alumni-detail">
              <img
                alt=""
                src={vanga}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Vanga Achyuthanwesh</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>

          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
              I’m thankful to SPSU. It has offered challenging courses, opportunities to communicate with the faculty and staff within the program, and it has introduced me to new skills that I will use throughout my future career. The placement department has helped in guiding me during the placement by providing good quality training and also helping me with my placements. They were always available and responded to all queries. It keeps me on track for success in the fast-paced field of computer science.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="home-page-alumni-detail">
              <img
                alt=""
                src={aniket}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Aniket Vyas</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
        <OwlCarousel className="owl-theme mobile" margin={20} nav items={1}>
          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
                Behind every successful person is a good teachers and I am so
                thankful that I am part of a campus community where people look
                after each other, I wouldn’t be where I am without all, faced a
                lot of ups and downs but yes each day I have learnt and
                developed my skills. I would also like to thank the placement
                cell and management of the university in helping me to achieve
                my goal and the opportunity I am holding today.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="alumni-detail">
              <img
                alt=""
                src={manish}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Mohit Choudhary</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>

          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
                Firstly, I am very much thankful to the placement department of
                SPSU and my mentors for guiding me throughout the placement
                process. The relationship between faculty and the students in
                SPSU is very cordial which gave me an opportunity to excel in my
                area of interest. Apart from academics I was constantly
                encouraged by my peers and seniors in representing SPSU at
                various university level cricket tournaments. It helped me in
                becoming a better team player.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="alumni-detail">
              <img
                alt=""
                src={vanga}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Vanga Achyuthanwesh</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>

          <div className="item home-page-alumini-testimonial">
            <div className="home-page-alumni-desc">
              <img alt="" src={doublequote} />
              <p>
                I’m thankful to SPSU, it has offered challenging courses,
                opportunities to communicate with the faculty and staff within
                the program, and it has introduced me to new skills that I will
                use throughout my future career. The placement department had
                helped in guiding me during the placement by providing good
                quality training and also helping me in my placements. They were
                always available and responded to all queries. It is
                continuously holding me for success in the fast-paced field of
                computer science.
              </p>
            </div>
            <img src={greenbox} className="green-border desktop" />
            <div className="alumni-detail">
              <img
                alt=""
                src={aniket}
                className="btech-testimonials-student-pic"
              />
              <div className="personal-details">
                <h6 className="student-name">Aniket Vyas</h6>
                <p className="degree">B. Tech. CSE / Batch 2022</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
