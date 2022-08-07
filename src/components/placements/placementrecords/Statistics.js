import "../Placements.css";
const Statistics = (props) => {
  return (
    <>
      <div className="coursepage-title">{props.title}</div>
      <div className="placements-stats-section">
        <div className="placements-stats-tile">
          <div className="placements-stats-tile-title">AVERAGE CTC</div>
          <div className="placements-stats-tile-value">{props.value1}</div>
          <div className="placements-stats-tile-tile-footer">
            Lacs Per Annum
          </div>
        </div>
        <div className="placements-stats-tile">
          <div className="placements-stats-tile-title">HIGHEST CTC</div>
          <div className="placements-stats-tile-value">{props.value2}</div>
          <div className="placements-stats-tile-tile-footer">
            Lacs Per Annum
          </div>
        </div>
        <div className="placements-stats-tile">
          <div className="placements-stats-tile-title">% STUDENTS</div>
          <div className="placements-stats-tile-value">{props.value3}</div>
          <div className="placements-stats-tile-tile-footer">
            multiple job offers
          </div>
        </div>
        <div className="placements-stats-tile">
          <div className="placements-stats-tile-title">% STUDENTS</div>
          <div className="placements-stats-tile-value">{props.value4}</div>
          <div className="placements-stats-tile-tile-footer">
          earning 4 LPA or more
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
