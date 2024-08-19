import classNames from "classnames";

function Button(
    {
        children,
        onClick = () => { },
        size = 'md',
        block = false,
        className,
        property = 'primary',
        rounded = false,
        roundedFull = false,
    }
) {
    return (
        <button
            onClick={() => onClick()}
            className={classNames(
                {
                    'btn': true,
                    'btn-block': block,
                    'btn-rounded': rounded && !roundedFull,
                    'btn-rounded-full': !rounded && roundedFull,
                },
                [`btn-${property}`, `btn-${size}`, className || '']
            )}
        >
            {children}
        </button>
    );
}

export default Button;