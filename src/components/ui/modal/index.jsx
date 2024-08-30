import { useClickAway } from "@uidotdev/usehooks";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

function Modal({title, children, backdrop = false, className, open = false, onClose}) {
    
    const ref = useClickAway(() => {
        if (!backdrop) {
            onClose()
        }
    })

    const modalContent = (
        <div className={classNames({
            'fixed flex items-center px-4 md:px-0 overflow-y-auto py-10 transition-all justify-center inset-0 z-[999] bg-gray-900/60 dark:bg-gray-800/90': true,
            'opacity-0 invisible': !open
        })}>
            <div ref={ref} className={classNames([
                className || 'w-[400px]',
                {
                    'bg-white dark:bg-gray-700 rounded-lg': true
                }
            ])}>
                <div className="p-4 border-b dark:border-gray-600 flex gap-x-2 items-center justify-between">
                    <div>
                        {title && (
                            <h4 className="font-semibold">{title}</h4>
                        )}
                    </div>
                    <div>
                        <button onClick={() => onClose()} className="size-[35px] inline-flex items-center dark:bg-gray-800 justify-center bg-gray-100 rounded-lg">
                            <FiX/>
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
    
    return open ? createPortal(modalContent, document.body) : false;
}

export default Modal;