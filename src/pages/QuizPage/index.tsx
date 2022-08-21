import { useState } from 'react';

import Quiz from '@/component/Game/Quiz';
import Background from '@/component/Background';
import GameTopBar from '@/component/Game/GameTopBar';
import { Layout } from './style';

const testQuestions: string[] = [
  '1. 백지장도 맞들면 OO',
  '2. 나랑 OO 놀이터 갈래',
  '3. 글자 카드를 벽에다 OOO.',
  '4. 신발을 신고 책가방을 OO.',
  '5. OO 전에 이웃집으로 이사 왔습니다.',
];

const testSelectOptions: string[][] = [
  ['낮다', '낳다', '낫다', '낟다'],
  ['같이', '가치', '갗이', '갖이'],
  ['붙이다', '부치다', '붗이다', '부티다'],
  ['매다', '뫼다', '맺다', '메다'],
  ['몇일', '몉일', '며칠', '면일'],
];

const testAnswer: string[] = ['낫다', '같이', '붙이다', '메다', '며칠'];
const MAX_ROUND: number = 5;

const QuizPage: React.FC = () => {
  //server get
  //server get snow, totalSnow
  const [quizRound, setQuizRound] = useState<number>(1);

  return (
    <Layout>
      <GameTopBar snow={80} totalSnow={100} />
      <Quiz
        question={testQuestions}
        selectOptions={testSelectOptions}
        answer={testAnswer}
        maxRound={MAX_ROUND}
        nowRound={quizRound}
        setQuizRound={setQuizRound}
      />
      <Background />
    </Layout>
  );
};

export default QuizPage;
