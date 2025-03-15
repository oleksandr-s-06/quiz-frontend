import { Navigate, createBrowserRouter } from 'react-router';
import { AppProviders } from '../providers/AppProviders.js';
import { routes } from './routes.jsx';

export const RootRoutes = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/en' replace />,
  },
  {
    path: ':lang',
    element: <AppProviders />,
    children: routes,
  },
]);
