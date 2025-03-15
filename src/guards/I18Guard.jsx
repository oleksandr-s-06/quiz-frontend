import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router';
import { languages } from '../i18n/config.js';
import { useLanguage } from '../i18n/useLanguage.js';
import { setLanguageState } from '../utils/storage-helpers.js';

export const I18Guard = ({ children }) => {
  const language = useLanguage();
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const currentI18nLang = i18n.resolvedLanguage;
  const prevLangRef = useRef(currentI18nLang);

  if (!languages.includes(language) || !language) {
    // if 'lang' is not in your allowed list, navigate to Home
    return <Navigate to='en' replace />;
  }

  // If route param differs from i18n, sync them
  // We do this in an effect to avoid synchronous re-render loops
  useEffect(() => {
    if (i18n.resolvedLanguage !== language) {
      setLanguageState(language);
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  // Listen for i18n changes. If it changes, update the route param
  useEffect(() => {
    const curPath = location.pathname.split('/').slice(2).join('/');

    if (prevLangRef.current !== currentI18nLang) {
      prevLangRef.current = currentI18nLang;
      // If the route param is not the same, navigate
      if (currentI18nLang !== language) {
        navigate(
          {
            pathname: '/' + currentI18nLang + '/' + curPath,
            search: location.search,
            hash: location.hash,
          },
          { replace: true },
        );
      }
    }
  }, [currentI18nLang, language, navigate]);

  return <>{children}</>;
};
