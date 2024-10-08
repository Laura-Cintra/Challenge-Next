import { FormButtonProps } from "../../types";

export default function FormButton({type, value}: FormButtonProps) {
    return(
        <input type={type} value={value} />
    )
}