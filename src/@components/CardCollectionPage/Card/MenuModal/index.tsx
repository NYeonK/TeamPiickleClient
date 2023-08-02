import Modal from "../../../@common/Modal";
import useToast from "../../../@common/Toast/hooks/useToast";
import useBlacklist from "../../hooks/useBlacklist";
import { autoSlideType } from "../../hooks/useCardSwiper";
import * as St from "./style";

interface MenuModalProps {
  currentCardId: string;
  closeHandler: () => void;
  autoSlide: autoSlideType;
}

type ModalItem = {
  emoji: string;
  title: string;
  isNeedLogin?: boolean;
  handleClickItem: () => void;
};

export default function MenuModal(props: MenuModalProps) {
  const { currentCardId, closeHandler, autoSlide } = props;
  const { showToast, blackoutToast } = useToast();
  const { handleClickAddBlacklist, handleClickCancelBlacklist } = useBlacklist(() => console.log("todo"));

  const ModalItems: ModalItem[] = [
    {
      emoji: "🥲",
      title: "이 주제 별로예요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "🥰 소중한 의견 주셔서 감사해요", duration: 2.5 });
      },
    },
    {
      emoji: "👀",
      title: "주제 다시 안보기",
      isNeedLogin: true,
      handleClickItem: () => {
        handleClickAddBlacklist({
          _id: currentCardId,
          onSuccess: () => {
            closeHandler();
            showToast({
              message: "🚫 해당 대화주제가 더 이상 추천되지 않아요",
              duration: 3.5,
              handleClickCancel: () => {
                handleClickCancelBlacklist({ _id: currentCardId, onSuccess: blackoutToast });
                autoSlide.slideUp();
              },
            });
            autoSlide.slideDown();
          },
        });
      },
    },
    {
      emoji: "❓",
      title: "주제에 대한 다른 사람들의 의견이 궁금해요",
      handleClickItem: () => {
        closeHandler();
        showToast({ message: "📢 다른 사람들의 의견을 모아서 들려드릴게요", duration: 2.5 });
      },
    },
  ];

  return (
    <Modal theme="WHITE_BOTTOM" closeHandler={closeHandler} isNoCloseBtn>
      <St.ModalContainer>
        {ModalItems.map(({ emoji, title, isNeedLogin, handleClickItem }, idx) => (
          <St.ModalItemWrapper key={idx} onClick={handleClickItem}>
            <St.EmojiWrapper>{emoji}</St.EmojiWrapper>
            {title}
            {isNeedLogin && <St.MessageWrapper>로그인 시 사용가능 합니다</St.MessageWrapper>}
          </St.ModalItemWrapper>
        ))}
      </St.ModalContainer>
    </Modal>
  );
}
