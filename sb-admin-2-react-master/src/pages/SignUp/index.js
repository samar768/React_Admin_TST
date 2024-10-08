import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = (props) => {
  const navigate = useNavigate();

  // Set the background class on mount
  useEffect(() => {
    document.getElementById('body').className = 'bg-gradient-primary';
  }, []);

  // Local state to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleRegister = (event) => {
    event.preventDefault();

    // Validate form inputs (optional, for example check if passwords match)
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    // Dispatch the Redux action with formData
    props.signUpUser(formData)
      .then(() => {
        console.log('User registered');
        navigate('/dashboard'); // Navigate to dashboard after registration
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div
                  className="col-lg-5 d-none d-lg-block bg-register-image"
                  style={ { backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover' } }
                ></div>
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user" onSubmit={ handleRegister }>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="firstName"
                            value={ formData.firstName }
                            onChange={ handleInputChange }
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="lastName"
                            value={ formData.lastName }
                            onChange={ handleInputChange }
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          value={ formData.email }
                          onChange={ handleInputChange }
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="password"
                            value={ formData.password }
                            onChange={ handleInputChange }
                            placeholder="Password"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="repeatPassword"
                            value={ formData.repeatPassword }
                            onChange={ handleInputChange }
                            placeholder="Repeat Password"
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-user btn-block" type="submit">
                        Register Account
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/">Already have an account? Login!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
