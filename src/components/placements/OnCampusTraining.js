import greenunderlinemobile from "../../images/green-underline-mobile.png";
import "./Placements.css";
const OnCampusTraining = () => {
  return (
    <>
      <div className="visionpage-title">
        On-Campus Training
        <img src={greenunderlinemobile} className="greenunderlinemobile" />
      </div>

      <div className="visionpage-summary">
        <div>
          Apart from the various internship programmes provided at SPSU, we also
          provide On Campus Training to our students to make them professionally
          advanced and competent in 360 degree aspects.
        </div>
        <div className="btech-table">
          <table className="table table-striped table-hover table-bordered">
            <thead className="bg-white-f9">
              <tr>
                <th>S.No.</th>
                <th>YEARS</th>
                <th>COMPANY NAME</th>
                <th>PROGRAMME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2019-20</td>
                <td className="font-weight-600">Lido Learning</td>
                <td>Digital Marketing</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>2019-20</td>
                <td className="font-weight-600">Nvidia &amp; Benntt University</td>
                <td>AI &amp; ML</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td> 2017-18, 2016-17</td>
                <td className="font-weight-600">ValeurHR</td>
                <td>HANA Cloud Platform</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>2016-17</td>
                <td className="font-weight-600">Collabera TACT</td>
                <td>
                  IOT &amp; Cloud Technology, Ansys, Digital Marketing, Mobile
                  Technologies
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td> 2016-17, 2015-16</td>
                <td className="font-weight-600">ValeurHR &amp; Six Capital</td>
                <td>Trader Insight Program</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>2013-14</td>
                <td className="font-weight-600">Hinduja Global Solutions</td>
                <td>Content Development</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OnCampusTraining;
