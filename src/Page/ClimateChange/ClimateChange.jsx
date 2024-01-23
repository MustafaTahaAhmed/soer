import BlueNAv from "../../Component/BlueNAv/BlueNAv";
import "./ClimateChange.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function ClimateChange() {
  const [data, setData] = useState("DRIVERS");
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
      title: t("climate-change.message1"),
      key: "message1",
    },
    {
      title: t("climate-change.message2"),
      key: "message2",
    },
    {
      title: t("climate-change.message3"),
      key: "message3",
    },
    {
      title: t("climate-change.message4"),
      key: "message4",
    },
    {
      title: t("climate-change.message5"),
      key: "message5",
    },
   
  ];

  return (
    <div>
     <div className="information-content">
        {/*<div className="keymsgdesign">
          <MyCarousel data={atmosphereMessages} />
        </div>*/}
        <br/>
        <div className="iframe-container">
         
          { lang === "en" ? (
     <iframe
     title="Report Section"
     width="100%"
     className="responsive-iframe"
     height="100%"
     src="https://app.powerbi.com/view?r=eyJrIjoiNTBiNDExNDMtNWU3NC00ZTY3LWJhMTgtYjY4ZmQwMzg1MGI0IiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
     frameborder="0"
     allowFullScreen="true">
     </iframe>
  ) : (
    <iframe 
    title="Report Section"
     width="100%"
     className="responsive-iframe"
     height="100%"
     src="https://app.powerbi.com/view?r=eyJrIjoiMGQ2ZDJiMTgtM2M1Yi00MDViLTg1NDktZmQ3ODBmOTk4ZGUxIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
     frameborder="0"
     allowFullScreen="true">
    </iframe>
  )
}
        </div>
      </div>
    </div>
  );
}

export default ClimateChange;
