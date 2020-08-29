import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationsEN from "./data/translationsEN.json";
import translationsES from "./data/translationsES.json";

const resources = {
  en: {
    translation: translationsEN
  },
  es: {
    translation: translationsES
  }
};

//TODO check that it recognizes the language
//maybe I should use strings like us-en es-es too
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    nonExplicitSupportedLngs: true,
    lowerCaseLng: true,
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      //TODO maybe cache the language the person chooses?
      excludeCacheFor: ['cimode'],
      caches: ['localStorage'],
      order: ['navigator', 'querystring', 'htmlTag', 'cookie', 'localStorage', 'sessionStorage'],
    },
  });

export default i18n;