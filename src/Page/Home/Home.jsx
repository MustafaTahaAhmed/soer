import "./Home.css";
import Card from "./../../Component/CardHome/Card";
import photo from "./../../assest/Images/Home/homescreen.jpg";
import env from "./../../assest/Images/Home/envAndDev.png";
import Footer from "../../Component/footer/Footer";
import { BsBell } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { GiThermometerHot } from "react-icons/gi";
import { BiLandscape } from "react-icons/bi";
import { FaWater } from "react-icons/fa";
import { TiWorldOutline } from "react-icons/ti";
import { GiIsland } from "react-icons/gi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import image from '../../assest/Images/MicrosoftTeams-image (1).png';
function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="container-home">
     <div className="img-cont">
      
      <img
  src={image}
  style={{
    width: '100%',
    
    borderRadius: '0.5rem',
    position: 'relative'
  }}
  alt="img"
/>
</div>
<div class="mouse"></div>
        {/*<div className="textinimage">
          <div className="centerthetext">{t("Navbar.Beatona")}</div>
</div>*/}
     <div className="HomeText"> {t("HomeText.text")}</div>
     
     
     
      <div className="container-btn">
           <a
        href={"./SoER.pdf"}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button className="DownloadButton">{t("btn.btnFirst")}</button>
      </a>
    </div>
    
   
      <div className="apptitle"></div>
      <div className="cardhome">
        <Card
          title={t("Navbar.Environment & Development")}
          icon={BiWorld}
          onClick="/apps/environment-&-development"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Climate Change")}
          icon={GiThermometerHot}
          onClick="/apps/climate-change"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Waste")}
          icon={GiTrashCan}
          onClick="/apps/waste"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Land Resources")}
          icon={BiLandscape}
          onClick="/apps/land-resources"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Water Resources")}
          icon={FaWater}
          onClick="/apps/water-resources"

          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Atmosphere")}
          icon={TiWorldOutline}
          onClick="/apps/the-atmosphere"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Biodiversity")}
          icon={GiPlantsAndAnimals}
          onClick="/apps/biodiversity"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
        <Card
          title={t("Navbar.Coastal & Marine")}
          icon={GiIsland}
          onClick="/apps/coastal-&-marine-environment"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
           <Card
          title={t("Navbar.Outlook")}
          icon={IoDocumentTextOutline}
          onClick="/apps/outlook"
          // description="This application displays the marine water and coastal water quality data measured at different monitoring locations across Kuwait."
        />
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Home;
