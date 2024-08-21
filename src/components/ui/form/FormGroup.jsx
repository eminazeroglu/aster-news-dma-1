import classNames from "classnames";

function FormGroup({ label, required = false, children, error = false }) {
    return (
        <div className={classNames({
            'form-group': true,
            'form-group-error': error
        })}>
            {label && (
                <label className="form-label">
                    <span>{label} {required && <span className="text-red-500">*</span>}</span>
                </label>
            )}
            {children}
            {error && <p className="form-error">{error}</p>}
        </div>
    );
}

export default FormGroup;