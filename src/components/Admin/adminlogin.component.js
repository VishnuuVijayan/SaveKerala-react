import React, { Component } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
import "../styles.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { adminlogin } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  static propTypes = {
    isAdminAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    adminlogin: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    const admin = {
      email,
      password
    };

    this.props.adminlogin(admin);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error, isAdminAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (isAdminAuthenticated) {
      window.location = "/admin-home";
    }
  }

  render() {
    return (
      <div
        style={{ justifyContent: "center", alignItems: "center", margin: 125 }}
        className="auth-wrapper"
      >
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Admin email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                value={this.state.value}
                onChange={this.onChange}
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
            <button
              onClick={this.onSubmit}
              className="btn btn-primary btn-block text-uppercase"
              // value="sign in"
            >
              Sign in{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdminAuthenticated: state.auth.isAdminAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { adminlogin, clearErrors })(
  AdminLogin
);
