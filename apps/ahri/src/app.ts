export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'ahri' };
}

type prop = {
  menuRender?: boolean
}

interface WindowWithVariable {
  __POWERED_BY_QIANKUN__?: boolean;
}
declare const window:WindowWithVariable

export const layout = () => {
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
