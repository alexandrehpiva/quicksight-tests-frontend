import { RouteObject } from 'react-router-dom'
import Admin from '../pages/admin'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import { FCC } from '../typings/global'

type Route = {
  path: string
  name: string
  component: FCC
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
]

export const routeObjects: RouteObject[] = routes.map(
  ({ path, component: Component }) => ({
    path,
    element: <Component />,
  }),
)
