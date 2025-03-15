import { Outlet } from 'react-router';
import { Header } from '../../components/header/Header.jsx';

export const SecondaryLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
