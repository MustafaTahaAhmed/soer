import "./Environment.css";
import { useState, useEffect } from "react";
import KeyMessage from "../../Component/KeyMessage/KeyMessage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Environment() {
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
      centerMode: true,

      centerSlidePercentage: 50,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1400, min: 940 },
      items: 3,

      centerMode: true,
      centerSlidePercentage: 50, // Adjust this percentage as needed
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 940, min: 0 },
      items: 1,
      centerMode: true,
      centerSlidePercentage: 50, // Adjust this percentage as needed
      partialVisibilityGutter: 20,
    },
  };
  const EnvironmentMessages = [
    {
      title: t("Environment.message1"),
      key: "message1",
    },
    {
      title: t("Environment.message2"),
      key: "message2",
    },
    {
      title: t("Environment.message3"),
      key: "message3",
    },
    {
      title: t("Environment.message4"),
      key: "message4",
    },
    {
      title: t("Environment.message5"),
      key: "message5",
    },
    {
      title: t("Environment.message6"),
      key: "message6",
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
      {/*<div className="keymsgdesign">
          <MyCarousel data={EnvironmentMessages} />
  </div> */}
<br/>
        <div className="iframe-container">
        {
  lang === "en" ? (
    <iframe
      title="The Driving Force"
      width="100%"
      className="responsive-iframe"
      height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiMzA4OTlhMjYtMjI5OS00NjEzLTk0MDktYWU4MDcwZWY4Yzk3IiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
      frameBorder="0"
      allowFullScreen="true"
    ></iframe>
  ) : (
    <iframe
    title="The Driving Force"
    width="100%"
    className="responsive-iframe"
    height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiMTY3Njc4MGItZDJiOC00OWY1LTkzOTMtZjFjMTc3NGE4Y2IwIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
      frameBorder="0"
      allowFullScreen="true"
    ></iframe>
  )
}

                      
          
          

        </div>
      </div>
    </div>
  );
}

export default Environment;
