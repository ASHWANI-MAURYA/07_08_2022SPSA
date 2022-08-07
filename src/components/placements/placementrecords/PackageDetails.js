import "../Placements.css";
const PackageDetails = () => {
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
        PACKAGE DETAILS
      </button>
      <div className="placements-panel">
        <table className="table table-striped table-hover table-bordered">
          <thead className="bg-white-f9">
            <tr>
              <th className="placement-table-header">S.No</th>
              <th className="placement-table-header">
                Placed in (Name of the Company)
              </th>
              <th className="placement-table-header">Salary Offered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-600"> 1 </td>
              <td className="font-weight-600"> Indian Navy </td>
              <td> 13,40,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 2 </td>
              <td className="font-weight-600"> BYJU&apos;s </td>
              <td> 10,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 3 </td>
              <td className="font-weight-600"> Intellipaat </td>
              <td> 9,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 4 </td>
              <td className="font-weight-600"> TCS Digital </td>
              <td> 7,60,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 5 </td>
              <td className="font-weight-600"> Antier </td>
              <td> 7,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 6 </td>
              <td className="font-weight-600"> Wiley Mthree </td>
              <td> 7,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 7 </td>
              <td className="font-weight-600"> Bel-Air </td>
              <td> 6,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 8 </td>
              <td className="font-weight-600"> Coditas Solutions LLP. </td>
              <td> 6,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 9 </td>
              <td className="font-weight-600"> BYJU&apos;s </td>
              <td> 6,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 10 </td>
              <td className="font-weight-600"> Byjus </td>
              <td> 6,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 11 </td>
              <td className="font-weight-600">
                {" "}
                Mikhvision Digi Solutions LLP{" "}
              </td>
              <td> 6,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 12 </td>
              <td className="font-weight-600">
                {" "}
                In Time Tec Visionsoft Pvt. Ltd.{" "}
              </td>
              <td> 5,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 13 </td>
              <td className="font-weight-600">
                {" "}
                Harman Connected Services Corporation India Pvt. Ltd.{" "}
              </td>
              <td> 5,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 14 </td>
              <td className="font-weight-600"> Celebal Technologies </td>
              <td> 5,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 15 </td>
              <td className="font-weight-600"> Intechzia Pvt. Ltd. </td>
              <td> 5,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 16 </td>
              <td className="font-weight-600"> Persistent Systems </td>
              <td> 4,71,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 17 </td>
              <td className="font-weight-600"> JK Cement Works </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 18 </td>
              <td className="font-weight-600"> Quantana </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 19 </td>
              <td className="font-weight-600"> Globalvox </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 20 </td>
              <td className="font-weight-600"> Cloud Analogy </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 21 </td>
              <td className="font-weight-600"> Veritas Soft </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 22 </td>
              <td className="font-weight-600"> Sree Ganesh Trading Company </td>
              <td> 4,50,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 23 </td>
              <td className="font-weight-600"> Surya Minerals </td>
              <td> 4,20,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 24 </td>
              <td className="font-weight-600"> RKAM & Co. </td>
              <td> 4,00,000 </td>
            </tr>
            <tr>
              <td className="font-weight-600"> 25 </td>
              <td className="font-weight-600"> Shree Madhav Corporation </td>
              <td> 4,00,000 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageDetails;
