import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { RadioGroup } from '../../../components/radio/RadioGroup.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setLanguageState } from '../../../utils/storage-helpers.js';

const languageOptions = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
  {
    value: 'de',
    label: 'German',
  },
  {
    value: 'es',
    label: 'Spanish',
  },
];

export const LanguageForm = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { control, handleSubmit, watch } = useForm({});

  const onSubmit = (data) => {
    const language = languageOptions.find((option) => option.value === data.language).label;
    setLanguageState(language);
    i18n.changeLanguage(data.language);

    const locationLanguage = getLocationLanguage();
    navigate(`/${locationLanguage}/${ROUTES.Gender}`);
  };

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));

    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup options={languageOptions} control={control} name='language' />
    </form>
  );
};
