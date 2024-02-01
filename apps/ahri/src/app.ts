import { RunTimeLayoutConfig } from '@umijs/max';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'ahri' };
}

type prop = {
  menuRender?: boolean
}

export const layout: RunTimeLayoutConfig = (initialState) => {
  const props: prop = {}
  // 子应用中展示，不展示侧边菜单
  if (window.__POWERED_BY_QIANKUN__) { 
    props.menuRender = false
  }
  return {
    // 常用属性
    title: 'Ahri子应用',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    ...props
  };
};
