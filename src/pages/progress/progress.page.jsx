import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import { Progress } from './components/Progress.jsx';
import styles from './progress-page.module.css';

export const ProgressPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Progress />

      <p className={styles.progress}>{t('progress_text')}</p>
    </div>
  );
};
