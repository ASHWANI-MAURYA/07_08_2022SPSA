import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/mainpage/Homepage";
import VisionPage from "./components/aboutus/VisionPage";
import Course from "./components/courses/Course";
import Collaboration from "./components/collaborations/Collaboration";
import Placements from "./components/placements/Placements";
import Admission from "./components/admissions/Admission";
import AboutUniversity from "./components/aboutus/AboutUniversity";
import ChairpersonMessage from "./components/aboutus/ChairpersonMessage";
import FounderChairpersonMessage from "./components/aboutus/FounderChairpersonMessage";
import PresidentMessage from "./components/aboutus/PresidentMessage";
import BoardOfManagement from "./components/aboutus/BoardOfManagement";
import AdvisoryCouncil from "./components/aboutus/AdvisoryCouncil";
import UniversityStatus from "./components/aboutus/UniversityStatus";
import Academics from "./components/academics/Academics";
import Facilities from "./components/facilities/Facilities";
import Research from "./components/research/Research";
import NAACVisit from "./components/naacvisit/NAACVisit";
import RainbowConsortiumMeeting from "./components/news/news";
import Openmic from "./components/openmic/openmic";
import MagazineElements from "./components/MagazineElements/MagazineElements";
import CareerOpportunities from "./components/CareerOpportunities/CareerOpportunities";
import InternationalAffairs from "./components/internationalaffairs/InternationalAffairs";
import SHRC from "./components/others/SHRC";
import IEEE from "./components/others/IEEE";
import NAD from "./components/others/NAD";
import NIRF from "./components/others/NIRF";
import DownloadForm from "./components/others/DownloadForm";
import ContactUs from "./components/others/ContactUs";
import RTI from "./components/others/RTI";
import TermsAndConditions from "./components/others/TermsAndConditions";
import ExamResult from "./components/others/ExamResult";
import Rainbow from "./components/others/Rainbow";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/AboutUs/VisionAndMission"
            element={<VisionPage />}
            exact
          />
          <Route
            path="/AboutUs/Organization/FounderChairpersonMessage"
            element={<FounderChairpersonMessage />}
            exact
          />
          <Route
            path="/AboutUs/Organization/ChairpersonMessage"
            element={<ChairpersonMessage />}
            exact
          />
          <Route
            path="/AboutUs/Organization/PresidentMessage"
            element={<PresidentMessage />}
            exact
          />
          <Route
            path="/AboutUs/Organization/BoardOfManagement"
            element={<BoardOfManagement />}
            exact
          />
          <Route
            path="/AboutUs/Organization/AdvisoryCouncil"
            element={<AdvisoryCouncil />}
            exact
          />
          <Route path="/about-university" element={<AboutUniversity />} exact />
          <Route
            path="/AboutUs/UniversityStatus"
            element={<UniversityStatus />}
            exact
          />
          <Route path="/:branch/:graduation" element={<Course />} exact />
          <Route path="/:graduation" element={<Course />} exact />
          <Route path="/Physics" element={<Course />} exact />
          <Route path="/Chemistry" element={<Course />} exact />
          <Route path="/Mathematics" element={<Course />} exact />
          <Route
            path="/bachelor-business-administration-course-degree"
            element={<Course />}
            exact
          />
          <Route
            path="/master-business-administrations"
            element={<Course />}
            exact
          />
          <Route path="/PhDInManagement" element={<Course />} exact />
          <Route
            path="/Collaborations/:collaborationtype"
            element={<Collaboration />}
            exact
          />
          <Route path="/Placements/:item" element={<Placements />} exact />
          <Route
            path="/Admissions/:admissiontype"
            element={<Admission />}
            exact
          />
          <Route
            path="/Academics/:academicstype"
            element={<Academics />}
            exact
          />
          <Route
            path="/Facilities/:facilitiestype"
            element={<Facilities />}
            exact
          />
          <Route path="/Research/:researchtype" element={<Research />} exact />
          <Route path="/NAACVisit" element={<NAACVisit />} exact />
          <Route path="/RainbowConsortiumMeeting" element={<RainbowConsortiumMeeting />} exact />
          <Route path="/CareerOpportunities" element={<CareerOpportunities />} exact />
          <Route path="/openmic" element={<Openmic />} exact />
          <Route path="/MagazineElements" element={<MagazineElements />} exact />
          <Route
            path="/InternationalAffairs"
            element={<InternationalAffairs />}
            exact
          />
          <Route path="/SHRC" element={<SHRC />} exact />
          <Route path="/IEEE" element={<IEEE />} exact />
          <Route path="/NAD" element={<NAD />} exact />
          <Route path="/NIRF" element={<NIRF />} exact />
          <Route path="/DownloadForm" element={<DownloadForm />} exact />
          <Route path="/ContactUs" element={<ContactUs />} exact />
          <Route path="/RTI" element={<RTI />} exact />
          <Route
            path="/TermsAndConditions"
            element={<TermsAndConditions />}
            exact
          />
          <Route path="/ExamResult" element={<ExamResult />} exact />
          <Route path="/Rainbow" element={<Rainbow />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
