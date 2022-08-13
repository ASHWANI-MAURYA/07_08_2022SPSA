import React from "react";
import "../Mainpage.css";
import "./Programs.css";
import downloadicon from "../../../images/download.png";
import yellowunderline from "../../../images/yellow-underline-new.png";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselList from "./CarouselList";

class Programs extends React.Component {
  constructor (props) {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
    this.onExpand = this.onExpand.bind(this);
  }

  componentDidMount () {
    document.getElementById("Engineering").style.display = "block";
  }

  onClickIconTab = (evt) => {
    let i;
    const courseName = evt.target.innerHTML;
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(courseName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  onChange (value) {
    this.setState({ value });
  }

  onExpand (evt) {}

  render () {
    return (
      <div className="industry-collaboration-section campus-facilities-section">
        <div className="container">
          <h5 className="pioneers-title">SPSU PROGRAMS</h5>
          <div className="pioneers-description">
          SPSU is the first choice for all aspiring candidates as it imparts application-based learning in partnership with leading MNCs.
          </div>
          <div className="programs-image-slider-section">
            <div className="programs-image-slider-image-section">
              <div className="programs-image-slider-image-section-title">
                BE A PART OF INDIA&apos;S TOP UNIVERSITY, SPSU
              </div>
              <img src={yellowunderline} className="seagreenunderline" />
              <div className="programs-image-slider-image-section-sub-title">
              Choose from 20+ undergraduate, postgraduate, and doctorate majors.
              </div>
              <a href="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/vendor/Brochure.pdf">
                <div className="download-brochure">
                  <img
                    src={downloadicon}
                    className="spsu-programs-download-icon"
                  />
                  <div>DOWNLOAD BROCHURE</div>
                </div>
              </a>
            </div>
            <div className="programs-image-slider-slider-section">
              <div className="tab">
                <button
                  className="tablinks active"
                  onClick={this.onClickIconTab}>
                  Engineering
                </button>
                <button className="tablinks" onClick={this.onClickIconTab}>
                  Management
                </button>
              </div>

              <div id="Engineering" className="tabcontent">
                <div className="programs-carousel-container">
                  <Carousel
                    value={this.state.value}
                    onChange={this.onChange}
                    slides={[
                      <CarouselList
                        key="0"
                        listitems={[
                          {
                            title: "B.Tech Programs",
                            subtitles: [
                              {
                                subtitle: "Computer Science Engineering (General)",
                                href: "/CSE/BTech"
                              },
                              {
                                subtitle: "Computer Science Engineering (AI/ML) with Xebia and Intel",
                                href: "/CSE/BTech"
                              },
                              {
                                subtitle: "Computer Science Engineering (Cloud Computing) with TCS iON, Microsoft and AWS",
                                href: "/CSE/BTech"
                              },
                              {
                                subtitle:
                                  "Electronics & Communication Engineering (Embedded System and IoT) with Omnipresent",
                                href: "/ECE/BTech"
                              },
                              {
                                subtitle:
                                  "Mechanical Engineering (Cement Technology) with JK Cement, FLSmidth and Beumer Group",
                                href: "/ME/BTech"
                              },
                              {
                                subtitle: "Mining (Advanced Mining Technology) with Gainwell",
                                href: "/Mining/BTech"
                              }
                            ]
                          },
                          {
                            title: "M.Tech Programs",
                            subtitles: [
                              {
                                subtitle: "Computer Science and Engineering",
                                href: "/CSE/MTech"
                              },
                              {
                                subtitle:
                                  "Electronics & Communication Engineering",
                                href: "/CSE/MTech"
                              },
                              {
                                subtitle: "Mechanical Engineering",
                                href: "/ME/MTech"
                              },
                              {
                                subtitle: "Mining Engineering",
                                href: "/Mining/MTech"
                              }
                            ]
                          },
                          {
                            title: "Ph.D",
                            subtitles: [{
                              subtitle: "Computer Science and Engineering",
                              href: "/phD-in-computer-science-engineering"
                            },
                            {
                              subtitle:
                                "Electronics & Communication Engineering",
                              href: "/ECE/PhD"
                            },
                            {
                              subtitle: "Mechanical Engineering",
                              href: "/ME/PhD"
                            },
                            {
                              subtitle: "Mining Engineering",
                              href: "/Mining/PhD"
                            }]
                          }
                        ]}
                      />
                    ]}
                    plugins={["arrows", "clickToChange"]}
                  />
                </div>
              </div>
              <div id="Management" className="tabcontent">
                <div className="programs-carousel-container">
                  <Carousel
                    value={this.state.value}
                    onChange={this.onChange}
                    slides={[
                      <CarouselList
                        key="0"
                        listitems={[
                          {
                            title: "BBA Programs",
                            subtitles: [
                              {
                                subtitle:
                                  "BBA with Specialization in Digital Marketing"
                              },
                              {
                                subtitle: "BBA with Specialization in Business Analytics"
                              }
                            ]
                          },
                          {
                            title: "MBA Programs",
                            subtitles: [
                              {
                                subtitle: "General MBA"
                              },
                              {
                                subtitle: "MBA with Specialization in Business Analytics with SAS"
                              }
                            ]
                          }
                        ]}
                      />
                    ]}
                    plugins={["arrows", "clickToChange"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Programs;
