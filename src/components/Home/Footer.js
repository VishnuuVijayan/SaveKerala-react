import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  TextField,
  withStyles,
  Button,
  Link,
} from "@material-ui/core";
// import { Link  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    background: "#343a40",
  },
  gridStyle: {
    padding: 30,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 40,
    margin: 5,
  },
  items: {
    color: "#b7d8d6",
    opacity: 0.7,
    margin: 5,
    marginLeft: 40,
    // fontSize: 1,
  },
  margin: {
    marginTop: 5,
    marginLeft: 40,
    color: "#b7d8d6",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.gridStyle} xs={6} md={3}>
          <Typography variant="body1" className={classes.heading}>
            Services
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Services
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Services
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Services
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Services
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Services
          </Typography>
        </Grid>
        <Grid item className={classes.gridStyle} xs={6} md={3}>
          <Typography variant="body1" className={classes.heading}>
            Resources
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Resources
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Resources
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Resources
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Resources
          </Typography>
          <Typography variant="body2" className={classes.items}>
            Resources
          </Typography>
        </Grid>
        <Grid item className={classes.gridStyle} xs={6} md={6}>
          <Typography variant="body1" className={classes.heading}>
            Contact us
          </Typography>

          <CssTextField
            className={classes.margin}
            label="Message"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
              href="#contained-buttons"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          style={{ backgroundColor: "#101820ff" }}
          //   align="center"
        >
          <Copyright />
        </Grid>
      </Grid>
    </div>
  );
}

function Copyright() {
  return (
    <Typography
      variant="body2"
      style={{ color: "#fff", margin: 20 }}
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SaveKerala
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
