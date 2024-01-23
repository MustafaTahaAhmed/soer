import "./Navbar.css";
import logo from "./../../assest/Images/Navbar/EPA-Logo-_1_.png";
import logo1 from "./../../assest/Images/Navbar/emisk-logo.png";
import logo2 from "./../../assest/Images/Navbar/logo-newkuwait.png";
import React, { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { CgCodeClimate } from "react-icons/cg";
import { BiLandscape } from "react-icons/bi";
import { FaWater } from "react-icons/fa";
import { TiWorldOutline } from "react-icons/ti";
import { GiIsland } from "react-icons/gi";
import { GiBiohazard } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useTranslation } from "react-i18next";
import i18n from "../../Translation/i18n";
import { GiNuclearWaste } from "react-icons/gi";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [showburger, setshowburger] = useState(false);

  const [selectedNavItem, setSelectedNavItem] = useState("");

  const handleNavItemClick = (itemName) => {
    navigate(`/apps/${itemName.replace(/ /g, "-").toLowerCase()}`);
    setSelectedNavItem(itemName);
  };

  // let lastScrollTop = 0;
  // let navAll = document.querySelector(".nav-all");

  // function handleScroll() {
  //   const currentScroll =
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   if (window.innerWidth > 800) {
  //     // Check if viewport width is more than 800px
  //     if (currentScroll > lastScrollTop) {
  //       // Scrolling down, hide the navigation
  //       if (navAll) {
  //         navAll.classList.add("nav-hidden");
  //       }
  //     } else {
  //       // Scrolling up, show the navigation
  //       if (navAll) {
  //         navAll.classList.remove("nav-hidden");
  //       }
  //     }
  //   }

  //   lastScrollTop = currentScroll;
  // }

  // window.addEventListener("scroll", handleScroll);
  // window.addEventListener("resize", handleScroll);

  // // Initial check when the page loads
  // handleScroll();

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
  const [fontlang, setfontlang] = useState("item-nav2-2");
  useEffect(() => {
    if (lang == "ar") {
      setfontlang("item-nav2-2ar");
    } else {
      setfontlang("item-nav2-2");
    }
  }, [lang]);

  return (
    <div className="nav-all">
      <div className="container-nav">
        <div className="white-nav">
          <div className="firstcontinnav">
            <div
              onClick={() => {
                setSelectedNavItem("");
                navigate(`/`);
              }}
              className="logo-nav"
            >
              <img src={logo} className="imagelogo" alt="Logo" />
            </div>
            <div
              className={lang == "en" ? "item-nav" : "item-navar"}
              onClick={() => {
                setSelectedNavItem("");
                navigate("/");
              }}
            >
              {t("Navbar.Beatona")}
            </div>
          </div>

          <div className="item-nav2">
            {lang == "en" && (
              <div className="item-nav2-1" onClick={() => changeLanguage("ar")}>
                العربية
              </div>
            )}
            {lang == "ar" && (
              <div className="item-nav2-1" onClick={() => changeLanguage("en")}>
                Eng
              </div>
            )}
            <img src={logo2} className="imagelogo2" alt="Logo" />
            <div
              className="Header_burger_menu"
              onClick={() => setshowburger(!showburger)}
            >
              <RxHamburgerMenu
                className="Header_burger_icon"
                size={35}
                color="#3696B4"
              />
            </div>
          </div>
          {showburger && (
            <BurgerMenu isShown={showburger} setIsShown={setshowburger} />
          )}
        </div>
      </div>
      <div className="container-nav2111">
        <div className="container-nav211"> </div>

        <div className={lang == "en" ? "container-nav2" : "container-nav2ar"}>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Environment & Development" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Environment & Development")}
          >
          
            <div className="over">
            {t("Navbar.Environment & Development") }
      
        </div>
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Climate Change" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Climate Change")}
          >
            
            <div className="over">
            {t("Navbar.Climate Change")}
      
        </div>
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Waste" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Waste")}
          >
            <div className="over">
            {t("Navbar.Waste")}
      
        </div>
         
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Land Resources" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Land Resources")}
          >
              <div className="over">
              {t("Navbar.Land Resources")}
       
        </div>
          
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Water Resources" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Water Resources")
            
          }
          >
       
            <div className="over">
            {t("Navbar.Water Resources")}
    
        </div>
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "The Atmosphere" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("The Atmosphere")}
          >  <div className="over">
          {t("Navbar.Atmosphere")}
    
        </div>
          
          </div>

          <div
            className={`${fontlang} ${
              selectedNavItem === "Biodiversity" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Biodiversity")}
          >
            
            <div className="over">
            {t("Navbar.Biodiversity")}
      
          </div>
          </div>

          <div
            className={`${fontlang} ${
              selectedNavItem === "Coastal & Marine Environment"
                ? "selected"
                : ""
            }`}
            onClick={() => handleNavItemClick("Coastal & Marine Environment")}
          >
            
            <div className="over">
            {t("Navbar.Coastal & Marine")}
        
          </div>
          </div>
          <div
            className={`${fontlang} ${
              selectedNavItem === "Outlook" ? "selected" : ""
            }`}
            onClick={() => handleNavItemClick("Outlook")}
          >
            <div className="over">
         {t("Navbar.Outlook")}
      
         </div>
            
          </div>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
}

export default Navbar;
