import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import styles from './age.module.css';
import { AgeForm } from './components/AgeForm.jsx';

export const AgePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading title={t('age_title')} className={styles.heading} strong />
      <AgeForm />
    </div>
  );
};
