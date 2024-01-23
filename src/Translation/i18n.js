import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";
import translationAr from "./ar.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

// Define a function to retrieve the stored language from localStorage
const getStoredLanguage = () => localStorage.getItem("i18nextLng");

// Determine the initial language to use (localStorage or default "en")
const initialLanguage = "ar";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "ar",
});

// Set the language in localStorage if it's not already stored
if (!getStoredLanguage()) {
  localStorage.setItem("i18nextLng", initialLanguage);
}

export default i18n;
