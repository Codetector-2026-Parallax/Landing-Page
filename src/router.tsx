import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
  lazyRouteComponent,
  ScrollRestoration,
} from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./pages/LandingPage')),
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: lazyRouteComponent(() => import('./pages/LoginPage')),
})

const emptyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/empty',
  component: lazyRouteComponent(() => import('./pages/EmptyPage')),
})

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, emptyRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 50,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
