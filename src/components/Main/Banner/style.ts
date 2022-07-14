import styled from "styled-components";

import theme from "../../../style/theme";

export const St = {
  BannerSlider: styled.section`
    width: 100%;
    height: 21.7rem;

    background: ${({ theme }) => theme.colors.green};
  `,

  ContentsWrapper: styled.article`
    width: 36rem;
    height: 21.7rem;
  `,

  Contents: styled.p`
    position: relative;

    width: 21.1rem;
    height: 8.2rem;
    left: 1.6rem;
    top: 3.2rem;

    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.white};
  `,

  ContentsPages: styled.span`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.4rem 0.7rem 0.5rem;
    gap: 0.3rem;

    width: 3.5rem;
    height: 1.7rem;
    margin-left: 32.5rem;
    margin-top: -1.7rem;

    background: rgba(0, 0, 0, 0.5);
  `,

  CurrentPage: styled.span`
    line-height: 81.34%;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
  `,
};
