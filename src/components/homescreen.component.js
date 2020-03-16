import React, { Component, useStyles } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import NotificationsIcon from '@material-ui/icons/Notifications';
export default function HomeScreen() {
  // constructor(props) {
  //   super(props);
  //   this.state = { disasters: [], images: [] };
  // }
  // componentDidMount() {
  //   this.getData();
  // }

  // getData = () => {
  //   axios
  //     .get("http://localhost:5000/disaster/")
  //     .then(response => {
  //       const data = response.data;
  //       this.setState({ disasters: data });
  //       console.log("Data has been Recieved");
  //     })
  //     .catch(() => {
  //       alert("Error Recieving Data");
  //     });
  // };

  // render() {
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));
  const classes = useStyles();
  const cards = [{key : 1, heading : "Request For Resources",content:"",btnRoute : "#1", image:"https://promptinnov.com/wp-content/uploads/2016/03/globe-bg.jpg" },
  {key : 2, heading : "Contribute",content:"",btnRoute : "#1", image:"https://www.pinclipart.com/picdir/middle/280-2800355_social-contribution-activities-clipart.png"},
  {key : 3, heading : "Relief Camps",content:"",btnRoute : "#1", image:"https://cdn2.iconfinder.com/data/icons/refugee-crisis-glyph/64/camp-asylum-refugee-shelter-refuge-512.png"},
  {key : 4, heading : "Volunteer Registration",content:"",btnRoute : "#1", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTpmfpY5-XBXZ8pS0P5SPsIVW4MerMRzpkJaUUnScaduH8t-uS"},
  {key : 5, heading : "Camps Registration",content:"",btnRoute : "#1", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL2D8xL2ohwalT7LMYaESIxtxMT8lJrz74TZAFeQs8TG53YUhm"},
  {key : 6, heading : "Collection Centers",content:"",btnRoute : "#1", image:"https://img.favpng.com/5/22/2/google-maps-computer-icons-google-map-maker-symbol-png-favpng-1v3iHMhVJGSUhJtq7a43cnXhP.jpg"},


];

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              
              Carosel{" "}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Carosel images
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Go TO{" "}
                  </Button>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    // image="https://promptinnov.com/wp-content/uploads/2016/03/globe-bg.jpg"
                    title="Image title"
                    icon={card.icon}

                  /> */}
                  {/* <{card.icon}/> */}
                  <cardMedia
                  className={classes.cardMedia}
                  title="image title"
                  image={card.image}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.content} </Typography>
                  </CardContent>
                  <CardActions style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button size="small" onpress={card.btnRoute} color="primary">
                      View
                     </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer Here
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Team Vibe{" "}
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
  // }
}
