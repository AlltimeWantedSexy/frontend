import { GameTopBarContainer } from './style';

interface Props {
  snow: number;
  totalSnow: number;
}

const GameTopBar: React.FC<Props> = ({ snow, totalSnow }: Props) => {
  return (
    <GameTopBarContainer snow={snow} totalSnow={totalSnow}>
      <h4>총 {snow}개의 눈덩이가 모였어요!</h4>
    </GameTopBarContainer>
  );
};

export default GameTopBar;
