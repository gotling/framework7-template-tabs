routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
