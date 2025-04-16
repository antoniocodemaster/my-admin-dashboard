import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LogInPage';
import ErrorPage from '../pages/ErrorPage';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default AppRouter;
