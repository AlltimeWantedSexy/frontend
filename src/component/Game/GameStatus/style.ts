import { Colors } from '@/utils/constant';
import styled from 'styled-components';

interface Props {
  totalQuiz: number;
  nowQuiz: number;
}

export const GameStatusContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
`;

export const GameStatusBar = styled.progress<Props>`
  align-self: flex-start;
  width: 100%;
  height: 3%;
  background-color: ${Colors.DarkBlue};
`;
