import "./Coastal.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Coastal() {
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
    src="https://app.powerbi.com/view?r=eyJrIjoiZWRlNjM5ODgtNjRkMy00Mjc3LWIyMTEtMWY3ZGE2M2U4NTliIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
    frameborder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiYWI1MTQ1OTAtODkzZC00ZDc5LThiYWMtOGFmYzZmMWRkOWMyIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
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

export default Coastal;
