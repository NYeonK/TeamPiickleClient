import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

const agreeListContents = [
  { id: 1, level: 1, checkBox: <IcEmptyCheckBox />, text: "약관 전체동의", line: <hr /> },
  {
    id: 2,
    level: 2,
    checkBox: <IcEmptyCheckBox />,
    text: "이용약관 동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 3,
    level: 2,
    checkBox: <IcEmptyCheckBox />,
    text: "개인정보 수집 및 이용동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 4,
    level: 3,
    checkBox: <IcEmptyCheckBox />,
    text: "마케팅 활용/광고성 정부 수신동의 (선택)",
    button: <IcNextBtn />,
  },
  { id: 5, level: 2, checkBox: <IcEmptyCheckBox />, text: "만 14세 이상입니다 (필수)", button: <IcNextBtn /> },
];

export default function JoinAgree() {
  const navigate = useNavigate();
  const [isPicked, setIsPicked] = useState(0);
  const [isAllPicked, setAllIsPicked] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isPickedItems, setIsPickedItems] = useState([
    { id: "all", state: false },
    { id: "first", state: false },
    { id: "second", state: false },
    { id: "third", state: false },
    { id: "fourth", state: false },
  ]);

  const completeJoinBtn = () => {
    !isOpenAlert ? navigate(routePaths.Login) : "";
  };

  useEffect(() => {
    const currentList = [...isPickedItems];
    if (isPicked === 0) {
      for (let i = 1; i <= 4; i++) {
        if (isPickedItems[0].state) {
          currentList[i].state = false;
        } else {
          currentList[i].state = true;
        }
      }
    }
    isPickedItems[isPicked].state ? (currentList[isPicked].state = false) : (currentList[isPicked].state = true);
  }, [isPicked, isPickedItems]);

  function ChangeCheckBox(index: number) {
    const currentList = [...isPickedItems];
    setIsPicked(index);

    currentList[index].state
      ? (agreeListContents[index].checkBox = <IcEmptyCheckBox />)
      : (agreeListContents[index].checkBox = <IcFullCheckBox />);

    if (index === 0) {
      currentList[0].state
        ? (agreeListContents[1].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[2].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[3].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[4].checkBox = <IcEmptyCheckBox />)
        : (agreeListContents[1].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[2].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[3].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[4].checkBox = <IcFullCheckBox />);
    }

    AllCheck;
    setIsPickedItems(currentList);
  }

  const AllCheck =
    isAllPicked === true
      ? (agreeListContents[0].checkBox = <IcFullCheckBox />) && (isPickedItems[0].state = true)
      : (agreeListContents[0].checkBox = <IcEmptyCheckBox />) && (isPickedItems[0].state = false);

  useEffect(() => {
    const all = agreeListContents.filter((item) => item.level > 1).length;
    const trueAll = agreeListContents.filter(
      (item) => item.level > 1 && isPickedItems[item.id - 1].state === true,
    ).length;
    const required = agreeListContents.filter((item) => item.level === 2).length;
    const trueRequired = agreeListContents.filter(
      (item) => item.level === 2 && isPickedItems[item.id - 1].state === true,
    ).length;

    all === trueAll ? setAllIsPicked(true) : setAllIsPicked(false);
    all === trueAll || required === trueRequired ? setIsOpenAlert(false) : setIsOpenAlert(true);
  }, [isPickedItems, isOpenAlert, isAllPicked]);

  const agreeList = agreeListContents.map((item, index) => (
    <St.AgreeContentItem key={item.id} isActive={isPickedItems[index].state}>
      <St.CheckBox type="button" onClick={() => ChangeCheckBox(index)}>
        {item.checkBox}
      </St.CheckBox>
      {item.text}
      <St.DetailButton to="">{item.button}</St.DetailButton>
      <St.Line>{item.line}</St.Line>
    </St.AgreeContentItem>
  ));

  return (
    <St.Root>
      <Header prevPage={prevPages[5].prevPage} />
      <PageProgressBar rate={progressRate[4].rate} />
      <St.JoinAgree>
        <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
        <St.AgreeContent>{agreeList}</St.AgreeContent>
        <St.ModalContainer isOpenAlert={isOpenAlert}>필수 항목에 동의해주세요</St.ModalContainer>
        <St.JoinButton onClick={completeJoinBtn}>회원가입 완료하기</St.JoinButton>
      </St.JoinAgree>
      <Footer />
    </St.Root>
  );
}