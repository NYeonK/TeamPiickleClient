import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from "react";
import Slider from "react-slick";
import { useRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { CardList, CardsTypeLocation } from "../../../types/cardCollection";
import Loading from "../../common/Loading";
import Card from "../Card";
import LastCard from "../Card/LastCard";
import { St } from "./style";

interface CardSliderProps {
  openFilterModalHandler: () => void;
  openLoginModalHandler: () => void;
  cardsTypeLoaction: CardsTypeLocation;
  cardLists: CardList[] | null;
}

export default function CardSlider(props: CardSliderProps) {
  const { openFilterModalHandler, openLoginModalHandler, cardLists } = props;

  const [sliderIdx, setSliderIdx] = useRecoilState(sliderIdxState);
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    className: "center",
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    initialSlide: sliderIdx,
    afterChange: (idx: number) => setSliderIdx(idx),
  };

  return (
    <St.Wrapper>
      {!cardLists ? (
        <Loading backgroundColor="transparent" />
      ) : (
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardLists?.map((cardList) => (
            <Card key={cardList._id} openLoginModalHandler={openLoginModalHandler} {...cardList} />
          ))}
          <LastCard />
        </Slider>
      )}
      <St.IcFilterBtn onClick={openFilterModalHandler} aria-label="카드 추천 필터" role="dialog" />
    </St.Wrapper>
  );
}
