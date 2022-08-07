import "./Mainpage.css";
import lalakailashpat from "../../images/over-the-years-1977.png";
import lalakamlapat from "../../images/over-the-years-1984.png";
import yadupati from "../../images/over-the-years-1992.png";
import padampatschool from "../../images/over-the-years-2002.png";
import spsu from "../../images/spsu-header-logo.png";
import jkcementlogo from "../../images/powered-by.png";
import yearpointer from "../../images/year-pointer.png";
import { useEffect, useState } from "react";

const OverTheYears = () => {
  const [sectionheader, setSectionHeader] = useState(
    "Lala Kailashpat Singhania Public School, Nimbahera"
  );
  const [sectiondesc, setSectionDesc] = useState(
    ""
  );
  const [sectionimg, setSectionImg] = useState(lalakailashpat);

  useEffect(() => {
    const allDivs = document.getElementsByClassName("over-the-years-year");
    
    allDivs[0].style.color = "#0B38F2";
    const allPointers = document.getElementsByClassName("yearpointer");
    for (let i = 1; i < allPointers.length; i++) {
      allPointers[i].style.display = "none";
    }
    allDivs[0].classList.add("over-the-years-year-active");
  }, []);

  const onSelectYear = (evt) => {
    const allDivs = document.getElementsByClassName("over-the-years-year");
    const allPointers = document.getElementsByClassName("yearpointer");

    for (let i = 0; i < allDivs.length; i++) {
      allDivs[i].classList.remove("over-the-years-year-active");
      allDivs[i].style.color = "#7f7f7f";
      allPointers[i].style.display = "none";
    }

    const year = evt.target.innerText;
    const selectedDiv = document.getElementById("year" + year);
    const selectedPointer = document.getElementById("pointer" + year);

    evt.target.classList.add("over-the-years-year-active");

    evt.target.style.color = "#0B38F2 !important";
    selectedDiv.style.color = "#0B38F2";
    selectedPointer.style.display = "flex";

    if (year === "1977") {
      setSectionHeader("Lala Kailashpat Singhania Public School, Nimbahera (erstwhile Kailash Vidya Mandir)");
      setSectionDesc(
        ""
      );
      setSectionImg(lalakailashpat);
    } else if (year === "1984") {
      setSectionHeader("Lala Kamlapat Singhania Education, Gotan");
      setSectionDesc(
        ""
      );
      setSectionImg(lalakamlapat);
    } else if (year === "1992") {
      setSectionHeader(
        "Yadupati Singhania Institute of Technology Pvt. ITI, Kailashnagar, Nimbahera "
      );
      setSectionDesc(
        ""
      );
      setSectionImg(yadupati);
    } else if (year === "2002") {
      setSectionHeader(
        "Yadupati Singhania Industrial Training Center, Kamlanagar, Kanpur "
      );
      setSectionDesc(
        ""
      );
      setSectionImg(yadupati);
    } else if (year === "2007") {
      setSectionHeader("Sir Padampat Singhania University, Udaipur");
      setSectionDesc(
        ""
      );
      setSectionImg(spsu);
    } else if (year === "2010") {
      setSectionHeader("Yadupati Singhania Center for Vocational Skill Development, Kamlanagar, Kanpur");
      setSectionDesc(
        ""
      );
      setSectionImg(yadupati);
    } else if (year === "2011") {
      setSectionHeader(
        "Padampat English Medium Primary School, Muddapur"
      );
      setSectionDesc(
        ""
      );
      setSectionImg(padampatschool);
    } else if (year === "2014") {
      setSectionHeader("Yadupati Singhania Center for Technician Training Pvt. ITI, Dadanagar, Kanpur");
      setSectionDesc(
        ""
      );
      setSectionImg(yadupati);
    } else if (year === "2022") {
      setSectionHeader(
        "Yadupati Singhania Institute of Technology Pvt. ITI, JK Road, Gotan"
      );
      setSectionDesc(
        ""
      );
      setSectionImg(yadupati);
    }
  };
  return (
    <>
      <div className="container">
        <div className="pioneers-title">JK CEMENT - OVER THE YEARS</div>
        <div className="over-the-years-image-section">
          <div className="over-the-years-image-div">
            <img
              id="over-the-years-image"
              src={sectionimg}
              className="over-the-years-image"
            />
          </div>
          <div className="over-the-years-image-description-section">
            <div className="over-the-years-image-description-section-header">
              {sectionheader}
            </div>
            <div className="over-the-years-image-description-section-desc">
              {sectiondesc}
            </div>
          </div>
        </div>
        <div className="over-the-years-scrollable">
          <div
            id="year1977"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer1977" src={yearpointer} className="yearpointer" />
            1977
          </div>
          <div
            id="year1984"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer1984" src={yearpointer} className="yearpointer" />
            1984
          </div>
          <div
            id="year1992"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer1992" src={yearpointer} className="yearpointer" />
            1992
          </div>
          <div
            id="year2002"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer2002" src={yearpointer} className="yearpointer" />
            2002
          </div>
          <div
            id="year2007"
            className="over-the-years-year"
            onClick={onSelectYear}
          >
            <img id="pointer2007" src={yearpointer} className="yearpointer" />
            2007
          </div>
          <div
            id="year2010"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer2010" src={yearpointer} className="yearpointer" />
            2010
          </div>
          <div
            id="year2011"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer2011" src={yearpointer} className="yearpointer" />
            2011
          </div>
          <div
            id="year2014"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer2014" src={yearpointer} className="yearpointer" />
            2014
          </div>
          <div
            id="year2022"
            className="over-the-years-year"
            onClick={onSelectYear}
            onTouchEnd={onSelectYear}
            onTouchStart={onSelectYear}
          >
            <img id="pointer2022" src={yearpointer} className="yearpointer" />
            2022
          </div>
        </div>
      </div>
      <img src={jkcementlogo} className="over-the-yearsjk-cement-logo" />
    </>
  );
};

export default OverTheYears;
