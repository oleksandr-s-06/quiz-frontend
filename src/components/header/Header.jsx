import { useNavigate } from 'react-router';
import Chevron from '../../assets/icons/chevron-left.svg?react';
import Dots from '../../assets/icons/dots.svg?react';
import { getLocationLanguage } from '../../utils/getLocationLanguage.js';
import { LocationSteps, useGetCurrentStep } from '../../utils/useGetCurrentStep.js';
import styles from './header.module.css';

const totalSteps = Object.keys(LocationSteps).length;

const stepRoutes = Object.keys(LocationSteps).map((key) => key);

const Steps = () => {
  const step = useGetCurrentStep();

  return (
    <p className={styles.steps}>
      <span>{step}</span>/{totalSteps}
    </p>
  );
};

const BackButton = () => {
  const navigate = useNavigate();
  const step = useGetCurrentStep();

  const isShowBackButton = step !== 1;

  const goBack = () => {
    if (step <= 1) {
      return;
    }

    const prevRoute = stepRoutes[step - 2];

    const language = getLocationLanguage();
    navigate(`/${language}/${prevRoute}`);
  };

  if (!isShowBackButton) {
    return null;
  }

  return (
    <button className={styles.back} onClick={goBack}>
      <Chevron />
    </button>
  );
};

const ProgressBar = () => {
  const step = useGetCurrentStep();

  return (
    <div className={styles.progress}>
      {Array.from(Array(step).keys()).map((i, index) => (
        <span key={`${i}_${index}`} style={{ width: `${100 / totalSteps}%` }} />
      ))}
    </div>
  );
};

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <BackButton />
        </div>

        <Steps />

        <div>
          <Dots />
        </div>
      </div>

      <ProgressBar />
    </section>
  );
};
