import { useContext } from "react";
import { Link } from 'react-router-dom'

import "../styles/Nav.css";

import homeIcon from "../assets/icons/homeWhite.png";
import userIcon from "../assets/icons/usersWhite.png";
import contactIcon from "../assets/icons/contactWhite.png";
import closeIcon from "../assets/icons/closeWhite.png";

import { dropdownContext } from '../context/DropdownContext.jsx';

export default props => {
    const asideOrDropdown = props.asideOrDropdown;
    const useDropdownContext = useContext(dropdownContext);
    const dropdownState = useDropdownContext.dropdownState;
    const setDropdownState = useDropdownContext.setDropdownState;

    const closeDropdown = () => {
        setDropdownState("closed");
    }

    return (
        <aside className={`nav ${asideOrDropdown} ${dropdownState}`} >
            <nav className="menu" >
                <Link to="/" className="menu-item" onClick={closeDropdown}>
                    <img src={homeIcon} alt="" />Home</Link>
                <Link to="/users" className="menu-item" onClick={closeDropdown}>
                    <img src={userIcon} alt="" />Users</Link>
                <Link to="/contact" className="menu-item" onClick={closeDropdown}>
                    <img src={contactIcon} alt="" />Contact</Link>
                <a className='closeButton' onClick={closeDropdown}>
                    <img src={closeIcon} alt="close icon" /></a>
            </nav>
        </aside> 
    );
}