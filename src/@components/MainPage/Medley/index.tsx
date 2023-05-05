import useScrollableContainer from "../../@common/hooks/useScrollableContainer";
import Loading from "../../@common/Loading";
import { useMedleyLists } from "../hooks/useMedleyLists";
import MedleyCard from "./MedleyCard";
import * as St from "./style";

export default function Medley() {
  const { scrollableContainerProps, isDragging } = useScrollableContainer();
  const { randomMedleyLists, isLoading } = useMedleyLists();

  if (isLoading) return <Loading backgroundColor="white" />;
  return (
    <>
      <St.SubTitle>👇 나에게 딱 맞는 주제, 피클이 대신 골라드립니다</St.SubTitle>
      <St.Medley {...scrollableContainerProps}>
        {randomMedleyLists &&
          randomMedleyLists.map((medleyCard) => (
            <MedleyCard key={medleyCard._id} medleyCard={medleyCard} canToggleModal={!isDragging} />
          ))}
      </St.Medley>
    </>
  );
}
