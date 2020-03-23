// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { register } from "../actions/authActions";
// import { clearErrors } from "../actions/errorActions";
// class Signup extends Component {
//   static propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     register: PropTypes.func.isRequired,
//     clearErrors: PropTypes.func.isRequired
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       msg: null
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     // this.showAlert = this.showAlert.bind(this);
//   }
//   // }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   componentDidMount() {
//     this.props.clearErrors();
//   }

//   onSubmit(e) {
//     // this.props.clearErrors;
//     e.preventDefault();
//     const { first_name, last_name, email, password } = this.state;

//     const newUser = {
//       first_name,
//       last_name,
//       email,
//       password
//     };
//     this.props.register(newUser);
//   }

//   componentDidUpdate(prevProps) {
//     const { error, isAuthenticated } = this.props;
//     if (error !== prevProps.error) {
//       if (error.id === "REGISTER_FAIL") {
//         this.setState({
//           msg: error.msg.msg
//         });
//       } else {
//         this.setState({ msg: null });
//       }
//     }

//     if (isAuthenticated) {
//       window.location = "/";
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="auth-wrapper">
//           <div className="auth-inner col-sm-6">
//             <form onSubmit={this.onSubmit}>
//               <h3>Sign Up</h3>
//               {this.state.msg ? (
//                 <Alert variant="danger">{this.state.msg}</Alert>
//               ) : null}
//               <div className="form-group">
//                 <label>First name</label>
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.first_name}
//                   name="first_name"
//                   type="text"
//                   className="form-control"
//                   placeholder="First name"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Last name</label>
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.last_name}
//                   name="last_name"
//                   type="text"
//                   className="form-control"
//                   placeholder="Last name"
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <label>Locality</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Locality"
//                 />
//               </div> */}
//               {/* <div className="form-group">
//                 <label>District</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="District"
//                 />
//               </div> */}
//               {/* <div className="form-group">
//                 <label>Mobile Number</label>
//                 <input
//                   type="integer"
//                   className="form-control"
//                   placeholder="Mobile Number"
//                 />
//               </div> */}

//               <div className="form-group">
//                 <label>Email address</label>
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.email}
//                   name="email"
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter email"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.password}
//                   name="password"
//                   type="password"
//                   className="form-control"
//                   placeholder="Enter password"
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <label>Confirm Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Confirm password"
//                 />
//               </div> */}
//               {/* <div class="form-check">
//                 <input
//                   type="checkbox"
//                   class="form-check-input"
//                   id="exampleCheck1"
//                 ></input>
//                 <label class="form-check-label" for="exampleCheck1">
//                   Interested in Volunteering?
//                 </label>
//               </div> */}
//               <div style={{ marginTop: 20 }}>
//                 <div className="form-group m-3">
//                   <input
//                     type="submit"
//                     className="btn btn-primary"
//                     value="SUBMIT"
//                   />
//                 </div>
//               </div>
//               <p className="forgot-password text-right">
//                 Already registered <Link to="/login">Sign in</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });

// export default connect(mapStateToProps, { register, clearErrors })(Signup);

// import React, { useState, useEffect, useRef } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import { register } from "../actions/authActions";
// import { clearErrors } from "../actions/errorActions";
// import Container from "@material-ui/core/Container";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// function SignUp(props) {
//   const classes = useStyles();
//   const [first_name, setFname] = useState("");
//   const [last_name, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const onSubmit = e => {
//     e.preventDefault();
//     const user = {
//       first_name,
//       last_name,
//       email,
//       password
//     };
//     props.register(user);
//   };

//   const isInitialMount = useRef(true);
//   const [msg, setMsg] = useState("");

//   useEffect(
//     prevProps => {
//       const { isAuthenticated, error } = props;
//
//     // console.log(prevProps.error);
//   );

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} onSubmit={onSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 value={first_name}
//                 onChange={e => setFname(e.target.value)}
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 value={last_name}
//                 onChange={e => setLname(e.target.value)}
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });

// export default connect(mapStateToProps, { register, clearErrors })(SignUp);

import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container
} from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class SignUp extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
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
    const { classes } = this.props;
    return (
      <Container style={{ paddingTop: 50 }}>
        <Paper className={classes.padding}>
          <h1 className="text-info">Sign Up</h1>
          <div className={classes.margin}>
            {this.state.msg ? (
              <Alert variant="danger">{this.state.msg}</Alert>
            ) : null}
            <Grid container spacing={8} alignItems="flex-end">
              {/* <Grid item>
                Email
              </Grid> */}
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="first_name"
                  label="First Name"
                  type="text"
                  fullWidth
                  autoFocus
                  required
                  value={this.state.first_name}
                  onChange={e =>
                    this.setState({
                      [e.target.id]: e.target.value
                    })
                  }
                />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="last_name"
                  label="Last Name"
                  type="text"
                  fullWidth
                  autoFocus
                  required
                  value={this.state.last_name}
                  onChange={e =>
                    this.setState({
                      [e.target.id]: e.target.value
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              {/* <Grid item>
                Email
              </Grid> */}
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  autoFocus
                  required
                  value={this.state.email}
                  onChange={e =>
                    this.setState({
                      [e.target.id]: e.target.value
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              {/* <Grid item>Password</Grid> */}
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  value={this.state.password}
                  onChange={e =>
                    this.setState({
                      [e.target.id]: e.target.value
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Button
                  disableFocusRipple
                  disableRipple
                  style={{ textTransform: "none" }}
                  variant="text"
                  color="primary"
                >
                  Forgot password ?
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={this.onSubmit}
              >
                Login
              </Button>
            </Grid>
          </div>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
  withStyles(styles)(SignUp)
);

// export default withStyles(styles)(SignUp);
