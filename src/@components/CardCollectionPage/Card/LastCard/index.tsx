import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IcCongratPiickle } from "../../../../asset/icon";
import { routePaths } from "../../../../core/routes/path";
import * as St from "./style";

const LastCard = forwardRef(function LastCard(_, ref: React.ForwardedRef<HTMLDivElement>) {
  const [isReplayBtn, setIsReplayBtn] = useState(false);
  const navigate = useNavigate();

  const cardType = new URLSearchParams(window.location.search.split("?")[1]).get("type");

  useEffect(() => {
    const noRepalyTypes = ["female", "male", "bookmark", "medley", "recent"];

    setIsReplayBtn(!noRepalyTypes.includes(cardType || ""));
  }, [cardType]);

  const getSimilarTopic = () => {
    /* */
  };

  const goToCategory = () => navigate(routePaths.Category);

  return (
    <St.Card ref={ref}>
      <St.ContentTitle>의미있는 대화를 나누셨나요?</St.ContentTitle>
      <St.Content>끊임없는 대화를 위해 버튼을 선택해주세요</St.Content>
      <IcCongratPiickle />
      <St.BtnContainer>
        {isReplayBtn && <St.ReplayBtn onClick={getSimilarTopic}>비슷한 주제 계속 보기</St.ReplayBtn>}
        <St.CategoryBtn onClick={goToCategory}>카테고리 보러 가기</St.CategoryBtn>
      </St.BtnContainer>
    </St.Card>
  );
});

export default React.memo(LastCard);
