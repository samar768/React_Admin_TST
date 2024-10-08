import React, { useState, useEffect } from "react";
import Topbar from "../../components/Navigation/Topbar";
import Sidebar from "../../components/Navigation/Sidebar";

// Sample data for quotes (you can replace this with an API call)
const sampleQuotes = [
    {
        id: 1,
        name: "Quote0001",
        description: "Motor Risk Insurance",
        startDate: "01-01-2024",
        expiryDate: "01-01-2025",
        createdDate: "01-01-2024",
        suminsured: "50000",
        premium: 500,

        risks: [
            { id: 1, description: "Fire Damage", coverage: 100000 },
            { id: 2, description: "Theft", coverage: 50000 },
        ],
    },
    {
        id: 2,
        name: "Quote0002",
        description: "Motor Risk Insurance",
        startDate: "01-01-2024",
        expiryDate: "01-01-2025",
        createdDate: "01-01-2024",
        suminsured: "50000",
        premium: 300,

        risks: [
            { id: 3, description: "Accident", coverage: 15000 },
            { id: 4, description: "Vandalism", coverage: 10000 },
        ],
    },
];

const InsuranceViewQuotes = (props) => {
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
                                                        {/* <tr>
                                                            <th>Quote Number</th>
                                                            <th>Quote Description</th>
                                                            <th>Start Date</th>
                                                            <th>Expiry Date</th>
                                                            <th>Quote Created at</th>
                                                            <th>Sum Insured</th>
                                                            <th>Premium</th>
                                                            <th>Associated Risks</th>
                                                            <th>Actions</th>
                                                        </tr> */}
                                                        <tr>
                                                            <th className="text-nowrap text-sm">Quote Number</th>
                                                            <th className="text-sm">Quote Description</th>
                                                            <th className="text-nowrap text-sm">Start Date</th>
                                                            <th className="text-nowrap text-sm">Expiry Date</th>
                                                            <th className="text-sm">Quote Created at</th>
                                                            <th className="text-nowrap text-sm">Sum Insured</th>
                                                            <th className="text-nowrap text-sm">Premium</th>
                                                            <th className="text text-sm">Associated Risks</th>
                                                            <th className="text-nowrap text-sm">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        { quotes.map((quote) => (
                                                            <tr key={ quote.id }>
                                                                <td>{ quote.name }</td>
                                                                <td>{ quote.description }</td>
                                                                <td>{ quote.startDate }</td>
                                                                <td>{ quote.expiryDate }</td>
                                                                <td>{ quote.createdDate }</td>
                                                                <td>R{ quote.suminsured }</td>
                                                                <td>R{ quote.premium }</td>
                                                                <td>
                                                                    <ul>
                                                                        { quote.risks.map((risk) => (
                                                                            <li key={ risk.id }>
                                                                                { risk.description } - Coverage: ${ risk.coverage }
                                                                            </li>
                                                                        )) }
                                                                    </ul>
                                                                </td>
                                                                <div className="d-flex">
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
                                                                </div>
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
