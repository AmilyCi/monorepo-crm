export const routes = [
  {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录',
      path: '/login',
      component: './Home',
  },
  {
    name: '子应用之ahri',
    path: '/ahri/home',
    routes: [
      {
        name: 'ahri-main',
        path: '/ahri/home/main',
        component: '../components/Ahri'
      },
      {
        name: 'ahri-sub',
        path: '/ahri/home/table',
        component: '../components/Ahri'
      }
    ]
  },
  
]