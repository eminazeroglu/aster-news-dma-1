import { useEffect, useState } from 'react';
import { dynamicImport } from '../utils/helper';

function ModalProvider({children}) {
    const [modals, setModals] = useState({});

    const getModals = async () => {
        const modals = await dynamicImport('modals', 'jsx');
        setModals(modals)
    }

    useEffect(() => {
        getModals()
    }, [])

    return (
        <>
            {children}
            {Object.keys(modals).map((key, index) => {
                const Component = modals[key];
                return <Component key={index} />
            })}
        </>
    );
}

export default ModalProvider;