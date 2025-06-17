import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import en from './en.json';
import fr from './fr.json';
import tm from './tm.json';
import jn from './jn.json';
import sp from './sp.json';
import tl from './tl.json';






i18n
  .use(initReactI18next) 
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      tm: { translation: tm },
      tl: { translation: tl },
      jn: { translation: jn },
      sp: { translation: sp },

    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
