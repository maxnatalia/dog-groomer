import { useState, useContext, cloneElement, createContext } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import Button from "../Button";
import { Overlay, StyledModal } from "./styled";
import useOutsideClick from "./useOutsideClick";

const ModalContext = createContext();

const Modal = ({ children }) => {
    const [openName, setOpenName] = useState('');

    const close = () => setOpenName('');
    const open = (name) => setOpenName(name);

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    )
};

const Open = ({ children, opens: opensWindowName }) => {
    const { open } = useContext(ModalContext);

    return (cloneElement(children, { onClick: () => open(opensWindowName) }));
};

const Window = ({ children, name }) => {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return (createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </StyledModal>
        </Overlay>, document.body)
    )
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;