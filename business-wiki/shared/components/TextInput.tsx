import inputStyles from "../styles/TextInput.module.scss";

const TextInput = (
    props: {
        id: string;
        type: string;
        text: string;
        placeholder: string;
    }) => {
    return (
        <div className={inputStyles.input}>
            <label htmlFor={props.id} className={inputStyles.input__label}>{props.text}</label>
            <input id={props.id} name={props.id} type={props.type} placeholder={props.placeholder} className={inputStyles.input__textbox} required />
        </div>
    );
};

export default TextInput;