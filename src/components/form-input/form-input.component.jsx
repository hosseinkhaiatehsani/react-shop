import React from "react";

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
    return (
        <div className="group">
            <input className="custom-input" onChange={handleChange} {...otherInputProps}/>
            { label ? (<label className={`${otherInputProps.value.length ? 'hide' : ''} custom-label`}>
                {label}
            </label>) : null }
        </div>
    )
}

export default FormInput;