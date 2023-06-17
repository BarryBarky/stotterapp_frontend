const BasicTextButton = ({text, handler, classes = ""}) => {
    return (
        <button className={"bg-tertiary p-4 border-darker-tertiary border text-primary rounded " + classes} onClick={handler}>
            {text}
        </button>
    );
};

export default BasicTextButton;