import styled from "styled-components";

export const St = {
  Root: styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;

    background-color: rgb(0, 0, 0, 0.5);
  `,

  Modal: styled.section`
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    top: 9rem;

    background-color: ${({ theme }) => theme.colors.sub_green5};
    border-radius: 2rem;

    padding: 2rem 1.6rem;
  `,

  CloseBtn: styled.button`
    position: absolute;
    right: 1.6rem;
    top: 2rem;
  `,

  ModalContents: styled.article`
    position: relative;
  `,
};
