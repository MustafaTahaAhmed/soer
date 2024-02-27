import "./Atmosphere.css";
import { useState, useEffect } from "react";
import KeyMessage from "../../Component/KeyMessage/KeyMessage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import SmallFooter from "../../Component/smallfooter/SmallFooter";

function Atmosphere() {
  const [selectedTab, setSelectedTab] = useState("DRIVERS");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 940 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 940, min: 0 },
      items: 1,
    },
  };
  const atmosphereMessages = [
    {
      title: t("Atmosphere.message1"),
      key: "message1",
    },
    {
      title: t("Atmosphere.message2"),
      key: "message2",
    },
    {
      title: t("Atmosphere.message3"),
      key: "message3",
    },
    {
      title: t("Atmosphere.message4"),
      key: "message4",
    },
 
  ];

  // Define content for each tab
  const tabContents = {
    DRIVERS: (
      <div>
        {/* Content for the DRIVERS tab */}
        <h2>DRIVERS Content</h2>
        {/* Add your specific content here */}
      </div>
    ),
    PRESSURES: (
      <div>
        {/* Content for the PRESSURES tab */}
        <h2>PRESSURES Content</h2>
        {/* Add your specific content here */}
      </div>
    ),
    STATES: (
      <div>
        {/* Content for the STATES tab */}
        <h2>STATES Content</h2>
        {/* Add your specific content here */}
      </div>
    ),
    IMPACTS: (
      <div>
        {/* Content for the IMPACTS tab */}
        <h2>IMPACTS Content</h2>
        {/* Add your specific content here */}
      </div>
    ),
    RESPONSES: (
      <div>
        {/* Content for the RESPONSES tab */}
        <h2>RESPONSES Content</h2>
        {/* Add your specific content here */}
      </div>
    ),
  };

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      {/* <BlueNAv /> */}
      <div className="information-content1">
        <br/>

        <div className="iframe-container">
         
                {
  lang === "en" ? (
    <iframe
    title="Report Section"
    width="100%"
    className="responsive-iframe"
    height="100%"
    src="https://app.powerbi.com/view?r=eyJrIjoiYzNmZGE5YTktZmI2OC00NzQwLWEwNDAtNDM0OTVlM2RiOTRhIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
    frameborder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiNjdkNDZlMDgtMTQ5OC00YmZkLWE4ZDItNzIzYmExMGVmMzQyIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
  )
}
        </div>
      </div>
    </div>
  );
}

export default Atmosphere;
