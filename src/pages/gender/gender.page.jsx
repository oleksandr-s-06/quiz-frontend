import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import { GenderForm } from './components/GenderForm.jsx';
import styles from './gender.module.css';

export const GenderPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading title={t('gender_title')} text={t('gender_text')} className={styles.heading} />
      <GenderForm />
    </div>
  );
};
