import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa as mensagens traduzidas
import enMessages from "./locales/en.json";
import ptMessages from "./locales/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enMessages,
    },
    pt: {
      translation: ptMessages,
    },
  },
  lng: "en", // Define o idioma padrão
  fallbackLng: "en", // Define o idioma padrão caso o idioma do usuário não esteja disponível
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
