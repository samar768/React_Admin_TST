import React, { useState, useEffect } from "react";
import Topbar from "../../components/Navigation/Topbar";
import Sidebar from "../../components/Navigation/Sidebar";

// Sample data for quotes (you can replace this with an API call)
const sampleQuotes = [
    {
        id: 1,
        name: "Home Insurance",
        premium: 500,
        risks: [
            { id: 1, description: "Fire Damage", coverage: 100000 },
            { id: 2, description: "Theft", coverage: 50000 },
        ],
    },
    {
        id: 2,
        name: "Car Insurance",
        premium: 300,
        risks: [
            { id: 3, description: "Accident", coverage: 15000 },
            { id: 4, description: "Vandalism", coverage: 10000 },
        ],
    },
];

const InsuranceViewQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    // Simulate fetching quotes from an API
    useEffect(() => {
        // You can replace this with an actual API call
        setQuotes(sampleQuotes);
    }, []);

    // Handle Edit button click
    const handleEdit = (id) => {
        alert(`Edit quote with ID: ${id}`);
        // Implement editing functionality here
    };

    // Handle Delete button click
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete quote with ID: ${id}?`)) {
            setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
        }
    };

    return (
        <>
            <div id="wrapper">
                {/* Sidebar */ }
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */ }
                    <div id="content">
                        {/* Topbar */ }
                        <Topbar />
                        {/* End of Topbar */ }

                        {/* Begin Page Content */ }
                        <div className="container-fluid">
                            <div className="container mt-5">
                                <h2>Quotes and Risks</h2>
                                <div className="card">
                                    <div className="card-body">
                                        { quotes.length === 0 ? (
                                            <p>No quotes available.</p>
                                        ) : (
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Quote Name</th>
                                                            <th>Premium</th>
                                                            <th>Associated Risks</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        { quotes.map((quote) => (
                                                            <tr key={ quote.id }>
                                                                <td>{ quote.name }</td>
                                                                <td>${ quote.premium }</td>
                                                                <td>
                                                                    <ul>
                                                                        { quote.risks.map((risk) => (
                                                                            <li key={ risk.id }>
                                                                                { risk.description } - Coverage: ${ risk.coverage }
                                                                            </li>
                                                                        )) }
                                                                    </ul>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-warning mr-2"
                                                                        onClick={ () => handleEdit(quote.id) }
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        onClick={ () => handleDelete(quote.id) }
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )) }
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InsuranceViewQuotes;
