import { useEffect, useState } from 'react';

import GameButton from '../GameButton';
import GameQuestion from '../GameQuestion';
import { QuizContainer, QuizSelectContainer } from './style';

interface Props {
  question: string;
  selectOptions: string[];
  answer: string;
}

const Quiz: React.FC<Props> = ({ question, selectOptions, answer }: Props) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submittedOption, setSubmittedOption] = useState<string>('');

  useEffect(() => {
    console.log(
      submittedOption,
      submitted,
      answer,
      answer == submittedOption,
      answer === submittedOption,
    );
    if (submitted && submittedOption == answer) {
      //right answer server post
      console.log('right');
      setSubmitted(true);
    } else if (!submitted && submittedOption !== answer) {
      //wrong answer server post
      console.log('wrong');
      setSubmitted(true);
    }
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
