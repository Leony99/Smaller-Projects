import { createContext, useState } from 'react';

export const dropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
    const [dropdownState, setDropdownState] = useState("closed");

    return (
        <dropdownContext.Provider value={{ dropdownState, setDropdownState }}>
            {children}
        </dropdownContext.Provider>
    );
}