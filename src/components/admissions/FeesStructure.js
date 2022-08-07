import feesstructure from "../others/FeeStructure.pdf";
import "./Admissions.css";
const FeesStructure = () => {
  return (
    <>
      {/* <h5 className="heading" style={{ margin: "40px 0" }}>SCHOOL OF ENGINEERING</h5>
      <div className="btech-table">
        <table className="table table-striped table-hover table-bordered">
          <thead className="bg-white-f9">
            <tr>
              <th>COURSE</th>
              <th>CURRENT GROSS ACADEMIC FEES</th>
              <th>SPECIALIZATION PREMIUM PROPOSED</th>
              <th>
                SPE. PREMIUM PAYABLE <br />
                (POST 50% DISCOUNT)
              </th>
              <th>
                TOTAL NET FEE <br />
                (WITHOUT SCHOLARSHIP)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-600">B. TECH (CSE)</td>
              <td className="font-weight-600">₹ 1,70,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 1,70,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                B. TECH (CSE) <br />
                IN CLOUD
              </td>
              <td className="font-weight-600">₹ 1,70,000</td>
              <td className="font-weight-600">₹ 20,000</td>
              <td className="font-weight-600">₹ 10,000</td>
              <td className="font-weight-600">₹ 1,80,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                B. TECH (CSE) <br />
                IN AI/ML
              </td>
              <td className="font-weight-600">₹ 1,80,000</td>
              <td className="font-weight-600">₹ 50,000</td>
              <td className="font-weight-600">₹ 25,000</td>
              <td className="font-weight-600">₹ 2,05,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                B. TECH (ECE) <br />
                IN EMBEDDED SYSTEMS &amp; IOT
              </td>
              <td className="font-weight-600">₹ 1,70,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 10,000</td>
              <td className="font-weight-600">₹ 1,80,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                B. TECH <br />
                IN MECHANICAL ENGINEERING
              </td>
              <td className="font-weight-600">₹ 1,70,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 10,000</td>
              <td className="font-weight-600">₹ 1,80,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                B. TECH <br />
                IN MINING ENGINEERING
              </td>
              <td className="font-weight-600">₹ 1,70,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 10,000</td>
              <td className="font-weight-600">₹ 1,80,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">
                M. TECH <br />
                ALL BRANCHES
              </td>
              <td className="font-weight-600">₹ 89,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 89,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 className="heading" style={{ margin: "40px 0" }}>SCHOOL OF MANAGEMENT</h5>
      <div className="btech-table">
        <table className="table table-striped table-hover table-bordered">
          <thead className="bg-white-f9">
            <tr>
              <th>COURSE</th>
              <th>CURRENT GROSS ACADEMIC FEES</th>
              <th>SPECIALIZATION PREMIUM PROPOSED</th>
              <th>
                SPE. PREMIUM PAYABLE <br />
                (POST 50% DISCOUNT)
              </th>
              <th>
                TOTAL NET FEE <br />
                (WITHOUT SCHOLARSHIP)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-600">BBA</td>
              <td className="font-weight-600">₹ 1,20,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 1,80,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">MBA</td>
              <td className="font-weight-600">₹ 1,93,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 1,93,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">MBA Part-Time</td>
              <td className="font-weight-600">₹ 1,40,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">₹ 35,000</td>
              <td className="font-weight-600">₹ 1,75,000</td>
            </tr>
            <tr>
              <td className="font-weight-600">MBA in Analytics</td>
              <td className="font-weight-600">₹ 1,93,000</td>
              <td className="font-weight-600">-</td>
              <td className="font-weight-600">35,000</td>
              <td className="font-weight-600">₹ 2,28,000</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <iframe
        src={`${feesstructure}#view=fitH`}
        width="100%"
        className="feesstructurepdf"
      />
      <div>Please contact us for more details on scholarship policy</div>
    </>
  );
};

export default FeesStructure;
