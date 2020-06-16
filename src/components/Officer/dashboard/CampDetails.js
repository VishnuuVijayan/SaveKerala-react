import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UpdateIcon from "@material-ui/icons/Update";
import { data } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function CampDetails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="MES College of Engineering"
        subheader="Kuttippuram, Kerala"
      />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.campName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Camp Number : #xxx
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <UpdateIcon />
        </IconButton>
        <a href={data.location}>
          <IconButton aria-label="share">
            <LocationOnIcon />
          </IconButton>
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography display="inline">Camp ID:</Typography>
          <Typography display="inline"> {"#" + data.campId}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">Camp Name:</Typography>
          <Typography display="inline">{data.campName}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">District:</Typography>
          <Typography display="inline"> {data.district}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">State:</Typography>
          <Typography display="inline"> {data.state}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">Contact:</Typography>
          <Typography display="inline"> {data.contact}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">Maximum Occupancy:</Typography>
          <Typography display="inline"> {data.maxOccupancy}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">Current Occupancy:</Typography>
          <Typography display="inline"> {data.currentOccupancy}</Typography>
        </CardContent>
        <CardContent>
          <Typography display="inline">Requirements:</Typography>
          <Typography display="inline">
            <Button
              style={{ textTransform: "none", marginLeft: 20 }}
              color="primary"
              variant="contained"
            >
              View Requirements
            </Button>
            <Button
              style={{ marginLeft: 20, textTransform: "none" }}
              color="primary"
              variant="contained"
            >
              Update Requirements
            </Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
