import classNames from "classnames";
import { useStoreApp } from "../../../stores/module/app.store";

function FormGroup({ label, required = false, children, error = false }) {
    
    const {errors} = useStoreApp();
    
    return (
        <div className={classNames({
            'form-group': true,
            'form-group-error': errors[error]
        })}>
            {label && (
                <label className="form-label">
                    <span>{label} {required && <span className="text-red-500">*</span>}</span>
                </label>
            )}
            {children}
            {errors[error] && <p className="form-error">{errors[error]}</p>}
        </div>
    );
}

export default FormGroup;