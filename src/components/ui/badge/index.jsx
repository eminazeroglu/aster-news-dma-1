import classNames from "classnames";
import './index.css'

function Badge({children, size = 'md', type = 'default'}) {
    return (
        <span className={classNames([
            `badget-${type}`,
            `badget-${size}`,
            {
                'badget': true
            }
        ])}>
            {children}
        </span>
    );
}

export default Badge
