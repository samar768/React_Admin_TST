import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import insuranceMainForm from "./pages/InsuranceQuote/";
import InsuranceViewQuotes from "./pages/InsuranceQuote/InsuranceViewQuotes";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={ SignIn } /> */ }
            {/* <Route exact path="/dashboard" component={ Dashboard } />
            <Route path="/signup" component={ SignUp } />
           
            <Route path="/charts" component={ Charts } />
            {/* <Route path="*" component={NotFound} /> */ }
            <Route exact path="/" component={ SignIn } />
            <Route path="/cards" component={ Cards } />
            <Route exact path="/quotes" component={ insuranceMainForm } />
            <Route exact path="/viewQuote" component={ InsuranceViewQuotes } />

            <Route exact path="*" component={ Dashboard } />
            <Route path="/signup" component={ SignUp } />
            <Route exact path="/" component={ SignIn } />
            <Route path="*" component={ NotFound } />

        </Switch>
    </BrowserRouter>
);

export default Routes;
