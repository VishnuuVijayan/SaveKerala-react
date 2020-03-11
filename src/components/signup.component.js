import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { Alert } from "react-bootstrap";
import { clearErrors } from "../actions/errorActions";
class Signup extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      msg: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.showAlert = this.showAlert.bind(this);
  }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  onSubmit(e) {
    // this.props.clearErrors;
    e.preventDefault();
    const { first_name, last_name, email, password } = this.state;

    const newUser = {
      first_name,
      last_name,
      email,
      password
    };
    this.props.register(newUser);
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated) {
      window.location = "/";
    }
  }

  render() {
    return (
      <div>
        <div className="auth-wrapper">
          <div className="auth-inner col-sm-6">
            <form onSubmit={this.onSubmit}>
              <h3>Sign Up</h3>
              {this.state.msg ? (
                <Alert variant="danger">{this.state.msg}</Alert>
              ) : null}
              <div className="form-group">
                <label>First name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.first_name}
                  name="first_name"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.last_name}
                  name="last_name"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              {/* <div className="form-group">
                <label>Locality</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Locality"
                />
              </div> */}
              {/* <div className="form-group">
                <label>District</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="District"
                />
              </div> */}
              {/* <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="integer"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div> */}

              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              {/* <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div> */}
              {/* <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label class="form-check-label" for="exampleCheck1">
                  Interested in Volunteering?
                </label>
              </div> */}
              <div style={{ marginTop: 20 }}>
                <div className="form-group m-3">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="SUBMIT"
                  />
                </div>
              </div>
              <p className="forgot-password text-right">
                Already registered <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Signup);
