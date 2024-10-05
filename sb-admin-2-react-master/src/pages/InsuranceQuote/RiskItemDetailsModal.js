import React from "react";
import $ from "jquery";
import ReusableInput from "./ReusableInput";
import DropdownList from "../../components/DropdownList";

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
                                    <ReusableInput
                                        label="Year of Manufacture"
                                        id="YEAR"
                                        type="text"
                                        placeholder="Year of manufacture"
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <ReusableInput
                                        label="Sum Insured"
                                        id="SI"
                                        type="text"
                                        placeholder="Sum Insured"
                                        className="w-100"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <ReusableInput
                                        label="Rate"
                                        id="RATE"
                                        type="text"
                                        placeholder="Rate"
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <ReusableInput
                                        label="Premium"
                                        id="clientName"
                                        type="text"
                                        placeholder="Premium"
                                        className="w-100"
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
        </div>
    );
};

export default RiskItemDetailsModal;
