import "../styles/button.css";

export default function Button(props) {
    let classes = "button";
    classes += props.double ? " double" : "";
    classes += props.operation ? " operation" : "";

    return (
        <button className={classes} onClick={props.click}>
            {props.label}
        </button>
    )
}