import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import GameButton from '../GameButton';
import GameQuestion from '../GameQuestion';
// import GameStatus from '../GameStatus';
import { QuizContainer, QuizSelectContainer } from './style';

interface Props {
  question: string[];
  selectOptions: string[][];
  answer: string[];
  maxRound: number;
  nowRound: number;
  setQuizRound: React.Dispatch<React.SetStateAction<number>>;
}

const Quiz: React.FC<Props> = ({
  question,
  selectOptions,
  answer,
  maxRound,
  nowRound,
  setQuizRound,
}: Props) => {
  const [submittedOption, setSubmittedOption] = useState<string>('');

  useEffect(() => {
    console.log(submittedOption);
    if (submittedOption === answer[nowRound - 1] && nowRound !== maxRound)
      setQuizRound((prev) => prev + 1);
  }, [submittedOption]);

  return (
    <QuizContainer>
      {/* <GameStatus maxGame={maxGame} nowGame={nowGame} /> */}
      <GameQuestion question={question[nowRound - 1]} />
      <QuizSelectContainer>
        {selectOptions[nowRound - 1].map((selectOption) => (
          <GameButton
            selectOption={selectOption}
            key={selectOption}
            setSubmittedOption={setSubmittedOption}
          />
        ))}
      </QuizSelectContainer>
    </QuizContainer>
  );
};

export default Quiz;
