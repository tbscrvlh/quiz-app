import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  min-width: 850px;
  background: white;
  height: 400px;
  display: grid;
  align-content: space-between;
  border-radius: 10px;
  border: 2px solid white;
  padding: 20px;
  text-align: center;
  width: 100%;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#6BCB77'
        : !correct && userClicked
        ? '#FF6B6B'
        : '#4D96FF'};
    border: 3px solid #ffffff;
    border-radius: 10px;
    color: #fff;
  }
`;