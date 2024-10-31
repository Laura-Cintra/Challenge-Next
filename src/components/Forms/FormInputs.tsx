import { FormInputProps } from '../../types';

export default function FormInputs({type, name, id, placeholder, required, maxLength, pattern, value, onChange}: FormInputProps) {
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
            value={value}
            onChange={onChange}
            />
        </div>
    )
}