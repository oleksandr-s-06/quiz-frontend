import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '../../../components/button/Button.jsx';
import { SelectGroup } from '../../../components/select/SelectGroup.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setBooks } from '../../../utils/storage-helpers.js';
import styles from './form.module.css';

export const BooksForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { control, handleSubmit, formState } = useForm({});

  const booksOptions = [
    { label: t('lack_of_logic'), value: t('lack_of_logic') },
    { label: t('a_slow_speed'), value: t('a_slow_speed') },
    { label: t('lack_of_humor'), value: t('lack_of_humor') },
    { label: t('way_too_generic_ending'), value: t('way_too_generic_ending') },
  ];

  const onSubmit = (data) => {
    setBooks(data.books);

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Topics}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <SelectGroup options={booksOptions} control={control} name='books' rules={{ required: true }} />

      <Button disabled={!formState.isValid}>{t('next')}</Button>
    </form>
  );
};
