import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
// import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";
import "./MagazineElements.css";
import UniversityMagazine from "../../../src/images/University Magazine Elements 2022.pdf";
const MagazineElements = () => {
  return (
    <>
      {/* <Greybar /> */}
      <Whitebar />
      <Menubar />
      <div className="space">
      <iframe
        src={`${UniversityMagazine}#view=fitH`}
        width="80%"
        height="100%"

        className="feesstructurepdf"
      />
      </div>
      
      <ContactUs />
      <Copyright />
    </>
  );
};
export default MagazineElements;
