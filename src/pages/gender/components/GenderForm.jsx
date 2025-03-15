import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import FemaleUrl from '../../../assets/images/female.png';
import MaleUrl from '../../../assets/images/male.png';
import OtherUrl from '../../../assets/images/other.png';
import { RadioGroup } from '../../../components/radio/RadioGroup.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setGender } from '../../../utils/storage-helpers.js';
import styles from '../gender.module.css';

export const GenderForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { control, handleSubmit, watch } = useForm({});

  const genderOptions = [
    { value: 'male', label: t('male'), icon: MaleUrl },
    { value: 'female', label: t('female'), icon: FemaleUrl },
    { value: 'other', label: t('other'), icon: OtherUrl },
  ];

  const onSubmit = (data) => {
    setGender(data.gender);

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Age}`);
  };

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));

    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form>
      <RadioGroup options={genderOptions} control={control} name='gender' className={styles.select} />
    </form>
  );
};
