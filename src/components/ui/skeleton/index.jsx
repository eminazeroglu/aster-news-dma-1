import classNames from "classnames";

function Skeleton({className}) {
    return (
        <span role="status" className="animate-pulse block">
            <span className={classNames([
                className || '',
                {
                    'bg-gray-200 block rounded-full dark:bg-gray-700': true
                }
            ])} />
        </span>

    );
}

export default Skeleton;