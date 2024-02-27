import "./Outlook.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Outlook() {
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
      title: t("future.message1"),
      key: "message1",
    },
    {
      title: t("future.message2"),
      key: "message2",
    },
    {
      title: t("future.message3"),
      key: "message3",
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
    src="https://app.powerbi.com/view?r=eyJrIjoiZjkyOTg1MjEtNGQ1MS00ZjFjLWI2MDMtZDRlNGRiMDcwZjA1IiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
    frameborder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiMTcxOWRkNzAtM2MzNy00NGZkLTliZWUtZjQzODI1ZDhjMGRiIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
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

export default Outlook;
