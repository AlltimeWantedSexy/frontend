import { useEffect, useState } from 'react';

import GameButton from '../GameButton';
import GameQuestion from '../GameQuestion';
import { QuizContainer, QuizSelectContainer } from './style';

interface Props {
  question: string;
  selectOptions: string[];
}

const Quiz: React.FC<Props> = ({ question, selectOptions }: Props) => {
  const [isSubmitAble, setIsSubmitAble] = useState<boolean>(false);
  const [submittedOption, setSubmittedOption] = useState<string>('');

  useEffect(() => {
    console.log(submittedOption);
  }, [submittedOption]);

  return (
    <QuizContainer>
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
