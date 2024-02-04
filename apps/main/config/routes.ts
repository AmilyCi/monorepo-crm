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
    name: 'main应用',
    path: '/main',
    routes: [
      {
        name: 'main-table',
        path: '/main/table',
        component: './Table'
      }
    ]
  },
  {
    name: 'ahri-权限',
    path: '/ahri/access',
    component: '../components/Ahri'
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