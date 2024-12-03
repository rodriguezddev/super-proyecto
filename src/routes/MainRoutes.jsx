import { lazy } from 'react';
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard'; // Importa el componente PrivateRoute
import PrivateRoute from 'auth/PrivateRoute';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

const MainRoutes = {
  path: '/',
  element: <PrivateRoute element={<Dashboard />} />, // Usa PrivateRoute aquí
  children: [
    {
      path: '/',
      element: <PrivateRoute element={<DashboardDefault />} /> // Usa PrivateRoute aquí
    },
    {
      path: 'color',
      element: <PrivateRoute element={<Color />} /> // Usa PrivateRoute aquí
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute element={<DashboardDefault />} /> // Usa PrivateRoute aquí
        }
      ]
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage />} /> // Usa PrivateRoute aquí
    },
    {
      path: 'shadow',
      element: <PrivateRoute element={<Shadow />} /> // Usa PrivateRoute aquí
    },
    {
      path: 'typography',
      element: <PrivateRoute element={<Typography />} /> // Usa PrivateRoute aquí
    }
  ]
};

export default MainRoutes;
