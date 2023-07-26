import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { activeStateModal } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";
import setScreenSize from "./util/setScreenSize";

export default function App() {
  const isActiveModal = useRecoilValue(activeStateModal);

  useEffect(() => {
    setScreenSize();
  }, []);

  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.log = function () {};
  }

  return (
    <St.MobileContainer>
      <Router />
      {isActiveModal && <ModalStyle />}
      <div id="modal"></div>
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    position: relative;

    margin: 0 auto;

    ${({ theme }) => theme.media.desktop`
      width: 36rem;
    `};
  `,
};
