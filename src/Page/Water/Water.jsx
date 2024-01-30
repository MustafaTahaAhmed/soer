import "./Water.css";
import MyCarousel from "../../Component/MyCarousel/MyCarousel";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import SmallFooter from "../../Component/smallfooter/SmallFooter";
function Water() {
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
      title: t("water.message1"),
      key: "message1",
    },
    {
      title: t("water.message2"),
      key: "message2",
    },
    {
      title: t("water.message3"),
      key: "message3",
    },
    {
      title: t("water.message4"),
      key: "message4",
    },
    {
      title: t("water.message5"),
      key: "message5",
    },
    {
      title: t("water.message6"),
      key: "message6",
    },
    {
      title: t("water.message7"),
      key: "message7",
    },
    {
      title: t("water.message8"),
      key: "message8",
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
            src="https://app.powerbi.com/view?r=eyJrIjoiMTU4MTIxOGUtODQ0OC00MTYwLWJlZDAtZmIzODAzNjAyZDE0IiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiMWE3MzI0MTAtNDhmMC00ZjU5LWIzZjEtM2QxODUwZjc4MjFmIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
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

export default Water;
