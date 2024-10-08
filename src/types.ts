export type FormInputProps = {
    type: string;
    name: string;
    id: string;
    placeholder: string;
    required?: boolean; // opcional
    maxLength?: number;
    pattern?: string;
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
    foto: string;
    nome: string;
    rm: string;
    funcao: string;
    githubUrl: string;
  }