import { TextInputProps } from "../models/models";
import inputStyles from "../styles/TextInput.module.scss";

const { input, input__label, input__textbox } = inputStyles;

const TextInput = ({ id, type, text, placeholder }: TextInputProps) => {
    return (
        <div className={input}>
            <label htmlFor={id} className={input__label}>{text}</label>
            <input id={id} name={id} type={type} placeholder={placeholder} className={input__textbox} required />
        </div>
    );
};

export default TextInput;