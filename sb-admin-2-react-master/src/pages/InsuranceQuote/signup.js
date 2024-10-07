import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/insuranceQuote/profileAction'; // Import the Redux action

const SignUp = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { loading, error, success } = useSelector(state => state.auth); // Accessing state from redux

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpUser(formData));
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={ formData.username }
                        onChange={ handleChange }
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={ formData.password }
                        onChange={ handleChange }
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={ formData.confirmPassword }
                        onChange={ handleChange }
                        required
                    />
                </div>

                { loading && <p>Loading...</p> }
                { error && <p className="text-danger">{ error }</p> }
                { success && <p className="text-success">Sign-up successful!</p> }

                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
