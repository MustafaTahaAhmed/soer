import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageSwitch from "./Page/PageSwitch";
import { useTranslation } from "react-i18next";

import i18n from "./Translation/i18n";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Determine the language and set the HTML dir attribute
  const currentLanguage = i18n.language;
  const htmlDirAttribute = currentLanguage === "ar" ? "rtl" : "ltr";
  return (
    <Router basename="/">
      <html dir={htmlDirAttribute}>
        <PageSwitch />
      </html>
    </Router>
  );
}

export default App;
