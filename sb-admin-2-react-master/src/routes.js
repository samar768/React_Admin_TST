import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import InsuranceMainForm from "./pages/InsuranceQuote/";
import InsuranceViewQuotes from "./pages/InsuranceQuote/InsuranceViewQuotes";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <SignIn /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/charts" element={ <Charts /> } />
            <Route path="/cards" element={ <Cards /> } />
            <Route path="/quotes" element={ <InsuranceMainForm /> } />
            <Route path="/viewQuote" element={ <InsuranceViewQuotes /> } />
            <Route path="*" element={ <NotFound /> } /> {/* Catch-all route */ }
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
