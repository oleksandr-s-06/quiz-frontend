import { useParams } from 'react-router';
import { fallbackLanguage } from './config';

export const useLanguage = () => {
  const params = useParams();

  return (Array.isArray(params?.lang) ? params?.lang[0] : params?.lang) || fallbackLanguage;
};
