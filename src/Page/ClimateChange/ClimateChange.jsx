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
     src="https://app.powerbi.com/view?r=eyJrIjoiNDcyODI3MmQtNmY5NC00YmNkLWIwMjctMGQyYmFiZmY0MGRmIiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
     frameborder="0"
     allowFullScreen="true">
     </iframe>
  ) : (
    <iframe 
    title="Report Section"
     width="100%"
     className="responsive-iframe"
     height="100%"
     src="https://app.powerbi.com/view?r=eyJrIjoiY2E5ZGI1ODUtY2VjYS00OWQ5LWI3ZTgtMjg5ZTM1Zjk2M2U5IiwidCI6ImUyNjhiNDg0LWQ0NzEtNDA0MC1iM2E2LTk0ODg0M2RlMWY5MSIsImMiOjl9"
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
