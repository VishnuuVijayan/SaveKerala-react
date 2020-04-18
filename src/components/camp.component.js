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

export default function HomeScreen() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [data, setData] = useState([]);

 

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      height: 0,
      paddingTop: "56.25%", // 16:9,
      // marginTop: "30"
    },
    cardContent: {
      flexGrow: 1,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    root: {
      // height: 500
    },
  }));
  const classes = useStyles();
  const cards = [
    {
      key: 1,
      heading: "Camp List",
      content: "",
      btnRoute: "#",
      image:
        "https://image.winudf.com/v2/image/Y29tLnJlbGllZmtlcmFsYTEyMy5SRUxJRUZfQ0FNUF9pY29uXzE1MzU1Mjg5MDlfMDAz/icon.png?w=170&fakeurl=1",
    },
    {
      key: 2,
      heading: "Supply Requirments",
      content: "",
      btnRoute: "supply-details",
      image:
        "https://pngimage.net/wp-content/uploads/2018/06/supply-png-8.png",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* <div className={classes.heroContent}> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((data) => (
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={data.imgsrc}
                alt="First slide"
                height={400}
              />
              <Carousel.Caption>
                <h3>{data.disaster_name}</h3>
                <p>{data.slug}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
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
