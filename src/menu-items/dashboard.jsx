// assets
import { DashboardOutlined, CalendarOutlined, UsergroupAddOutlined, CreditCardOutlined, CalculatorOutlined, WechatOutlined, NotificationOutlined} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  CreditCardOutlined,
  CalculatorOutlined,
  WechatOutlined,
  NotificationOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'citas',
      title: 'Citas',
      type: 'item',
      url: '/Citas',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    },
    {
      id: 'clientes',
      title: 'Clientes',
      type: 'item',
      url: '/clientes',
      icon: icons.UsergroupAddOutlined,
      breadcrumbs: false
    },
    {
      id: 'pagos',
      title: 'Pagos',
      type: 'item',
      url: '/pagos',
      icon: icons.CreditCardOutlined,
      breadcrumbs: false
    },
    {
      id: 'presupuestos',
      title: 'Presupuestos',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.CalculatorOutlined,
      breadcrumbs: false
    },
    {
      id: 'comunicaciones',
      title: 'Comunicaciones',
      type: 'item',
      url: '/comunicaciones',
      icon: icons.WechatOutlined,
      breadcrumbs: false
    },
    {
      id: 'perfil',
      title: 'Perfil',
      type: 'item',
      url: '/perfil',
      icon: icons.WechatOutlined,
      breadcrumbs: false
    },
    {
      id: 'notificaciones',
      title: 'Notificaciones',
      type: 'item',
      url: '/notificaciones',
      icon: icons.NotificationOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
