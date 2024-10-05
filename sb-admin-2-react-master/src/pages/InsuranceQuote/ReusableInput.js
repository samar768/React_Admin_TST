import React from "react";

const ReusableInput = ({ label, id, type, placeholder, className }) => (
    <div className="form-group">
        <label htmlFor={ id }>{ label }</label>
        <input
            id={ id }
            type={ type }
            placeholder={ placeholder }
            className={ `form-control ${className}` }  // Applies Bootstrap styling and full width
        />
    </div>
);


export default ReusableInput;
