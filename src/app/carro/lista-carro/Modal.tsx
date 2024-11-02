import { ModalProps } from "@/types";
import { ModalContainer } from "../../../styled";

export default function Modal({ open, onClose, children }: ModalProps) {
    return (
        <ModalContainer open={open} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </ModalContainer>
    );
}