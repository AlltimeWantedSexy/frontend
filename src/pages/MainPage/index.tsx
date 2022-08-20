import { Layout } from './style';
import Main from '@/component/Main';
import Background from '@/component/Background';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Main />
      <Background />
    </Layout>
  );
};

export default MainPage;
