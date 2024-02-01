import { defineConfig } from '@umijs/max';
import { routes } from './routes'
import proxy from './proxy';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Main',
  },
  routes,
  qiankun: {
    
    master: {
      sandbox: false,
      apps: [
        {
          name: 'ahri',
          entry: '//localhost:8001',
        },
      ],
    },
  },
  // proxy,
  npmClient: 'pnpm',
});