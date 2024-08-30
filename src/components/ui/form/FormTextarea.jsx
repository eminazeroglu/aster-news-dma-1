import classNames from "classnames";

function FormInput({ value, rows= 4, password = false, onChange = () => {}, className, ...props }) {
    return (
        <textarea
            rows={rows}
            onChange={e => onChange(e.target.value)}
            className={classNames([
                className || '',
                {
                    'form-element': true
                }
            ])}
            {...props}
        ></textarea>
    );
}

export default FormInput;