import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/button/Button.jsx';
import { TextField } from '../../../components/text-field/TextField.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setEmail } from '../../../utils/storage-helpers.js';
import styles from './form.module.css';

export const EmailForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const schema = yup.object({
    email: yup.string().email(t('invalid_email')).required(t('email_required')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '' },
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    setEmail(data.email);

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Finish}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} name='email' type='email' placeholder={t('your_email')} />

      <p className={styles.policy}>
        {t('privacy_policy_agreement')} <a href='#'>Privacy policy</a> {t('and')} <a href='#'>Terms of use.</a>
      </p>

      <Button disabled={!isValid}>{t('next')}</Button>
    </form>
  );
};
