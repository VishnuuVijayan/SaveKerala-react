// import React, { Component } from "react";
// // import { Form, Button, Row, Col } from "react-bootstrap";
// import "./styles.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { login } from "../actions/authActions";
// import { clearErrors } from "../actions/errorActions";
// import { Alert } from "react-bootstrap";

// class VolunteerLogin extends Component {
//   constructor(props) {
//     super(props);

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       email: "",
//       password: "",
//       msg: null
//     };
//   }

//   componentDidUpdate(prevProps) {
//     const { error, isAuthenticated } = this.props;
//     if (error !== prevProps.error) {
//       if (error.id === "LOGIN_FAIL") {
//         this.setState({ msg: error.msg.msg });
//       } else {
//         this.setState({ msg: null });
//       }
//     }
//     if (isAuthenticated) {
//       window.location = "/";
//     }
//   }

//   componentDidMount() {
//     this.props.clearErrors();
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     return (
//       <div
//         style={{ justifyContent: "center", alignItems: "center", margin: 125 }}
//         className="auth-wrapper"
//       >
//         <div className="auth-inner">
//           <form onSubmit={this.onSubmit}>
//             <h3>Sign In</h3>
//             {this.state.msg ? (
//               <Alert variant="danger">{this.state.msg}</Alert>
//             ) : null}
//             <div className="form-group">
//               <label>Email address</label>
//               <input
//                 name="email"
//                 onChange={this.onChange}
//                 value={this.state.first_name}
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 onChange={this.onChange}
//                 value={this.state.first_name}
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//               />
//             </div>

//             <div className="form-group">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>

//             <button type="submit" className="btn btn-primary btn-block">
//               Sign in
//             </button>
//             <p className="forgot-password text-right">
//               Forgot <a href="forgotpassword">password?</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { login } from "../actions/authActions";
import PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Save Kerala
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignInSide(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = e => {
    const { isAuthenticated } = props;
    e.preventDefault();
    const user = {
      email,
      password
    };

    props.login(user);
    // const isAuthenticated = props;

    if (isAuthenticated) {
      window.location = "/";
    }
  };

  const propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  useEffect(() => {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
      window.location = "/";
    }
    props.clearErrors();
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={onSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(SignInSide);
