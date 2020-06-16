import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import { data, districts } from "./data";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  fullWidth: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [district, setDistrict] = React.useState("");

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              style={{ fontSize: 50, fontWeight: 400, letterSpacing: 2 }}
            >
              Update Camp Details
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Camp ID</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.campId}
                // value={values.amount}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={8}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Camp Name
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.campName}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl
              fullWidth
              className={classes.formControl}
              variant="filled"
            >
              <InputLabel id="demo-simple-select-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                onChange={handleChange}
              >
                {districts.map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">State</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.state}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Maximum Occupancy
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.maxOccupancy}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Current Occupancy
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.currentOccupancy}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Contact</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.contact}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={10}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Image Link
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.image}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Location src
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={data.location}
                // onChange={handleChange("amount")}
                // startAdornment={
                //   <InputAdornment position="start">$</InputAdornment>
                // }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: 30 }}>
            <Button
              variant="contained"
              style={{
                width: 200,
                backgroundColor: "#23395d",
                color: "#fff",
                textTransform: "none"
              }}
            >
              Update Camp Details
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
