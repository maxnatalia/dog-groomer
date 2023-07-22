import { useState, useContext, cloneElement, createContext } from "react";
import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import useOutsideClick from "./useOutsideClick";
import { Overlay, StyledModal, ButtonClose } from "./styled";

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

const Open = ({ children, opens: opensWindowName, openMethod = "onClick" }) => {
    const { open } = useContext(ModalContext);

    const eventHandlerProps = {
        [openMethod]: () => open(opensWindowName)
    };

    return (cloneElement(children, eventHandlerProps));
};

const Window = ({ children, name }) => {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return (createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <ButtonClose onClick={close} title={"Close Modal"}>
                    <AiFillCloseCircle />
                </ButtonClose>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </StyledModal>
        </Overlay>, document.body)
    )
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;