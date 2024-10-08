import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import InsuranceMainForm from "./pages/InsuranceQuote/";
import InsuranceViewQuotes from "./pages/InsuranceQuote/InsuranceViewQuotes";
import "./pages/InsuranceQuote/loader.css"; // Import custom CSS

// Bootstrap Spinner
const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center loader-container">
        <div className="spinner-border text-primary loader-spinner" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const AppRoutes = (props) => {
    const isLoading = useSelector((state) => state.loading.isLoading); // Access loading state from Redux

    return (
        <BrowserRouter>
            { isLoading ? (
                <LoadingSpinner /> // Show loading spinner when loading
            ) : (
                <Routes>
                    <Route path="/" element={ <SignIn /> } />
                    <Route path="/dashboard" element={ <Dashboard /> } />
                    <Route path="/signup" element={ <SignUp { ...props } /> } />
                    <Route path="/charts" element={ <Charts /> } />
                    <Route path="/cards" element={ <Cards /> } />
                    <Route path="/quotes" element={ <InsuranceMainForm { ...props } /> } />
                    <Route path="/viewQuote" element={ <InsuranceViewQuotes { ...props } /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            ) }
        </BrowserRouter>
    );
};

export default AppRoutes;
