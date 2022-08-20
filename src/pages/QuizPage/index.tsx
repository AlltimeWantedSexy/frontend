import Quiz from '@/component/Game/Quiz';
import Background from '@/component/Background';
import { Layout } from './style';

const QuizPage: React.FC = () => {
  //Server get
  return (
    <Layout>
      <Quiz selectOptions={['yes', 'no', 'hihi', 'hii']} question="yes" />
      <Background />
    </Layout>
  );
};

export default QuizPage;
