import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'assets/locales/en.json';
import fa from 'assets/locales/fa.json';

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: en
    },
    fa: {
      translation: fa
    }
  }
});

export default i18next;
