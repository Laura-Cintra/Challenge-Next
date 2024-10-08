import { FormFieldsetProps } from "../../types";

export default function FormFieldset({title, children}: FormFieldsetProps) {

    return(
        <fieldset>
            <h1>{title}</h1>
            {children}
        </fieldset>
    )
}