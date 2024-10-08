import { FormInputProps } from '../../types';

export default function FormInputs({type, name, id, placeholder, required, maxLength, pattern}: FormInputProps) {
    return(
        <div>
            <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            pattern={pattern}
            />
        </div>
    )
}