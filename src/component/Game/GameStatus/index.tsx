import { GameStatusBar, GameStatusContainer } from './style';

interface Props {
  nowGame: number;
  maxGame: number;
}

const GameStatus: React.FC<Props> = ({ nowGame, maxGame }: Props) => {
  return (
    <GameStatusContainer>
      <h4>{`${nowGame}, ${maxGame}`}</h4>
    </GameStatusContainer>
  );
};

export default GameStatus;
