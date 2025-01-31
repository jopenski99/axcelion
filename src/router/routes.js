
const routes = [
  {
    path: '/',
    component: () => import('layouts/Blank.vue'),
    children: [
      { path: '', component: () => import('pages/PortfolioV2.vue') }
    ]
  },
  {
    path: '/core',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PWA.vue') }
    ]
  },
  {
    path: '/portfolio',
    component: () => import('layouts/Blank.vue'),
    children: [
      { path: '', component: () => import('pages/PortfolioV2.vue') }
    ]
  },
  {
    path: '/references',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/References.vue') }
    ]
  },
  {
    path: '/rental',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Rental.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
