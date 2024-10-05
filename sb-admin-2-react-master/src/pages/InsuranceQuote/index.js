import React from "react";
import './InsuranceQuote.css'; // Import the custom CSS file
import QuoteHeader from "./QuoteHeader";
import QuoteTable from "./QuoteTable";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";

const QuoteMainApp = () => {
    return (
        <>
            <div id="wrapper">

                {/* <!-- Sidebar --> */ }
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */ }
                    <div id="content">

                        {/* <!-- Topbar --> */ }
                        <Topbar />
                        {/* <!-- End of Topbar --> */ }

                        {/* <!-- Begin Page Content --> */ }
                        <div className="container-fluid">

                            {/* <!-- Content Row --> */ }
                            <QuoteHeader />
                            <QuoteTable />
                        </div>
                    </div>
                </div>
            </div>


        </>

    );

};
export default QuoteMainApp;
