import { defineConfig } from '@umijs/max';
import { routes } from './routes'


export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Ahri',
  },
  routes,
  qiankun: {
    slave: {
      shouldNotModifyDefaultBase: true
    },
  },
  npmClient: 'pnpm',
});