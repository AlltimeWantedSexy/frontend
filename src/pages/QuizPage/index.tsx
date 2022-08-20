import Quiz from '@/component/Game/Quiz';
import { Layout } from './style';

const QuizPage: React.FC = () => {
  //Server get
  return (
    <Layout>
      <Quiz selectOptions={['yes', 'no', 'hihi', 'hii']} question="yes" answer="yes" />
    </Layout>
  );
};

export default QuizPage;
