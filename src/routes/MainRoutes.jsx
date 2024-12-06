import { lazy } from 'react';
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import PrivateRoute from 'auth/PrivateRoute';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Citas = Loadable(lazy(() => import('pages/citas')));
const Clientes = Loadable(lazy(() => import('pages/clientes')));
const Pagos = Loadable(lazy(() => import('pages/pagos')));
const Presupuestos = Loadable(lazy(() => import('pages/presupuestos')));
const Comunicaciones = Loadable(lazy(() => import('pages/comunicaciones')));
const Perfil = Loadable(lazy(() => import('pages/perfil/')));
const Notificaciones = Loadable(lazy(() => import('pages/notificaciones')));

const MainRoutes = {
  path: '/',
  element: <PrivateRoute element={<Dashboard />} />,
  children: [
    {
      path: '/',
      element: <PrivateRoute element={<DashboardDefault />} />
    },
    {
      path: 'color',
      element: <PrivateRoute element={<Color />} />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute element={<DashboardDefault />} />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage />} />
    },
    {
      path: 'shadow',
      element: <PrivateRoute element={<Shadow />} />
    },
    {
      path: 'typography',
      element: <PrivateRoute element={<Typography />} />
    },
    {
      path: 'citas',
      element: <PrivateRoute element={<Citas />} />
    },
    {
      path: 'clientes',
      element: <PrivateRoute element={<Clientes />} />
    },
    {
      path: 'pagos',
      element: <PrivateRoute element={<Pagos />} />
    },
    {
      path: 'presupuestos',
      element: <PrivateRoute element={<Presupuestos />} />
    },
    {
      path: 'comunicaciones',
      element: <PrivateRoute element={<Comunicaciones />} />
    },
    {
      path: 'perfil',
      element: <PrivateRoute element={<Perfil />} />
    },
    {
      path: 'notificaciones',
      element: <PrivateRoute element={<Notificaciones />} />
    }
  ]
};

export default MainRoutes;