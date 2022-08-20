import { Colors } from '@/utils/constant';
import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 70%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: ${Colors.White};
    font-weight: bold;
  }
`;

export const InputField = styled.input`
  width: 70%;
  height: 100%;
  font-size: 16px;
  border: 0;
  outline: none;
  background-color: ${Colors.White};
  border-color: ${Colors.White};
`;
