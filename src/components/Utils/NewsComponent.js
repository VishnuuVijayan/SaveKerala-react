import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#fafafa",
    width: "100%",
    // maxWidth: 500,
    maxHeight: 600
    // height: "100%"
    // backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <Box boxShadow={1} className={classes.root}>
      <List>
        <ListItem style={{ fontSize: 30, letterSpacing: 2 }}>
          Latest News
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkucH53iD-M8l7sp8GRFheWcJnL0zcZeHtW0gLFa-MDF9SKl6bOiWLCTmlkes9G5d-FAD0RqSj&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kerala to consult PM Modi on COVID-19 negative certificates for NRKs"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  John Doe
                </Typography>
                {" - 2h ago"}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNbVBd_HB2Ttx18y5NqzmEaRj1TFJgzws7VxibemhGC2cxuO3dirEKQhDVj_fZhULn0_NNp8&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kerala University’s decision to hold exams amid COVID-19 triggers row"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  John Doe
                </Typography>
                {" - 3h ago"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGQAZAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgEDBAUGB//EADgQAAIBAwIDBAcFCQEAAAAAAAABAgMEEQUhBhIxEyJBcVFSYYGRodEUIzJCsSQzNHOyweHw8Rb/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/8QAIhEAAwACAgEEAwAAAAAAAAAAAAECAxESQQQTITFRkaHB/9oADAMBAAIRAxEAPwCOEME2iLRmcjY4kJFtlxkHgYqIuSLKFZEGyaYtolkoW51FGOZdOhLIxMg0SZBlWyORiZBoMiyRFktkWigBQDmjcuJbkjIlEszMWbNZosSRbkXZlmQ2aINEWy3JkpMtSY6aFNGHqtalSspyr1OyhzR7zly/mXiZanzJNNNPozheMdWV1cKyt5J0aL78k9pT+i/XJtuEtYV1bKzuJ/tFJYi5P8cfD3otcWp2VFkTvR0yYIp7FcnExjRUiRnNRlFNPvPG3k3/AGJZJJkdFMgoDpzR0tSBiVVg2VaGMmurvB51WbDkxZ9TG7WMqtSmmswSbWV45+heqywm30XX2Gk03WbW+1W7tqLTlCMWpprFTHXHlkvYk6lsr5KUtJ9mzkaDivVYWFjK3jiVxcQcUvVj0cvp/g36WZYPLNevnf6pcV8vl5uWC9EVsi1488q39FTyr4Tpdmvk9y7a1p29xSr0mlOnNSjlZ3TLJUvmaeo6TqNLVLKFzTXJL8M4erJdUZrZwfBN3Olqyt+b7uvFpp+lLKfnszuqk404SqVJKEIrMpSeEkVrWq9i/ivlO2YGq3NtQqWX2qSTdwuzz4PDWfn8zPy/E811/U5anfyqc33MMxpJLHdz182dRwvrcb2irS6q5uoruZWOeKXp8WMctIXOROmjoMgi9uoIbY3idxdx5U8mmumlnLNlxU7q1trbsZU3VdzRhUbg8NOSUsLOxxvHOuT0i3o/Z1F16s+7zLKSjhvb4L3mBjw1dqV3/DS9aZxun0azjXW1Y0JWFFKVe4g+d5/dxe3xZwVndVbO6p3FCTjOnLK3fw8i7q99LUdRuLuSce1m2ov8q6Je5YMM9FhxLHHEw82Z5L5fg9U03UqWq6XK6pLllySU4Z3hNL/Wjytmz0bW7nSFW+zKD7ZJSU03jHivbuaxhjx8G9fAZcvqKd/KKAAaJM3RrlWep2txJNxhUTaXXHRnUcfahKHZafTeIyiqlX2+qvk38DkbP+Ko/wAyP6m848WOIJvL3pQe/kQaTpMbNNQznWSpVJ0qkalOTjOLzGS8GQKomKPUtLuFqGnW91zOLqQ7yi8Lm6P55BicIxf/AJ+1fp5/62BDXuX4acps7LjPiHSqrodnqNq8XNKW1aLwlJNt7nBcYT0nV7u3nDWaFOMVJSfeqLdx6RWy2y/bg4PIyLw+HOJqk/v9ib8l1HBorUSjOSjJSSbSkvEiAWysAAAAAABKEnCakuqeUZeq6lcapcq4u3B1FFR7sVFYX/TCKgd30UAAHDIpXt1SgoUrmtCC6RjUaSBjgDu2AABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
            />
          </ListItemAvatar>
          <ListItemText
            primary="COVID-19 pandemic: Mosque in Kerala starts smart card system to avoid crowding"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  John Doe
                </Typography>
                {" - 3h ago"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUZ-NbUoYWOkXhcXIfxCk7FDtdbLTWC1CxEDyrXjeRwYw22UDqVbr45TdyZ3LuQpNCRC9WAQ&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Tamil Nadu sees over 1,900 new Covid-19 cases for third day in a row, count nears 45,000"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  John Doe
                </Typography>
                {" - 4h ago"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
