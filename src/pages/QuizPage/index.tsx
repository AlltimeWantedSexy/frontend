import Quiz from '@/component/Game/Quiz';
import Background from '@/component/Background';
import GameTopBar from '@/component/Game/GameTopBar';

import { Layout } from './style';

const QuizPage: React.FC = () => {
  //server get
  //server get snow, totalSnow
  return (
    <Layout>
      <GameTopBar snow={80} totalSnow={100} />
      <Quiz selectOptions={['yes', 'no', 'hihi', 'hii']} question="yes" />
      <Background />
    </Layout>
  );
};

export default QuizPage;
