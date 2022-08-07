import "../Placements.css";
const TopPlacements = (props) => {
  const onExpand = (evt) => {
    evt.target.classList.toggle("placements-active");
    const panel = evt.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <div>
      <button className="placements-accordion" onClick={onExpand}>
        {props.title}
      </button>
      <div className="placements-panel">
        <div className="placements-student-card-section">
          {props.listitems.map((obj, i) => {
            return (
              <div key={i} className="placements-student-card">
                <div className="placements-student-pic-div">
                  <img
                    src={obj.studentpic}
                    className="placements-student-pic"
                  />
                </div>
                <div className="placements-student-studentname">
                  {obj.studentname}
                </div>
                <div className="placements-student-studentbranch">
                  {obj.studentbranch}
                </div>
                <div className="placements-student-companyname">
                  {obj.companyname}
                </div>
                <div className="placements-student-ctc">{obj.ctc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPlacements;
