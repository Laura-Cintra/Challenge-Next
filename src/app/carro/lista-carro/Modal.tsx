import { ModalProps } from "@/types";
import { ModalContainer } from "../../../styled"; // ajuste o caminho se necessário
import { Button } from "../../../styled"; // ajuste o caminho se necessário
import { FaTrashAlt } from 'react-icons/fa';

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