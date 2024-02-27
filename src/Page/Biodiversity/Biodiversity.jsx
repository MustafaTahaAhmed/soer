import "./Biodiversity.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Biodiversity() {
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
      title: t("biodiversity.message1"),
      key: "message1",
    },
    {
      title: t("biodiversity.message2"),
      key: "message2",
    },
    {
      title: t("biodiversity.message3"),
      key: "message3",
    },
    {
      title: t("biodiversity.message4"),
      key: "message4",
    },
    {
      title: t("biodiversity.message5"),
      key: "message5",
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
            src="https://app.powerbi.com/view?r=eyJrIjoiNGM0YTk5ZDEtMGY4OS00YTIzLWIzNDgtZmM2OTA0Y2RhMmZjIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzM0OTUyNGUtOGVmOC00NzFjLWI0NGEtN2I5Zjk3ZGJhYjEwIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
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

export default Biodiversity;
