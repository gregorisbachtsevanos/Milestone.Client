import { FC, useCallback } from "react";
import ReactModal, { Props } from "react-modal";
import { OverlayStyle, StyledModal } from "./Modal.styled";
import Icons from "@/assets/icons";

interface ModalExtraProps {
  onConfirm?: () => void;
  onClose?: () => void;
  closeOnClickOutside?: () => void;
  width?: string;
  buttonText?: string;
  withButtons?: boolean;
  withCancel?: boolean;
  withoutClose?: boolean;
  isOpen: boolean;
  children?: React.ReactNode | React.ReactNode[];
  // ModalStyle: StyledComponent<"div", any, {}, never>;
  //   OverlayStyle: StyledComponent<"div", any, {}, never>;
}

type ModalProps = Props & ModalExtraProps;

const Modal: FC<ModalProps> = ({
  onConfirm,
  onClose,
  closeOnClickOutside,
  width = "500px",
  buttonText,
  withButtons,
  withCancel,
  withoutClose,
  isOpen,
  children,
  //   contentElement,
  //   overlayElement,
  //   overlayClassName,
  //   ModalStyle,
  //   OverlayStyle,
}) => {
  const handleConfirm = useCallback(() => {
    onConfirm && onConfirm();
    // onClose && onClose();
  }, []);

  return (
    <ReactModal
      onRequestClose={() => {
        closeOnClickOutside && closeOnClickOutside();
      }}
      appElement={document.getElementById("root") as HTMLElement}
      overlayClassName="_"
      contentElement={({ style, ...rest }, children) => (
        <StyledModal {...rest} width={width}>
          {children}
        </StyledModal>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
    >
      {children}
      {!withoutClose && (
        <button
          onClick={() => {
            onClose && onClose();
          }}
          className="close-button"
        >
          <Icons name="clear" color="black" />
        </button>
      )}
      {(withButtons || withCancel) && (
        <div className="buttons">
          {withButtons && <button onClick={handleConfirm}>{buttonText ?? "Confirm"}</button>}
          {withCancel && <button onClick={onClose}>Cancel</button>}
        </div>
      )}
    </ReactModal>
  );
};

export default Modal;
