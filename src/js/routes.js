
import HomePage from '../pages/home.f7.html';
import HasilPage from '../pages/hasil.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/hasil/',
    component: HasilPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;