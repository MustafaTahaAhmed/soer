import "./Land.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Land() {
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
      title: t("land.message1"),
      key: "message1",
    },
    {
      title: t("land.message2"),
      key: "message2",
    },
    {
      title: t("land.message3"),
      key: "message3",
    },
    {
      title: t("land.message4"),
      key: "message4",
    },
    {
      title: t("land.message5"),
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
    src="https://app.powerbi.com/view?r=eyJrIjoiN2U1NmE5ZDctODBlNi00NjMyLWJmZjEtZWFkMjZiOTdjNTMzIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
    frameBorder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe   title="Report Section"
    width="100%"
    className="responsive-iframe"
    height="100%"
     src="https://app.powerbi.com/view?r=eyJrIjoiMmRlZTVjNDgtYjk5Zi00ZWFiLTllOTEtYzY2YjZiYTFhNmI5IiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
frameborder="0" allowFullScreen="true"></iframe>
  )
}
        </div>
      </div>
    </div>
  );
}

export default Land;
