export const routes = [
    {
      path: '/',
      redirect: '/ahri/home/main',
    },
    {
      name: '首页',
      path: '/ahri/home',
      routes: [
        {
          name: '首页-main',
          path: '/ahri/home/main',
          component: './Questionnaire/list',
        },
        {
          name: '首页-sub',
          path: '/ahri/home/table',
          component: './Questionnaire/data'
        },
      ]
  },
  {
    name: '权限',
    path: '/ahri/access',
    component: './Access'
  }
  ]