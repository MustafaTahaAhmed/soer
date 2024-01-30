import React, { useLayoutEffect, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../Component/Navbar/Navbar";
/*import Jordan from "./Jordan/Jordan";
import Information from "./Information/Information";
import Performance from "./Performance/Performance";*/
import ClimateChange from "./ClimateChange/ClimateChange";
/*import Pollution from "./Pollution/Pollution";*/
import Water from "./Water/Water";
import Biodiversity from "./Biodiversity/Biodiversity";
/*import Forest from "./Forest/Forest";*/
import Land from "./Land/Land";
/*import Greeneconomy from "./Greeneconomy/Greeneconomy";
import Finance from "./Finance/Finance";*/
import Atmosphere from "./Atmosphere/Atmosphere";
import Environment from "./Environment/Environment";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import Waste from "./Waste/Waste";
import Outlook from "./Outlook/Outlook";
import Coastal from "./Coastal/Coastal";
import Footer from "../Component/footer/Footer";

function PageSwitch() {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);
  const [selectedTab, setSelectedTab] = useState("DRIVERS");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  useLayoutEffect(() => {
    setKey(location.pathname);
  }, [location.pathname]);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navbar />
      <div
        className={lang == "en" ? "scrollup" : "scrollupar"}
        onClick={scrollToTop}
      >
        <IoIosArrowDropupCircle size={80} color="#3696b4" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/apps/" element={<Jordan />} />
        <Route
          path="/apps/EnvironmentandDevelopment"
          element={<Information />}
        />*/}
        <Route
          path="/apps/coastal-&-marine-environment"
          element={<Coastal />}
        />
        <Route path="/apps/outlook" element={<Outlook />} />
        {/*<Route
          path="/apps/environmental-performance"
          element={<Performance />}
        />*/}
        <Route path="/apps/climate-change" element={<ClimateChange />} />
        {/*<Route
          path="/apps/pollution-section-responses"
          element={<Pollution />}
        />*/}
        <Route path="/apps/water-resources" element={<Water />} />
        <Route path="/apps/biodiversity" element={<Biodiversity />} />
        {/*<Route path="/apps/forest-section-drivers" element={<Forest />} />*/}

        <Route path="/apps/land-resources" element={<Land />} />
        {/*<Route path="/apps/green-section-drivers" element={<Greeneconomy />} />*/}
        {/*<Route
          path="/apps/sustainable-finance-section-drivers"
          element={<Finance />}
        />*/}
        <Route
          path="/apps/environment-&-development"
          element={<Environment />}
        />
        <Route path="/apps/waste" element={<Waste />} />
        <Route path="/apps/the-atmosphere" element={<Atmosphere />} />
      </Routes>
      <Footer />
    </>
  );
}
export default PageSwitch;
