import { RouteObject } from 'react-router-dom';
import Admin from '../pages/admin';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <div>404</div>
  }
];
