import {useClickAway} from "@uidotdev/usehooks";
import classNames from "classnames";
import {useState} from "react";
import {FiChevronDown} from "react-icons/fi";

function Dropdown(
    {
        btnRender,
        children,
        position = 'left',
        className
    }
) {

    const [open, setOpen] = useState(false)

    const ref = useClickAway(() => {
        setOpen(false);
    });

    return (
        <div className="relative w-full">
            <button onClick={() => setOpen(!open)} className="flex w-full h-[46px] items-center justify-between">
                <span>
                    {btnRender || 'Dropdown'}
                </span>
                <span><FiChevronDown/></span>
            </button>

            <div ref={ref} className={classNames([
                className || '',
                {
                    'absolute dark:bg-gray-800 dark:border-gray-700 rounded-lg border shadow-[0px_2px_20px_0px_#0000000A] p-2 z-50 transition-all top-full bg-white min-w-[190px]': true,
                    'opacity-0 invisible': !open,
                    'left-0': position === 'left',
                    'right-0': position === 'right',
                }
            ])}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;