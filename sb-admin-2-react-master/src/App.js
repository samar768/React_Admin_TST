import React from "react";
import Routes from "./routes";
import { connect } from "react-redux";

const App = () => <Routes />;

// Step 2: Map Redux state to props
const mapStateToProps = (state) => ({
    // loading: state.auth.loading,
    // user: state.auth.user,
    // error: state.auth.error,
});

// Step 3: Map dispatch to props (connect action)
const mapDispatchToProps = {

};

// Step 4: Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);