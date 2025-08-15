import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import tr from './locales/tr/translation.json';
import ru from './locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      ru: { translation: ru },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if key is missing
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
