import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ROUTES } from '../router/router.constants.js';

export const LocationSteps = {
  [ROUTES.Home]: 1,
  [ROUTES.Gender]: 2,
  [ROUTES.Age]: 3,
  [ROUTES.Books]: 4,
  [ROUTES.Topics]: 5,
};

export const useGetCurrentStep = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const page = location.pathname.split('/').slice(2).join();

    setStep(LocationSteps[page]);
  }, [location]);

  return step;
};
