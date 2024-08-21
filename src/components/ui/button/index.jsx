import classNames from "classnames";
import LoadingIcon from "../loading-icon";

function Button(
    {
        children,
        type = "button",
        onClick = () => { },
        size = 'md',
        block = false,
        className,
        property = 'primary',
        rounded = false,
        roundedFull = false,
        loading = false,
    }
) {
    return (
        <button
            type={type}
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
            {loading && <span><LoadingIcon /></span>}
            <span>{children}</span>
        </button>
    );
}

export default Button;