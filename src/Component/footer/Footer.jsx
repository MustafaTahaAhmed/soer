import "./Footer.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assest/Images/Navbar/EPA-Logo-_1_.png";
import logo1 from "../../assest/Images/Navbar/MicrosoftTeams-image-removebg-preview.png";
import logo2 from "../../assest/Images/Navbar/logo-footer21.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../../Translation/i18n";
import logo4 from "../../assest/Images/logo3is_1.png";
function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    // Set the language in i18n
    i18n.changeLanguage(lng);

    // Set the language in local storage
    localStorage.setItem("i18nextLng", lng);
  };

  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  return (
    <div className="footer-cont">
      <div className="footer">
        <div className="footer-left">
        <a href="https://epa.gov.kw/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="logo" className="footer-logo" /></a>
          <div className="footer-left-top">
            <div className="footetitle1">
              {t("footer.Environment Public Authority")}
            </div>
            <div className="footetitle2">
              {t("footer.Environmental Data Management")}
            </div>
            <div className="footetitle2">
              {t("footer.Environmental Data Department")}
            </div>
          </div>
          
        </div>

        <div className="footer-left">
        <a href="https://www.unep.org/regions/west-asia" target="_blank" rel="noopener noreferrer">
          <img src={logo1} alt="logo" className="footer-logo1" /></a>
          <div className="footer-left-top"></div>
        </div>
   



      </div>
    </div>
  );
}

export default Footer;
