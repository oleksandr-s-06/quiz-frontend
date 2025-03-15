import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import { EmailForm } from './components/EmailForm.jsx';
import styles from './email.module.css';

export const EmailPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading title={t('email')} text={t('email_text')} className={styles.heading} />
      <EmailForm />
    </div>
  );
};
