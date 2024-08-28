function Card({ children, titleIcon, title, rightRender }) {
    return (
        <div className="p-[15px] rounded-[4px] dark:bg-gray-800 bg-white shadow-[0px_2px_20px_0px_#0000000A]">
            {(title || titleIcon || rightRender) && (
                <div className="flex justify-between items-center pb-[9px] mb-[24px] border-b dark:border-gray-700">
                    <div className="flex items-center gap-x-[12px]">
                        {titleIcon && (
                            <span className="text-[24px]">
                                {titleIcon}
                            </span>
                        )}

                        <span className="text-[15px]">{title}</span>
                    </div>
                    <div>
                        {rightRender}
                    </div>
                </div>
            )}

            <div>
                {children}
            </div>
        </div>
    );
}

export default Card;