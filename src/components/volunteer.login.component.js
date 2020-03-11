import React, { Component } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
import "./styles.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import { Alert } from "react-bootstrap";

class VolunteerLogin extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      msg: null
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (isAuthenticated) {
      window.location = "/";
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    this.props.login(user);
  }

  render() {
    return (
      <div
        style={{ justifyContent: "center", alignItems: "center", margin: 125 }}
        className="auth-wrapper"
      >
        <div className="auth-inner">
          <form onSubmit={this.onSubmit}>
            <h3>Sign In</h3>
            {this.state.msg ? (
              <Alert variant="danger">{this.state.msg}</Alert>
            ) : null}
            <div className="form-group">
              <label>Email address</label>
              <input
                name="email"
                onChange={this.onChange}
                value={this.state.first_name}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={this.onChange}
                value={this.state.first_name}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="forgotpassword">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(VolunteerLogin);
