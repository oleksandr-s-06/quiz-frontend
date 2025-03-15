import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import { LanguageForm } from './components/LanguageForm.jsx';
import styles from './home.module.css';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading title={t('home_title')} text={t('choose_language')} className={styles.heading} />
      <LanguageForm />
    </div>
  );
};
