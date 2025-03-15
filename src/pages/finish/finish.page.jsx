import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import DownloadIcon from '../../assets/icons/download.svg?react';
import ThankImgUrl from '../../assets/images/checkmark.png';
import { Button } from '../../components/button/Button.jsx';
import { Heading } from '../../components/heading/Heading.jsx';
import { ROUTES } from '../../router/router.constants.js';
import { getLocationLanguage } from '../../utils/getLocationLanguage.js';
import {
  clearStorage,
  getAge,
  getBooks,
  getEmail,
  getGender,
  getLanguage,
  getTopics,
} from '../../utils/storage-helpers.js';
import styles from './finish.module.css';

export const FinishPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleResetQuiz = () => {
    clearStorage();

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Home}`);
  };

  const downloadAnswers = () => {
    const userData = [
      { order: 1, title: t('home_title'), type: 'single-select', answer: getLanguage() },
      { order: 2, title: t('gender_title'), type: 'single-select-image', answer: getGender() },
      { order: 3, title: t('age_title'), type: 'single-select', answer: getAge() },
      {
        order: 4,
        title: t('books_table_title'),
        type: 'multiple-select',
        answer: JSON.stringify(getBooks()),
      },
      { order: 5, title: t('topics_title'), type: 'bubble', answer: JSON.stringify(getTopics()) },
      { order: 6, title: t('email'), type: 'email', answer: getEmail() },
    ];

    const headers = ['order', 'title', 'type', 'answer'];
    const csvContent = [
      headers.join(','),
      ...userData.map((row) => [row.order, row.title, row.type, row.answer].join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', 'quiz_answers.csv');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <Heading title={t('thank_you')} text={t('thank_text')} />

      <div className={styles.content}>
        <img src={ThankImgUrl} alt='Thank you' className={styles.img} />

        <div className={styles.actions}>
          <button className={styles.download} onClick={downloadAnswers}>
            <DownloadIcon />
            {t('download_answers')}
          </button>

          <Button onClick={handleResetQuiz}>{t('retake_quiz')}</Button>
        </div>
      </div>
    </div>
  );
};
