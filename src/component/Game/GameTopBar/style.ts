import styled from 'styled-components';

import { Colors } from '@/utils/constant';

interface Props {
  snow: number;
  totalSnow: number;
}

export const GameTopBarContainer = styled.div<Props>`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0%;
  left: 0%;
  width: ${({ snow, totalSnow }) => 100 * (snow / totalSnow)}%;
  height: 4%;
  background-color: ${Colors.Blue};
  h4 {
    margin-left: 8%;
    color: ${Colors.White};
    font-weight: bold;
  }
`;
