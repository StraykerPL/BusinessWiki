const TextInput = (
    props: {
        id: string;
        type: string;
        text: string;
        placeholder: string;
    }) => {
    return (
        <div className="input">
            <label htmlFor={props.id}>{props.text}</label>
            <input id={props.id} name={props.id} type={props.type} placeholder={props.placeholder} required />
        </div>
    );
};

export default TextInput;