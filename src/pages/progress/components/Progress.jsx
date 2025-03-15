import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../../router/router.constants.js';
import { getLocationLanguage } from '../../../utils/getLocationLanguage.js';
import styles from './progress.module.css';

const duration = 5000;
const interval = 33;
const steps = Math.floor(duration / interval);

const radius = 120;
const circumference = 2 * Math.PI * radius;

export const Progress = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let step = 0;
    let lastProgress = 0;

    const timer = setInterval(() => {
      step++;
      // Generate random increment between 0-3%
      const randomIncrement = Math.random() * 3;
      // Calculate new progress value
      let newProgress = lastProgress + randomIncrement;

      // Ensure we reach exactly 100% at the end
      if (step >= steps) {
        newProgress = 100;
        clearInterval(timer);

        setTimeout(() => {
          const language = getLocationLanguage();
          navigate(`/${language}/${ROUTES.Email}`);
        }, 100);
      }

      setProgress(Math.min(newProgress, 100));
      lastProgress = newProgress;
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={styles.container}>
      <svg width='252' height='252' viewBox='0 0 252 252'>
        <circle className={styles.background} cx='126' cy='126' r={radius} strokeWidth='12' />
        <circle
          strokeLinecap='round'
          className={styles.progress}
          cx='126'
          cy='126'
          r={radius}
          strokeWidth='12'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform='rotate(-90 126 126)'
        />
      </svg>

      <div className={styles.percentage}>{Math.round(progress)}%</div>
    </div>
  );
};
