import { fallbackLanguage } from '../i18n/config.js';

export const getLocationLanguage = () => {
  return location.pathname.split('/')?.[1] ?? fallbackLanguage;
};
