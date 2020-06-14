import React, { Component, useStyles, useState, useEffect } from "react";
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
import { Carousel } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NewsComponent from "../Utils/NewsComponent";

export default function HomeScreen() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/disaster/isactive")
      .then((response) => {
        const data = response.data;
        setData(data);
        console.log(data);
      })
      .catch(() => {
        alert("Error Recieving Data");
      });
  }, []);

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
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
      height: 0,
      paddingTop: "56.25%" // 16:9,
      // marginTop: "30"
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
    },
    root: {
      // height: 500
    }
  }));
  const classes = useStyles();
  const cards = [
    {
      key: 1,
      heading: "Request For Resources",
      content: "",
      btnRoute: "resources-details",
      image:
        "https://cdn2.iconfinder.com/data/icons/antto-basic-1/450/request-512.png"
    },
    {
      key: 2,
      heading: "Contribute",
      content: "",
      btnRoute: "next-details",
      image:
        "https://image.shutterstock.com/image-vector/partnership-contribute-puzzles-trendy-icon-260nw-1204863133.jpg"
    },
    {
      key: 3,
      heading: "Relief Camps",
      content: "",
      btnRoute: "camp-details",
      image: "https://static1.bigstockphoto.com/4/5/2/large1500/254017279.jpg"
    },
    {
      key: 4,
      heading: "Volunteer Registration",
      content: "",
      btnRoute: "/add-volunteer-details",
      image:
        "https://cdn5.vectorstock.com/i/1000x1000/15/44/helping-hands-vector-1421544.jpg"
    },
    {
      key: 5,
      heading: "Camps Registration",
      content: "",
      btnRoute: "#",
      image:
        "https://img.pngio.com/this-free-icons-png-design-of-camp-area-camp-png-2400_2400.png"
    },
    {
      key: 6,
      heading: "Collection Centers",
      content: "",
      btnRoute: "#1",
      image:
        "https://st3.depositphotos.com/6778576/14709/v/1600/depositphotos_147091501-stock-illustration-map-location-icon.jpg"
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* <div className={classes.heroContent}> */}
        {/* <div
          // className="container"
          style={{
            display: "flex",
            marginTop: 20,
            marginLeft: 100,
            marginRight: 100
            //   alignItems: "center",
            //   justifyContent: "center",
          }}
        > */}
        <Grid container spacing={5} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} style={{ marginLeft: 75 }}>
            <Carousel
              activeIndex={index}
              style={{ width: "100%", height: 600 }}
              onSelect={handleSelect}
            >
              {data.map((data) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 "
                    src={data.imgsrc}
                    alt="First slide"
                    // height={400}
                  />
                  <Carousel.Caption>
                    <h3>{data.disaster_name}</h3>
                    <p>{data.slug}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ marginLeft: 25 }}>
              <NewsComponent />
            </div>
          </Grid>
        </Grid>
        {/* </div> */}
        {/* </div> */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="250"
                      image={card.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.heading}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {card.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={card.btnRoute}>
                      <Button
                        size="small"
                        // onClick=
                        variant="contained"
                        color="primary"
                      >
                        Go there
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />

      {/* End footer */}
    </React.Fragment>
  );
  // }
}
