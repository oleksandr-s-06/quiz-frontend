export const fallbackLanguage = 'en';
export const languages = [fallbackLanguage, 'fr', 'de', 'es'];
export const defaultNamespace = 'translation';

export function getOptions(language = fallbackLanguage, namespace = defaultNamespace) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng: fallbackLanguage,
    lng: language,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespace,
  };
}
