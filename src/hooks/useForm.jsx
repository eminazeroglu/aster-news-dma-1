import { useState } from "react";

const useForm = ({initialState = {} , onSubmit} = {}) => {
   
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);

    const setField = (name, value) => {
        setValues(oldVal => ({
            ...oldVal,
            [name]: value
        }))
    }

    const resetValues = () => {
        setValues(initialState)
    }

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setLoading(true);
        if (onSubmit) await onSubmit(values);
        setLoading(false)
    }

    return {
        values,
        setField,
        resetValues,
        handleSubmit,
        loading
    }
    
}

export default useForm;