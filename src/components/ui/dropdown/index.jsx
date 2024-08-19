import { useClickAway } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Dropdown(
    {
        btnRender,
        children
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
                <span><FiChevronDown /></span>
            </button>

            <div ref={ref} className={classNames({
                'absolute rounded-lg shadow-[0px_2px_20px_0px_#0000000A] p-2 z-50 left-0 transition-all top-full bg-white min-w-[190px]': true,
                '': open,
                'opacity-0 invisible': !open
            })}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;