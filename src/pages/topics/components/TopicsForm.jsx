import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import CowboyUrl from '../../../assets/images/cowboy.png';
import CrownUrl from '../../../assets/images/crown.png';
import ActionUrl from '../../../assets/images/dancing.png';
import RomanceUrl from '../../../assets/images/love.png';
import BillionaireUrl from '../../../assets/images/money-smile.png';
import YoungUrl from '../../../assets/images/she.png';
import WolfUrl from '../../../assets/images/wolf.png';
import { Button } from '../../../components/button/Button.jsx';
import { SelectGroup } from '../../../components/select/SelectGroup.jsx';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import { setTopics } from '../../../utils/storage-helpers.js';
import styles from './form.module.css';

export const TopicsForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { control, handleSubmit, formState } = useForm({});

  const topicOptions = [
    { value: t('werewolf'), label: t('werewolf'), icon: WolfUrl },
    { value: t('romance'), label: t('romance'), icon: RomanceUrl },
    { value: t('action'), label: t('action'), icon: ActionUrl },
    { value: t('young_adult'), label: t('young_adult'), icon: YoungUrl },
    { value: t('royal_obsession'), label: t('royal_obsession'), icon: CrownUrl },
    { value: t('bad_boy'), label: t('bad_boy'), icon: CowboyUrl },
    { value: t('billionaire'), label: t('billionaire'), icon: BillionaireUrl },
  ];

  const onSubmit = (data) => {
    setTopics(data.topics);

    const language = getLocationLanguage();
    navigate(`/${language}/${ROUTES.Progress}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <SelectGroup
        options={topicOptions}
        control={control}
        name='topics'
        rules={{ required: true }}
        bubble
        className={styles.grid}
      />

      <div className={styles.submit}>
        <Button disabled={!formState.isValid}>{t('next')}</Button>
      </div>
    </form>
  );
};
