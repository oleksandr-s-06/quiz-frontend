import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import { TopicsForm } from './components/TopicsForm.jsx';
import styles from './topics.module.css';

export const TopicsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading title={t('topics_title')} text={t('topics_text')} className={styles.heading} />

      <TopicsForm />
    </div>
  );
};
