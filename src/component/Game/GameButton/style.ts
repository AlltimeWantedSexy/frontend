import styled from 'styled-components';

import { Colors } from '@/utils/constant';

export const GameButtonContainer = styled.div`
  width: 40%;
  height: 40%;
  gap: 7%;
  border-radius: 10px;
  background-color: ${Colors.White};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${Colors.Mint};
  }
`;
