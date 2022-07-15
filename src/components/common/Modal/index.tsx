import { IcModalCloseBtn } from "../../../asset/icon";
import { St } from "./style";

type ModalContents = {
  closeHandler: () => void;
  children: React.ReactNode;
};

export default function Modal({ closeHandler, children }: ModalContents) {
  return (
    <St.Root>
      <St.Modal>
        <St.CloseBtn type="button">
          <IcModalCloseBtn aria-label="필터 모달 닫기" onClick={closeHandler} />
        </St.CloseBtn>
        <St.ModalContents>{children}</St.ModalContents>
      </St.Modal>
    </St.Root>
  );
}
