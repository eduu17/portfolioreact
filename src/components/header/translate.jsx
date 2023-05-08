import React from "react";
import { useTranslation } from "react-i18next";
import { Gi3DGlasses } from "react-icons/gi";

export function Greeting() {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t("welcome")} <Gi3DGlasses /> {t("name")}{" "}
        <strong>{t("real-name")}</strong>
      </h1>
      <h2>
        {t("am")} <strong>{t("work")}</strong> {t("type-work")}
      </h2>
    </>
  );
}

export function Language() {
  const { t } = useTranslation();

  return (
    <>
      <h2>
        {t("language-work")} <strong>{t("work-with")}</strong>
      </h2>
    </>
  );
}

export function Socialmedia() {
  const { t } = useTranslation();

  return (
    <>
      <h2>
        {t("find")} <strong>{t("find-me")}</strong> {t("on")}
      </h2>
    </>
  );
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <button onClick={handleLanguageChange}>
        {i18n.language === "en" ? "pt" : "en"}
      </button>
    </>
  );
}
