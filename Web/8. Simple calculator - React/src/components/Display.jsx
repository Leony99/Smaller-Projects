import "../styles/display.css";

export default function Display(props) {
    return (
        <div className="display">
            <div className="display-top">{props.valueTop}</div>
            <div className="display-bottom">{props.valueBottom}</div>
        </div>
    )
}