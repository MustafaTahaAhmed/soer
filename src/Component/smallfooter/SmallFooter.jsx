import "./SmallFooter.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assest/Images/Navbar/EPA-Logo-_1_.png";
import logo1 from "../../assest/Images/Navbar/emisk-logo.png";
import logo2 from "../../assest/Images/logo3is_1.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../../Translation/i18n";
function SmallFooter() {
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
    // <div className="footer2">

    <div className="footer-cont1">
     
        <img src={logo2} alt="logo" className="footer-logo2" />
        <div className="copyright">
          {/* &copy;{" "} */}
          <a href="https://3isolution.org/" target="_blank"    className="powered-by-link" rel="noopener noreferrer">
            Powered by 3iSolution
          </a>
        </div>
     
    {/* </div> */}
    </div>
  );
  
}

export default SmallFooter;
