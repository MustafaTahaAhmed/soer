import React, { useState, useEffect } from "react";
import "./BurgerMenu.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../Translation/i18n";
function BurgerMenu(props) {
  const navigate = useNavigate(); // Get the navigate function from the useNavigate hook

  const [selectedNavItem, setSelectedNavItem] = useState(""); // Initialize selectedNavItem state
  const handleNavItemClick = (itemName) => {
    navigate(`/apps/${itemName.replace(/ /g, "-").toLowerCase()}`);
    setSelectedNavItem(itemName); // Set the selectedNavItem to the clicked item
  };
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
    <div className={lang == "en" ? "Main_Burger_div" : "Main_Burger_divar"}>
      <div className="Burger_container">
        <div className="close_burger" onClick={() => props.setIsShown(false)}>
          <AiOutlineCloseCircle
            size={30}
            color="white"
            className="close_burger_icon"
          />
        </div>
      </div>
      <div className="container-nav21">
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Environment and Development" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/environment-&-development`)}
        >
          {t("Navbar.Environment & Development")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Climate Change" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/climate-change`)}
        >
          {t("Navbar.Climate Change")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Waste" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/waste`)}
        >
          {t("Navbar.Waste")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Land Resources" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/land-resources`)}
        >
          {t("Navbar.Land Resources")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Water Resources" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/water-resources`)}
        >
          {t("Navbar.Water Resources")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "The Atmosphere" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/the-atmosphere`)}
        >
          {t("Navbar.Atmosphere")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Biodiversity" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/biodiversity`)}
        >
          {t("Navbar.Biodiversity")}
        </div>

        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Coastal and Marine Environment"
              ? "selected"
              : ""
          }`}
          onClick={() =>  navigate(`/apps/coastal-&-marine-environment`)}
        >
          {t("Navbar.Coastal & Marine")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Outlook" ? "selected" : ""
          }`}
          onClick={() =>  navigate(`/apps/outlook`)}
        >
          {t("Navbar.Outlook")}
        </div>
        <div
          className={`item-nav2-21111 ${
            selectedNavItem === "Coastal and Marine Environment"
              ? "selected"
              : ""
          }`}
        >
           
          <div
            onClick={() => {
              changeLanguage(lang == "en" ? "ar" : "en");
              setLang(lang == "en" ? "ar" : "en");
            }}
          >
            {lang == "en" ? "العربية" : "English"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
