import React, { useState } from "react";
import './InsuranceQuote.css'; // Import the CSS file
import RiskItemDetailsModal from "./RiskItemDetailsModal";

const QuoteTable = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleEdit = (id) => {
        console.log(`Edit item with ID: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete item with ID: ${id}`);
    };

    const handlePersistQuote = () => {
        console.log("Persisted Quote");
    };

    const handleItemSubmit = (itemDetails) => {
        console.log("Submitted item details: ", itemDetails);
    };

    return (
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card shadow mb-4 border-animation">
                <div className="text-left">
                    <h2 className="heading">Quote Risk</h2>
                </div>
                <div className="card-header py-3">
                    <button className="btn btn-primary" onClick={ handleShowModal }>
                        Add New Item
                    </button>
                    <RiskItemDetailsModal
                        show={ showModal }
                        handleClose={ handleCloseModal }
                        onSubmit={ handleItemSubmit }
                    />
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { [
                                    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-555-5555", address: "123 Main St" },
                                    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-555-5556", address: "456 Elm St" },
                                    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5557", address: "789 Oak St" },
                                ].map(({ id, name, email, phone, address }) => (
                                    <tr key={ id }>
                                        <td>{ id }</td>
                                        <td>{ name }</td>
                                        <td>{ email }</td>
                                        <td>{ phone }</td>
                                        <td>{ address }</td>
                                        <td>
                                            <button className="btn btn-warning button-spacing" onClick={ () => handleEdit(id) }>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger button-spacing" onClick={ () => handleDelete(id) }>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-header py-3">
                    <button id="btnPersistQuote" className="btn btn-primary" onClick={ handlePersistQuote }>
                        Persist Quote
                    </button>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default QuoteTable;
