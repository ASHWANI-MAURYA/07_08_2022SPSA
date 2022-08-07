import BannerSubPage from "../banner/BannerSubPage";
import ContactUs from "../footer/ContactUs";
import Copyright from "../footer/Copyright";
import Greybar from "../header/Greybar";
import Menubar from "../header/Menubar";
import Whitebar from "../header/Whitebar";

const Rainbow = () => {
  return (
    <>
      <Greybar />
      <Whitebar />
      <Menubar />
      <BannerSubPage
        bannerimage={
          "https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/rainbow/rainbow.jpg"
        }
        greentext="PROJECT"
        bluetext="RAINBOW"
      />
      <div
        className="visionpage-summary container"
        style={{ textAlign: "justify", marginBottom: "40px" }}>
        <div className='rainbow-image-div'>
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/rainbow/P-2.jpg" style={{ width: "200px" }} />
        </div>
        <div>
          Women’s economic activity is rooted mainly in socio-cultural,
          historical, physiological and economic considerations. Hence, looking
          at women’s employment from the labour market point of view alone is
          not enough. The society needs to look at this problem with the
          intentions of introducing a transactional as well as transformational
          intervention at socio- cultural, political and economic levels.
          <br/><br/>
          Researchers noted that understanding differences among women is
          critical to crafting policy and making public investments that meet
          their needs and expand their choices and opportunities. Hence, this
          project has a wider impact and multiplier effect. Professional
          education is considered to be the entry pass for starting one’s
          career. Living in urban areas provide a certain level of opportunities
          and support services that are very crucial for young women to start
          and continue their careers even when family and society expects women
          to play many other roles as well.
          <br/><br/> Therefore, to support women and
          develop structures within universities that allow women to follow
          their careers, RAINBOW aims at implementing centres in the existing
          structures of the participating Indian project partners. These centres
          are expected to serve as a career counselling and guidance centres for
          young women.
        </div>
        <br/>
        <div>
            <b>Duration :</b> 15.11.2018 - 14.11.2021<br/>
            <b>Funding authority :</b> EACEA – Education, Audiovisual and Culture Executive Agency<br/>
            <b>Project/reference number :</b> 598453-EPP-1-2018-1-AT-EPPKA2-CBHE-JP<br/>
            <b>Project Website :</b> www.projectrainbow.in
        </div>
        <br/>
        <h5 className="heading" style={{ textAlign: "center", color: "blue" }}>Project Coordinators</h5>
        <br/>
        <div className="rainbow-project-coordinators-section">
            <div className="rainbow-project-coordinators-card">
                <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/rainbow/P-4.jpg"/>
                <div className="rainbow-project-coordinators-card-title">Dr. Shweta Lalwani</div>
            </div>
            <div className="rainbow-project-coordinators-card">
                <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/rainbow/P-5.jpg"/>
                <div className="rainbow-project-coordinators-card-title">Dr. Shubham Goswami</div>
            </div>
        </div>
        <br/>
        <h5 className="heading">Main Aims of RAINBOW</h5>
        <ul>
            <li>To examine the influence of perceived career barriers and support young women’s career planning in the university system and outside.</li>
            <li>To design and implement applicable frameworks that intervenes and counsel young women of both environments.</li>
            <li>To install the capacities (RAINBOW Centres) in the participating Indian universities to counsel young women in the designed framework.</li>
            <li>To Identify regulations and create awareness of best practices and models operating in EU HEIs for capacity building of young women in the university system and outside of it.</li>
            <li>To develop materials and training programmes for women associations and agencies working for young women in the unprivileged social stratum.</li>
        </ul>
        <br/>
        <h5 className="heading">Target Groups of RAINBOW</h5>
        <ul>
            <li>Women counsellors and women who have full time enrolment in Indian university education or are alumni of these universities</li>
            <li>Counsellors and associations / NGOs working on women empowerment and inclusion and their clients</li>
        </ul>
        <br/>
        <h5 className="heading">Target Groups of RAINBOW</h5>
        <ul>
            <li>Development of the intervention and counselling Methodology</li>
            <li>Creation of career counselling and guidance centres</li>
            <li>Developing materials and conducting train-the-trainer programmes</li>
            <li>Providing and evaluating counselling services in India</li>
        </ul>
        <br/>
        <h5 className="heading">Project Partners</h5>
        <ul>
            <li>FH JOANNEUM University of Applied Sciences, AUSTRIA</li>
            <li>University of Jyväskylä, FINLAND</li>
            <li>Incoma, SPAIN</li>
            <li>Sir Padampat Singhania University, INDIA</li>
            <li>Birla Institute of Management Technology, INDIA</li>
            <li>NIRMA University, INDIA</li>
        </ul>
        <br/>
        <div className='rainbow-image-div'>
            <img src="https://spsuwebsiteassets.s3.ap-south-1.amazonaws.com/frontend_assets/images/rainbow/P-3.jpg" style={{ width: "400px" }} />
        </div>
        <br/>
        <p>The European Commission support for the production of this publication does not constitute an endorsement of the contents which reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.</p>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Rainbow;
