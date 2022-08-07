import "./Btech.css";
const AcademicFees = () => {
  return (
    <div className="btech-academic-fees">
      <div className="general">
        <h5 id="FEES" className="courses-heading">
          ACADEMIC FEES
        </h5>
        <div className="btech-table">
          <table className="table table-striped table-hover table-bordered">
            <thead className="bg-white-f9">
              <tr>
                <th>COURSE</th>
                <th>GROSS ACADEMIC FEES</th>
                {/* <th>SPECIALIZATION PREMIUM PROPOSED</th> */}
                <th>
                SPECIALIZATION PREMIUM PAYABLE
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
                {/* <td className="font-weight-600">-</td> */}
                <td className="font-weight-600">-</td>
                <td className="font-weight-600">₹ 1,70,000</td>
              </tr>
              <tr>
                <td className="font-weight-600">
                  B. TECH (CSE) <br />
                  WITH SPECIALIZATION IN CLOUD COMPUTING
                </td>
                <td className="font-weight-600">₹ 1,70,000</td>
                {/* <td className="font-weight-600">₹ 20,000</td> */}
                <td className="font-weight-600">₹ 10,000</td>
                <td className="font-weight-600">₹ 1,80,000</td>
              </tr>
              <tr>
                <td className="font-weight-600">
                  B. TECH (CSE) <br />
                  WITH SPECIALIZATION IN AI/ML
                </td>
                <td className="font-weight-600">₹ 1,80,000</td>
                {/* <td className="font-weight-600">₹ 50,000</td> */}
                <td className="font-weight-600">₹ 25,000</td>
                <td className="font-weight-600">₹ 2,05,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="academic-fees-note">NOTE</div>
        <ul>
          <li>
            Hostel accommodation is optional for all Under-Graduate, Graduate,
            Postgraduate &amp; Doctoral programmes
          </li>
          <li>
            The fee mentioned for all the programmes is excluding hostel and
            mess fee
          </li>
          <li>
            2 Seater AC Hostel (Including Hostel and Mess)- 70000/- Per Semester
          </li>
          <li>
            2 Seater Non-AC Hostel (Including Hostel and Mess) - 45000/- Per
            Semester
          </li>
          <li>
            One time registration fee (Non-Refundable) of Rs. 13000/- for all
            programmes to be paid at the time of admission
          </li>
          <li>Refund policy is as per UGC norms.</li>
          <li>Education loans are available from all banks</li>
          <li>Fees may be paid through any branch of HDFC Bank</li>
        </ul>
      </div>
    </div>
  );
};
export default AcademicFees;
