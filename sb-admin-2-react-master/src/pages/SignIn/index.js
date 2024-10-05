import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignIn extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'bg-gradient-primary';
  }

  handleSignIn = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="container">
        {/* Outer Row */ }
        <div className="row justify-content-center align-items-center" style={ { minHeight: '100vh' } }>
          <div className="col-xl-6 col-lg-8 col-md-12">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */ }
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={ this.handleSignIn } className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                          Login
                        </button>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/signup">Create an Account!</Link>
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
  }
}

export default withRouter(SignIn);
