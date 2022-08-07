import "../courses/content/btechincse/Btech.css";
import "../courses/content/btechincse/Accordion.css";

const FaqAns = (props) => {
  const onExpand = (evt) => {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let panel; 
    if (width > 576) {
      panel = evt.target.nextElementSibling.children[1];
      if (panel.style.maxHeight) {
        panel.style.display = "none";
        panel.style.maxHeight = null;
        evt.target.innerText = "+";
        evt.target.parentElement.style.alignItems = "center";
        evt.target.nextElementSibling.children[0].style.fontWeight = 100;
        evt.target.nextElementSibling.children[0].style.color = "black";
      } else {
        panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
        evt.target.innerText = "-";
        evt.target.parentElement.style.alignItems = "baseline";
        evt.target.nextElementSibling.children[0].style.fontWeight = 700;
        evt.target.nextElementSibling.children[0].style.color = "blue";
      }
    } else {
      panel = evt.target.previousElementSibling.children[1];
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
    }
  };

  return (
    <div className="general-section admissions-page-general-section">
      <div className="general container">
        <h5 id="FAQS" className="courses-heading">
          FAQS
        </h5>
        <div className="btech-faq">
          <div className="custom-accordion desktop">
            {props.listanswer.map(function (obj, i) {
              return (
                <>
                  <div
                    key={i}
                    className="custom-accordion-element"
                    >
                    <div className="custom-accordion-icon-div" onClick={onExpand}>+</div>
                    <div>
                      <div className="custom-accordion-content-div">
                        {obj.ques}
                      </div>
                      <div className="custom-accordion-element-panel">
                        {obj.ans}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="custom-accordion mobile">
            {props.listanswer.map(function (obj, i) {
              return (
                <>
                  <div
                    key={i}
                    className="custom-accordion-element"
                    >
                    <div>
                      <div className="custom-accordion-content-div">
                        {obj.ques}
                      </div>
                      <div className="custom-accordion-element-panel">
                        {obj.ans}
                      </div>
                    </div>
                    <div className="custom-accordion-icon-div" onClick={onExpand}>+</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqAns;
