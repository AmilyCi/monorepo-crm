import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer>
      <div className={styles.container}>
        {/* <Guide name={trim(name)} /> */}
        <div>这个是Ahri子应用中的home页面</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
