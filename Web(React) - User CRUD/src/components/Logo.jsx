import { Link } from 'react-router-dom'

import "../styles/Logo.css";

export default props => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                Logo
            </Link>
            <div className="logo-border"></div>
        </aside> 
    );
}