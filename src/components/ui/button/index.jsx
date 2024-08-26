import classNames from "classnames";
import LoadingIcon from "../loading-icon";
import { useNavigate } from "react-router-dom";

function Button(
    {
        children,
        type = "button",
        onClick = () => { },
        size = 'md',
        to,
        block = false,
        className,
        property = 'primary',
        rounded = false,
        roundedFull = false,
        loading = false,
        disabled = false,
    }
) {

    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to)
        }
        else {
            onClick();
        }
    }
    
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={() => handleClick()}
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