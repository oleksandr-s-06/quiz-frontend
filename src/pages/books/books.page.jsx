import { Trans, useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/Heading.jsx';
import styles from './books.module.css';
import { BooksForm } from './components/BooksForm.jsx';

export const BooksPage = () => {
  const { t } = useTranslation();

  const title = (
    <Trans i18nKey='books_title'>
      <strong>{t('hate')}</strong>
    </Trans>
  );

  return (
    <div className={styles.container}>
      <Heading title={title} className={styles.heading} />
      <BooksForm />
    </div>
  );
};
