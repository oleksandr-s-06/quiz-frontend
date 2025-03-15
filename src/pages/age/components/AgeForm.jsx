import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { RadioGroup } from '../../../components/radio/RadioGroup.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setAge } from '../../../utils/storage-helpers.js';

export const AgeForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { control, handleSubmit, watch } = useForm({});

  const ageOptions = [
    { value: `18-29 ${t('years')}`, label: `18-29 ${t('years')}` },
    { value: `30-39 ${t('years')}`, label: `30-39 ${t('years')}` },
    { value: `40-49 ${t('years')}`, label: `40-49 ${t('years')}` },
    { value: '50+', label: '50+' },
  ];

  const onSubmit = (data) => {
    setAge(data.age);

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Books}`);
  };

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));

    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup options={ageOptions} control={control} name='age' />
    </form>
  );
};
