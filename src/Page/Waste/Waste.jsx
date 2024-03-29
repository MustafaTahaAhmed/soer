import "./Waste.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Waste() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
  const atmosphereMessages = [
    {
      title: t("waste-management.message1"),
      key: "message1",
    },
    {
      title: t("waste-management.message2"),
      key: "message2",
    },
    {
      title: t("waste-management.message3"),
      key: "message3",
    },
    {
      title: t("waste-management.message4"),
      key: "message4",
    },
    {
      title: t("waste-management.message5"),
      key: "message5",
    },
    {
      title: t("waste-management.message6"),
      key: "message6",
    },
  
  ];
  return (
    <div>
      <div className="information-content">
        
      <br/>
        <div className="iframe-container">
         
             {
  lang === "en" ? (
    <iframe
    title="Report Section"
    width="100%"
    className="responsive-iframe"
    height="100%"
    src="https://app.powerbi.com/view?r=eyJrIjoiYmMxODkyZDQtMGI5MC00OWZkLTljNTQtMWRhNDVjNTkzM2RhIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
    frameBorder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe
    title="The Driving Force"
    width="100%"
    className="responsive-iframe"
    height="100%"
    src="https://app.powerbi.com/view?r=eyJrIjoiZjc2YTYwZDUtMTZlNy00NjRkLWIzYmYtMTQ2N2U2YmQ5MzhlIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
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

export default Waste;
