import { GameQuestionContainer } from './style';

interface Props {
  question: string;
}

const GameQuestion: React.FC<Props> = ({ question }: Props) => {
  return (
    <GameQuestionContainer>
      <h1>{question}</h1>
    </GameQuestionContainer>
  );
};

export default GameQuestion;
