import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { RootRoutes } from './router/router.jsx';

function App() {
  return (
    <StrictMode>
      <RouterProvider router={RootRoutes} />
    </StrictMode>
  );
}

export default App;
