import { StaticImageData } from "next/image";

export type FormInputProps = {
    type: string;
    name: string;
    id: string;
    placeholder?: string;
    required?: boolean; // opcional
    maxLength?: number;
    pattern?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type FormButtonProps = {
    type: 'submit' | 'reset';
    value: string;
}

export type FormFieldsetProps = {
    title: string;
    children: React.ReactNode;
}

export type ParticipanteProps = {
    foto: string | StaticImageData;
    nome: string;
    rm: string;
    funcao: string;
    githubUrl: string;
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export type CarroProps = {
    idVeiculo: number;
    placa: string;
    modelo: string;
    marca: string;
}