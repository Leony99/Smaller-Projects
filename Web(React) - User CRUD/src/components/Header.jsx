import { useContext, useRef } from "react";

import "../styles/Header.css";
import homeIcon from "../assets/icons/home.png";
import usersIcon from "../assets/icons/users.png";
import contactIcon from "../assets/icons/contact.png";
import dropdownIcon from "../assets/icons/dropdown.png";

import { dropdownContext } from '../context/DropdownContext.jsx';

const iconMap = {
    home: homeIcon,
    users: usersIcon,
    contact: contactIcon
}

export default props => {
    const selectedIcon = iconMap[props.icon] || '';
    const dropdownIconRef = useRef(null);

    const useDropdownContext = useContext(dropdownContext);
    const setDropdownState = useDropdownContext.setDropdownState;

    const dropdownClick = () => {
        const dropdownIcon = dropdownIconRef.current;
        const dropdownIconDisplay = window.getComputedStyle(dropdownIcon).display;

        if (dropdownIconDisplay === 'block') {
            setDropdownState("openned");
        } else {
            return;
        }
    }
    
    return (
        <header className="header d-flex flex-row" onClick={dropdownClick}>
            <img src={selectedIcon} alt="page icon" />
            <h1> {props.title} </h1>
            <img src={dropdownIcon} className="dropdown" ref={dropdownIconRef} alt="dropdown icon" />
        </header>
    );
}