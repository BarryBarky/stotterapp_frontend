const BasicIconButton = ({icon, handler, classes = ""}) => {
    return (
        <button className={"bg-tertiary p-4 border-darker-tertiary border text-primary rounded " + classes} onClick={handler}>
            <img src={icon} alt="icon"/>
        </button>
    );
};

export default BasicIconButton;