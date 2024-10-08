import React, { useState } from "react";

const ReusableNumericInput = ({
    label,
    id,
    type,
    placeholder,
    className,
    numeric,
    currencySymbol,
    maxLength,
    decimalPlaces,
    isDisabled // New prop to control disabling the input
}) => {
    const [inputValue, setInputValue] = useState(currencySymbol || ""); // Initialize with the currency symbol

    const handleInputChange = (e) => {
        let { value } = e.target;

        // Remove the currency symbol from the input to apply numeric validation
        if (currencySymbol) {
            value = value.replace(currencySymbol, ''); // Strip out the currency symbol before validation
        }

        // Validate if numeric is true and allow digits and decimal points
        if (numeric) {
            // Allow digits and decimals only
            value = value.replace(/[^0-9.]/g, '');

            // Handle decimal places restriction
            if (decimalPlaces !== undefined) {
                const [integerPart, decimalPart] = value.split(".");
                if (decimalPart && decimalPart.length > decimalPlaces) {
                    value = integerPart + "." + decimalPart.slice(0, decimalPlaces);
                }
            }
        }

        // Handle max length restriction (for both integer and decimal places combined)
        if (maxLength !== undefined && value.length > maxLength) {
            value = value.slice(0, maxLength);
        }

        // Add the currency symbol back to the value
        setInputValue(currencySymbol + " " + value);
    };

    return (
        <div className="form-group">
            <label htmlFor={ id }>{ label }</label>
            <input
                id={ id }
                type={ type }
                value={ inputValue } // Controlled input value with currency prefix
                placeholder={ placeholder }
                className={ `form-control ${className}` } // Applies Bootstrap styling
                onChange={ handleInputChange } // Trigger validation and input update on change
                disabled={ isDisabled } // Disable the input if isDisabled is true
            />
        </div>
    );
};

export default ReusableNumericInput;
