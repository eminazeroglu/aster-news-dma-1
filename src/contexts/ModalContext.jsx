import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [modal, setModal] = useState({});

    const handleModal = (name, action = false, data = false) => {
        setModal((m) => ({
            ...m,
            [name]: {
                open: action,
                data
            }
        }))
    }

    const values = {
        modal,
        handleModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)