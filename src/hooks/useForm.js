import { useState } from "react";

const useForm = (intialState = {}) => {
    const [values, setValues] = useState(intialState);

    const reset = (newFormState = intialState) => {
        setValues(newFormState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];

    //forma más corta
    //    return [values, ({target})=>{
    //        setValues({...values,[target.name]:target.value})
    //    }];
};

export default useForm;
