import styled from "styled-components";

const VoteOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 4rem;
`;

const VoteOptionList = styled.li<{ isClicked: boolean }>`
  height: 4rem;

  border: solid 0.1rem #e0e0e0;
  border-radius: 0.5rem;

  background-color: ${({ theme, isClicked }) => (isClicked ? theme.colors.green : theme.colors.white)};
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.white : theme.colors.gray600)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 1.6rem;
  padding-right: 2.3rem;
`;

const VoteOptionText = styled.strong`
  ${({ theme }) => theme.fonts.body11}
`;

const VoteBtn = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 5.8rem;

  ${({ theme }) => theme.fonts.btn3}
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const St = {
  VoteOptionContainer,
  VoteOptionList,
  VoteOptionText,
  VoteBtn,
};

export default St;
