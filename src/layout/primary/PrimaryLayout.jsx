import { Outlet } from 'react-router';
import { Header } from '../../components/header/Header.jsx';

export const PrimaryLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
