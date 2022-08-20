import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  position: fixed;
  bottom: -10%;
  width: 100%;
  height: 20%;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & > image {
    margin-top: 10%;
  }
`;
