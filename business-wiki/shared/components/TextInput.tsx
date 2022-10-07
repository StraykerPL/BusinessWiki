const TextInput = (
    props: {
        id: string;
        text: string;
        placeholder: string;
    }) => {
    return (
        <div className="input">
            <label htmlFor={props.id}>{props.text}</label>
            <input id={props.id} type="text" placeholder={props.placeholder} required />
        </div>
    );
};

export default TextInput;