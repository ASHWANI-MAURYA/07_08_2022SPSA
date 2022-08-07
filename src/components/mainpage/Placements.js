import "./Mainpage.css";

const Placements = () => {
  return (
    <div className="placements">
      <div className="container">
        <div className="placements-title pioneers-title">PLACEMENTS</div>
        <div className="placements-subtitle">
        SPSU offers stellar placement opportunities to students, providing them with a launchpad for a successful career.
        </div>
        <div className="placement-stats-section">
          <div className="placement-stats-box">
            <div className="placement-stat-title">Average CTC</div>
            <div className="placement-stat-number blue-stat">₹4.3</div>
            <div className="placement-lacs-per-year">Lacs Per Annum</div>
          </div>
          <div className="placement-stats-box">
            <div className="placement-stat-title">Highest CTC</div>
            <div className="placement-stat-number yellow-stat">₹13.4</div>
            <div className="placement-lacs-per-year">Lacs Per Annum</div>
          </div>
          <div className="placement-stats-box">
            <div className="placement-stat-title">% students with multiple job offers</div>
            <div className="placement-stat-number pink-stat">50.5%</div>
            <div className="placement-lacs-per-year">Academic Year 2022</div>
          </div>
          <div className="placement-stats-box">
            <div className="placement-stat-title">% students earning 4 LPA or more</div>
            <div className="placement-stat-number light-blue-stat">41.9%</div>
            <div className="placement-lacs-per-year">Academic Year 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
