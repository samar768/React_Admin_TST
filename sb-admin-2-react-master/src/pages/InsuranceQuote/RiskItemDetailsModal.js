import React from "react";
import $ from "jquery";
import ReusableInput from "./ReusableInput";
import DropdownList from "../../components/DropdownList";
import ReusableNumericInput from "./ReusableNumericInput";

// Static Modal Component
const RiskItemDetailsModal = ({ show, handleClose, onSubmit }) => {
    // Handles modal visibility based on the 'show' prop
    React.useEffect(() => {
        const modal = $("#staticModal");
        if (show) {
            modal.modal("show");
        } else {
            modal.modal("hide");
        }
    }, [show]);

    // Handles modal save functionality
    const handleOnSave = () => {
        const itemDetails = {
            year: $("#YEAR").val(),
            sumInsured: $("#SI").val(),
            rate: $("#RATE").val(),
            premium: $("#clientName").val(),
        };
        onSubmit(itemDetails);
        handleClose();
    };

    return (
        <div>
            <div className="modal fade" id="staticModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Motor Risk</h5>
                            <button type="button" className="close" onClick={ handleClose }>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <DropdownList
                                        label="Motor Make"
                                        lookupCode="VehicleMakeList"
                                        onSelect={ () => { } }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <DropdownList
                                        label="Model"
                                        lookupCode="VehicleModelList"
                                        onSelect={ () => { } }
                                    />
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="col-md-6">
                                    <ReusableNumericInput
                                        label="Year of Manufacture"
                                        id="YEAR"
                                        type="text"  // Can use "number" too
                                        placeholder="Enter your Year of Manufacture"
                                        className="w-100"
                                        numeric={ true }  // Enable numeric validation
                                        currencySymbol=""
                                        maxLength={ 4 }  // Maximum length of the entire input, including decimals
                                        decimalPlaces={ 0 }  // Restrict to 2 decimal places
                                    />
                                </div>

                                <div className="col-md-6">
                                    <ReusableNumericInput
                                        label="Sum Insured"
                                        id="SumInsured"
                                        type="text"  // Can use "number" too
                                        placeholder="Enter your Sum insured"
                                        className="w-100"
                                        numeric={ true }  // Enable numeric validation
                                        currencySymbol="R"
                                        maxLength={ 10 }  // Maximum length of the entire input, including decimals
                                        decimalPlaces={ 2 }  // Restrict to 2 decimal places
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <ReusableNumericInput
                                        label="Rate"
                                        id="RATE"
                                        type="text"  // Can use "number" too
                                        placeholder="Enter your Rate"
                                        className="w-100"
                                        numeric={ true }  // Enable numeric validation
                                        currencySymbol="%"
                                        maxLength={ 4 }  // Maximum length of the entire input, including decimals
                                        decimalPlaces={ 2 }
                                    />

                                </div>
                                <div className="col-md-6">
                                    <ReusableNumericInput
                                        label="Premium"
                                        id="PREMIUM"
                                        type="text"  // Can use "number" too
                                        placeholder="Enter your Premium"
                                        className="w-100"
                                        numeric={ true }  // Enable numeric validation
                                        currencySymbol=""
                                        maxLength={ 4 }  // Maximum length of the entire input, including decimals
                                        decimalPlaces={ 2 }
                                        isDisabled={ true }
                                    />

                                </div>


                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={ handleClose }>
                                CLOSE
                            </button>
                            <button type="button" className="btn btn-primary" onClick={ handleOnSave }>
                                SAVE Risk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RiskItemDetailsModal;
