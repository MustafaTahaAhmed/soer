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
    src="https://app.powerbi.com/view?r=eyJrIjoiZWVmNzM1ZjEtODgyMy00Y2E3LTk4ZjctZmJkNWUxYzJjMzRiIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
    frameborder="0"
    allowFullScreen="true"
  ></iframe>
  ) : (
    <iframe
            title="Report Section"
            width="100%"
            className="responsive-iframe"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiNzBlZjVkOTEtZjQ4NC00ZTU0LWIwZWUtYzY1NGJhZjMzZWMwIiwidCI6IjNlOTQyYWU0LWNkOTMtNGQzNy1iZTJmLTY5MzllNDNjMTRiNyJ9"
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
