import React from "react";
import Routes from "./routes";
import { connect } from "react-redux";
import { signUpUser } from "./redux/insuranceQuote/profileAction";

const App = (props) => {
    return <Routes { ...props } />;  // Spread props here to pass them to Routes
};

// Step 2: Map Redux state to props
const mapStateToProps = (state) => ({
    loading: state.loading.loading,
    user: state.profileDetails,
});

// Step 3: Map dispatch to props (connect action)
const mapDispatchToProps = (dispatch) => {
    return {
        // intialise all redux the actions here  
        signUpUser: (signupPayload) => {
            return dispatch(signUpUser(signupPayload));
        },
    }
};

// Step 4: Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);