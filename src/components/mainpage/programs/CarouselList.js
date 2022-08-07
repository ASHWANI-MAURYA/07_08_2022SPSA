import { useEffect } from "react";
import "../Mainpage.css";

const CarouselList = (props) => {
  useEffect(() => {
    const allelements = document.getElementsByClassName(
      "programs-accordion-icon-div"
    );
    let panel = allelements[0].previousElementSibling.children[1];

    panel.style.display = "block";
    panel.style.maxHeight = panel.scrollHeight + "px";
    allelements[0].innerText = "-";
    allelements[0].parentElement.style.alignItems = "baseline";
    allelements[0].previousElementSibling.children[0].style.fontWeight = 700;
    allelements[0].previousElementSibling.children[0].style.color = "blue";

    panel = allelements[0].previousElementSibling.children[0];

    panel.style.display = "block";
    panel.style.maxHeight = panel.scrollHeight + "px";
    allelements[0].innerText = "-";
    allelements[0].parentElement.style.alignItems = "baseline";
    allelements[0].previousElementSibling.children[0].style.fontWeight = 700;
    allelements[0].previousElementSibling.children[0].style.color = "blue";
  }, []);

  const onExpand = (evt) => {
    const panel = evt.target.previousElementSibling.children[1];
    if (panel.style.maxHeight) {
      panel.style.display = "none";
      panel.style.maxHeight = null;
      evt.target.innerText = "+";
      evt.target.parentElement.style.alignItems = "center";
      evt.target.previousElementSibling.children[0].style.fontWeight = 100;
      evt.target.previousElementSibling.children[0].style.color = "black";
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
      evt.target.innerText = "-";
      evt.target.parentElement.style.alignItems = "baseline";
      evt.target.previousElementSibling.children[0].style.fontWeight = 700;
      evt.target.previousElementSibling.children[0].style.color = "blue";
    }
  };
  return (
    <div className="programs-carousel-list">
      {props.listitems.map(function (obj, i) {
        return (
          <>
            <div key={i} className="programs-accordion-element">
              <div style={{ width: "90%" }}>
                <div className="programs-accordion-content-div">
                  {obj.title}
                </div>

                <div className="programs-accordion-element-panel">
                  {obj.subtitles.map((obj2, j) => {
                    return (
                      
                      <><a href={obj2.href}>
                      <div key={j} style={{ margin: "5px 0", color: "#000" }}>
                        {obj2.subtitle}
                      </div>
                      </a>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="programs-accordion-icon-div" onClick={onExpand}>
                +
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CarouselList;
