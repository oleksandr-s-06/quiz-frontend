import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { I18Guard } from '../guards/I18Guard';

export const AppProviders = () => {
  return (
    <I18Guard>
      <Suspense>
        <Outlet />
      </Suspense>
    </I18Guard>
  );
};
