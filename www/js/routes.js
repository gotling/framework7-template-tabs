routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  // Page Loaders & Router
  {
    path: '/component/',
    componentUrl: './pages/component.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
