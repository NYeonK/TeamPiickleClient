import styled from "styled-components";

export const St = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    //position: absolute;
    //width: 296px;
    //height: 136px;
    //left: 16px;
    //top: 93px;
    background: #eef5f3;
  `,

  Wrapper: styled.div`
    display: flex;
    gap: 2rem;
  `,

  ModalContents: styled.p`
    width: 16.5rem;
    //height: 40px;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,

  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0rem;
    gap: 0.8rem;

    width: 29.6rem;
    height: 3.6rem;
  `,

  LoginButton: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 4.8rem;
    gap: 0.8rem;

    width: 14.4rem;
    height: 3.6rem;
    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    border-radius: 4.7rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.btn1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  SignUpButton: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 4.8rem;
    gap: 0.8rem;

    width: 14.4rem;
    height: 3.6rem;
    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    border-radius: 4.7rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.btn1};
    color: ${({ theme }) => theme.colors.bg};
  `,
};
