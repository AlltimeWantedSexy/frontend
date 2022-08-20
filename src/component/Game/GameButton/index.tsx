import { GameButtonContainer } from './style';

interface Props {
  selectOption: string;
  setSubmittedOption: React.Dispatch<React.SetStateAction<string>>;
}

const GameButton: React.FC<Props> = ({ selectOption, setSubmittedOption }: Props) => {
  return (
    <GameButtonContainer
      onClick={() => {
        setSubmittedOption(selectOption);
      }}
    >
      <h2>{selectOption}</h2>
    </GameButtonContainer>
  );
};

export default GameButton;
