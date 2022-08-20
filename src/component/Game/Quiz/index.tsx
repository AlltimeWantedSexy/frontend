import { useEffect, useState } from 'react';

import GameButton from '../GameButton';
import GameQuestion from '../GameQuestion';
import GameStatus from '../GameStatus';
import { QuizContainer, QuizSelectContainer } from './style';

interface Props {
  question: string;
  selectOptions: string[];
  maxGame: number;
  nowGame: number;
}

const Quiz: React.FC<Props> = ({ question, selectOptions, maxGame, nowGame }: Props) => {
  const [isSubmitAble, setIsSubmitAble] = useState<boolean>(false);
  const [submittedOption, setSubmittedOption] = useState<string>('');

  useEffect(() => {
    console.log(submittedOption);
  }, [submittedOption]);

  return (
    <QuizContainer>
      <GameStatus maxGame={maxGame} nowGame={nowGame} />
      <GameQuestion question={question} />
      <QuizSelectContainer>
        {selectOptions.map((selectOption) => (
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
